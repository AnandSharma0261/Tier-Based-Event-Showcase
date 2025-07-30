import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tier-Based Event Showcase',
  description: 'A showcase of events based on user tiers - Free, Silver, Gold, and Platinum',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  // If no valid Clerk key, show setup message
  if (!publishableKey || publishableKey === 'pk_test_your_key_here') {
    return (
      <html lang="en">
        <body className={inter.className}>
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-md mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Setup Required</h1>
              <p className="text-gray-600 mb-6">
                Please set up your Clerk authentication keys to continue.
              </p>
              <div className="text-left bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Steps:</p>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Copy <code className="bg-white px-1 rounded">.env.local.example</code> to <code className="bg-white px-1 rounded">.env.local</code></li>
                  <li>2. Get keys from <a href="https://clerk.com" className="text-blue-600 hover:underline">clerk.com</a></li>
                  <li>3. Replace the placeholder keys in <code className="bg-white px-1 rounded">.env.local</code></li>
                  <li>4. Restart the server</li>
                </ol>
              </div>
              <a 
                href="https://clerk.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Clerk Keys
              </a>
            </div>
          </div>
        </body>
      </html>
    )
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
