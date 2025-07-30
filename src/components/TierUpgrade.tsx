'use client'

import { UserTier } from '@/types'

interface TierUpgradeProps {
  currentTier: UserTier
  onUpgrade: () => void
}

const tierInfo = {
  free: { name: 'Free', next: 'Silver', color: 'gray' },
  silver: { name: 'Silver', next: 'Gold', color: 'gray' },
  gold: { name: 'Gold', next: 'Platinum', color: 'yellow' },
  platinum: { name: 'Platinum', next: null, color: 'purple' }
}

export default function TierUpgrade({ currentTier, onUpgrade }: TierUpgradeProps) {
  const current = tierInfo[currentTier]
  
  if (!current.next) return null

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 mb-8 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Unlock More Events with {current.next} Tier
          </h3>
          <p className="text-blue-100 mb-4">
            You&apos;re currently on the {current.name} tier. Upgrade to {current.next} to access premium events and exclusive content.
          </p>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>More exclusive events</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Premium content access</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>VIP networking opportunities</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button
            onClick={onUpgrade}
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Upgrade to {current.next}
          </button>
          <p className="text-xs text-blue-200 mt-2">
            * This is a simulation for demo purposes
          </p>
        </div>
      </div>
    </div>
  )
}
