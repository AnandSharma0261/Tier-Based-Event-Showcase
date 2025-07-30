'use client'

import { Event } from '@/types'
import Image from 'next/image'

interface EventCardProps {
  event: Event
  isAccessible: boolean
}

const getTierColor = (tier: string) => {
  switch (tier) {
    case 'free':
      return 'bg-gradient-to-r from-gray-300 to-gray-400 text-white'
    case 'silver':
      return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white'
    case 'gold':
      return 'bg-gradient-to-r from-yellow-300 to-yellow-400 text-white'
    case 'platinum':
      return 'bg-gradient-to-r from-purple-300 to-pink-300 text-white'
    default:
      return 'bg-gradient-to-r from-gray-300 to-gray-400 text-white'
  }
}

const getTierEmoji = (tier: string) => {
  switch (tier) {
    case 'free':
      return '🆓'
    case 'silver':
      return '🥈'
    case 'gold':
      return '🥇'
    case 'platinum':
      return '💎'
    default:
      return '🎫'
  }
}

export default function EventCard({ event, isAccessible }: EventCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className={`relative bg-white/70 backdrop-blur-md rounded-2xl border border-gray-200 overflow-hidden transition-all duration-500 shadow-lg ${
      !isAccessible 
        ? 'opacity-60 cursor-not-allowed hover:opacity-80' 
        : 'cursor-pointer hover:scale-105 hover:shadow-xl hover:bg-white/80'
    }`}>
      {/* Tier Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`px-3 py-1 rounded-full text-sm font-bold shadow-lg ${getTierColor(event.tier)}`}>
          {getTierEmoji(event.tier)} {event.tier.charAt(0).toUpperCase() + event.tier.slice(1)}
        </span>
      </div>

      {/* Lock Overlay for Restricted Events */}
      {!isAccessible && (
        <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm z-20 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200 text-center shadow-lg">
            <span className="text-6xl mb-2 block">🔒</span>
            <p className="text-gray-800 font-bold text-lg">Upgrade Required</p>
            <p className="text-gray-600 text-sm">Unlock with higher tier</p>
          </div>
        </div>
      )}

      {/* Event Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.image_url || '/placeholder-event.jpg'}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = `https://source.unsplash.com/400x300/?event,${event.tier}`
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
      </div>

      {/* Event Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {event.description}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span className="text-2xl mr-2">📅</span>
          <span className="font-medium">{formatDate(event.date)}</span>
        </div>
        
        {isAccessible ? (
          <button className="w-full px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 text-white font-bold rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-lg hover:shadow-emerald-400/25 transform hover:scale-105">
            🎟️ View Details
          </button>
        ) : (
          <button 
            disabled
            className="w-full px-6 py-3 bg-gray-200 text-gray-500 font-bold rounded-xl cursor-not-allowed border border-gray-300"
          >
            🔓 Upgrade to Access
          </button>
        )}
      </div>
    </div>
  )
}
