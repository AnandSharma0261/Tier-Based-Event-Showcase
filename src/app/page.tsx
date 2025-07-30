'use client'

import Link from 'next/link'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🎉</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Event Showcase
            </h1>
          </div>
        
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton>
                <button className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-all duration-300 border border-gray-300 rounded-full hover:bg-gray-50">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-pink-400/25 transform hover:scale-105">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            
            <SignedIn>
              <Link href="/events">
                <button className="px-6 py-2 bg-gradient-to-r from-emerald-400 to-teal-400 text-white rounded-full hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-lg hover:shadow-emerald-400/25 transform hover:scale-105">
                  View Events
                </button>
              </Link>
              <div className="ml-4">
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/70 text-gray-700 backdrop-blur-sm border border-gray-200 mb-6">
              ✨ Premium Event Experience ✨
            </span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Tier-Based
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Event Showcase</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            🚀 Discover exclusive events based on your membership tier. From free community events 
            to premium platinum experiences that will make you smile! 🎯
          </p>
          
          <SignedOut>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignUpButton>
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-400 text-white text-lg font-bold rounded-full hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-lg hover:shadow-emerald-400/25 transform hover:scale-105">
                  🚀 Get Started Free
                </button>
              </SignUpButton>
              <SignInButton>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-600 text-lg font-bold rounded-full hover:bg-gray-50 transition-all duration-300">
                  👋 Sign In
                </button>
              </SignInButton>
            </div>
          </SignedOut>
          
          <SignedIn>
            <Link href="/events">
              <button className="px-10 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xl font-bold rounded-full hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-pink-400/25 transform hover:scale-105">
                🎪 View Your Events
              </button>
            </Link>
          </SignedIn>
        </div>

        {/* Tier Information */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Free Tier */}
          <div className="text-center p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-gray-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-3xl">🆓</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Free Tier</h3>
            <p className="text-gray-600 text-lg">Community events and basic workshops</p>
            <div className="mt-4 text-gray-500">
              <span className="text-sm">Starting at</span>
              <div className="text-2xl font-bold text-gray-700">$0/month</div>
            </div>
          </div>
          
          {/* Silver Tier */}
          <div className="text-center p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-gray-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-3xl">🥈</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Silver Tier</h3>
            <p className="text-gray-600 text-lg">Premium workshops and networking dinners</p>
            <div className="mt-4 text-gray-500">
              <span className="text-sm">Starting at</span>
              <div className="text-2xl font-bold text-gray-700">$29/month</div>
            </div>
          </div>

          {/* Gold Tier */}
          <div className="text-center p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-gray-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-3xl">🥇</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Gold Tier</h3>
            <p className="text-gray-600 text-lg">Masterclasses and VIP conference access</p>
            <div className="mt-4 text-gray-500">
              <span className="text-sm">Starting at</span>
              <div className="text-2xl font-bold text-gray-700">$99/month</div>
            </div>
          </div>

          {/* Platinum Tier */}
          <div className="text-center p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-gray-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-3xl">💎</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Platinum Tier</h3>
            <p className="text-gray-600 text-lg">Private consultations and exclusive tours</p>
            <div className="mt-4 text-gray-500">
              <span className="text-sm">Starting at</span>
              <div className="text-2xl font-bold text-gray-700">$299/month</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
