# Tier-Based Event Showcase

A modern web application built with Next.js 14, Clerk authentication, and Supabase database that showcases events based on user tiers (Free, Silver, Gold, Platinum).

## 🚀 Features

- **Authentication**: Secure user authentication with Clerk
- **Tier-Based Access**: Events filtered by user tier level
- **Modern UI**: Responsive design with Tailwind CSS
- **Real-time Data**: Supabase PostgreSQL database
- **Type Safety**: Full TypeScript implementation
- **Row-Level Security**: Secure data access patterns

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Clerk.dev
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel-ready

## 🏗️ Project Structure

```
src/
├── app/
│   ├── events/
│   │   └── page.tsx          # Events listing page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── EventCard.tsx         # Event card component
│   ├── LoadingSpinner.tsx    # Loading component
│   └── TierUpgrade.tsx       # Tier upgrade component
├── lib/
│   └── supabase.ts           # Supabase client
└── types/
    └── index.ts              # TypeScript definitions
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Clerk account
- Supabase account

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd tier-based-event-showcase
npm install
```

### 2. Environment Setup

Copy `.env.local.example` to `.env.local` and fill in your credentials:

```env
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Database Setup

1. Create a new Supabase project
2. Run the SQL from `database/schema.sql` in your Supabase SQL editor
3. This will create the events table with sample data

### 4. Clerk Configuration

1. Create a Clerk application
2. Enable Email authentication
3. Configure the following in your Clerk dashboard:
   - **Allowed redirect URLs**: `http://localhost:3000`, `http://localhost:3000/events`
   - **Public Metadata**: Enable to store user tier information

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 User Tiers

The application supports four tier levels:

| Tier | Level | Access |
|------|-------|--------|
| **Free** | 0 | Community events, basic workshops |
| **Silver** | 1 | Premium workshops, networking events |
| **Gold** | 2 | Masterclasses, VIP conference access |
| **Platinum** | 3 | Private consultations, exclusive tours |

Users can only access events at their tier level or below. A tier upgrade simulation is included for demo purposes.

## 🔐 Authentication Flow

1. Users sign up/login via Clerk
2. Default tier is set to "Free"
3. Tier information is stored in Clerk's `publicMetadata`
4. Events are filtered based on user's tier level
5. Tier upgrades update the user's metadata

## 🎨 Demo Credentials

For testing purposes, you can use these approaches:

1. **Sign up normally** - starts with Free tier
2. **Use the tier upgrade button** - simulates tier progression
3. **Manually set tier in Clerk dashboard** - for testing specific tiers

## 📱 Screenshots

### Home Page
- Modern landing page with tier information
- Authentication buttons for sign in/up
- Responsive design with Tailwind CSS

### Events Page
- Grid layout of event cards
- Tier-based filtering and access control
- Upgrade prompts for restricted events
- Loading states and error handling

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production

Update your `.env.local` with production URLs:

```env
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding New Events

Add events directly in Supabase or create an admin interface:

```sql
INSERT INTO events (title, description, date, image_url, tier) 
VALUES ('Event Title', 'Description', '2024-12-01 10:00:00+00:00', 'image-url', 'gold');
```

## 🛡️ Security Features

- **Row-Level Security** enabled on events table
- **Environment variables** for sensitive data
- **Type safety** with TypeScript
- **Input validation** and error handling
- **Secure authentication** with Clerk

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🙋‍♂️ Support

If you encounter any issues:

1. Check the environment variables
2. Verify Clerk and Supabase configurations
3. Review the browser console for errors
4. Check the Next.js development server logs

## 🎉 What's Next?

Potential enhancements:
- Admin dashboard for event management
- Payment integration for tier upgrades
- Email notifications for new events
- Event booking and calendar integration
- User profiles and preferences
- Mobile app with React Native

---

Built with ❤️ using Next.js, Clerk, and Supabase
