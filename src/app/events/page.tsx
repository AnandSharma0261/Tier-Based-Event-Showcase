'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Event, UserTier } from '@/types'
import EventCard from '@/components/EventCard'
import TierUpgrade from '@/components/TierUpgrade'
import LoadingSpinner from '@/components/LoadingSpinner'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const TIER_HIERARCHY: Record<UserTier, number> = {
  free: 0,
  silver: 1,
  gold: 2,
  platinum: 3
}

export default function EventsPage() {
  const { user, isLoaded } = useUser()
  const [events, setEvents] = useState<Event[]>([])
  const [accessibleEvents, setAccessibleEvents] = useState<Event[]>([])
  const [restrictedEvents, setRestrictedEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [userTier, setUserTier] = useState<UserTier>('free')

  useEffect(() => {
    if (isLoaded && user) {
      // Get user tier from Clerk metadata (default to 'free')
      const tier = (user.publicMetadata?.tier as UserTier) || 'free'
      setUserTier(tier)
      fetchEvents()
    }
  }, [isLoaded, user])

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true })

      if (error) throw error

      setEvents(data || [])
      filterEventsByTier(data || [], userTier)
    } catch (err) {
      setError('Failed to load events')
      console.error('Error fetching events:', err)
    } finally {
      setLoading(false)
    }
  }

  const filterEventsByTier = (allEvents: Event[], tier: UserTier) => {
    const userTierLevel = TIER_HIERARCHY[tier]
    
    const accessible = allEvents.filter(event => 
      TIER_HIERARCHY[event.tier] <= userTierLevel
    )
    
    const restricted = allEvents.filter(event => 
      TIER_HIERARCHY[event.tier] > userTierLevel
    )
    
    setAccessibleEvents(accessible)
    setRestrictedEvents(restricted)
  }

  const simulateTierUpgrade = async () => {
    const tiers: UserTier[] = ['free', 'silver', 'gold', 'platinum']
    const currentIndex = tiers.indexOf(userTier)
    
    if (currentIndex < tiers.length - 1) {
      const newTier = tiers[currentIndex + 1]
      
      try {
        // Simulate tier upgrade (in a real app, this would be done server-side)
        setUserTier(newTier)
        filterEventsByTier(events, newTier)
        
        // In a real application, you would update the user's tier in your backend
        // and then sync it with Clerk's metadata
        console.log(`Tier upgraded from ${userTier} to ${newTier}`)
      } catch (err) {
        console.error('Error upgrading tier:', err)
      }
    }
  }

  if (!isLoaded || loading) {
    return <LoadingSpinner />
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please sign in to view events</h1>
          <Link href="/">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error: {error}</h1>
          <button 
            onClick={fetchEvents}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">🎪</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Event Showcase</h1>
            </div>
          </Link>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <span className="text-gray-600 font-medium">Your tier:</span>
              <span className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm border shadow-lg ${
                userTier === 'free' ? 'bg-gray-100 text-gray-700 border-gray-200' :
                userTier === 'silver' ? 'bg-gray-200 text-gray-700 border-gray-300' :
                userTier === 'gold' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
                'bg-purple-100 text-purple-700 border-purple-200'
              }`}>
                {userTier === 'free' ? '🆓 Free' :
                 userTier === 'silver' ? '🥈 Silver' :
                 userTier === 'gold' ? '🥇 Gold' :
                 '💎 Platinum'}
              </span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-full p-1">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Exclusive Events
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            🎯 Discover amazing events tailored to your membership tier! 🌟
          </p>
        </div>

        {/* Tier Upgrade Section */}
        {userTier !== 'platinum' && (
          <div className="mb-12">
            <TierUpgrade 
              currentTier={userTier} 
              onUpgrade={simulateTierUpgrade}
            />
          </div>
        )}

        {/* Accessible Events */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl px-8 py-4 border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <span className="text-4xl">🎪</span>
                Available Events 
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-4 py-2 rounded-full text-lg font-bold">
                  {accessibleEvents.length}
                </span>
              </h2>
            </div>
          </div>
          
          {accessibleEvents.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-12 border border-gray-200 max-w-md mx-auto shadow-lg">
                <span className="text-6xl mb-4 block">😔</span>
                <p className="text-gray-600 text-xl">No events available for your tier.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accessibleEvents.map((event) => (
                <div key={event.id} className="transform transition-all duration-300 hover:scale-105">
                  <EventCard 
                    event={event} 
                    isAccessible={true}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Restricted Events */}
        {restrictedEvents.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white/70 backdrop-blur-md rounded-2xl px-8 py-4 border border-gray-200 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                  <span className="text-4xl">🔒</span>
                  Upgrade to Access 
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-full text-lg font-bold">
                    {restrictedEvents.length}
                  </span>
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restrictedEvents.map((event) => (
                <div key={event.id} className="transform transition-all duration-300 hover:scale-105 opacity-75">
                  <EventCard 
                    event={event} 
                    isAccessible={false}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
