# Setup Guide - Tier-Based Event Showcase

## Quick Start Instructions

### 1. Environment Variables Setup

1. Copy `.env.local.example` to `.env.local`
2. Fill in your Clerk and Supabase credentials:

```bash
cp .env.local.example .env.local
```

### 2. Clerk Setup (Authentication)

1. Go to [clerk.com](https://clerk.com) and create a free account
2. Create a new application
3. In your Clerk dashboard:
   - Go to **API Keys**
   - Copy the **Publishable Key** and **Secret Key**
   - Paste them in your `.env.local` file

4. Configure authentication:
   - Go to **User & Authentication > Email, Phone, Username**
   - Enable **Email addresses**
   - Set it as required

5. Configure redirect URLs:
   - Go to **Domains**
   - Add `http://localhost:3000` for development
   - Add your production domain later

### 3. Supabase Setup (Database)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. In your Supabase dashboard:
   - Go to **Settings > API**
   - Copy the **Project URL** and **Project API keys > anon public**
   - Paste them in your `.env.local` file

4. Set up the database:
   - Go to **SQL Editor**
   - Paste the contents of `database/schema.sql`
   - Click **Run** to create tables and insert sample data

### 4. Test the Application

```bash
# Make sure you're in the project directory
cd tier-based-event-showcase

# Start the development server
npm run dev
```

### 5. Testing User Tiers

1. **Sign up** for a new account (starts as Free tier)
2. **Navigate to Events** page
3. **Use the upgrade button** to simulate tier upgrades
4. **View different events** as you upgrade tiers

### 6. Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add the same environment variables from `.env.local`
5. Deploy!

## Troubleshooting

### Common Issues:

1. **"Module not found" errors**: Run `npm install` again
2. **Clerk errors**: Check your API keys in `.env.local`
3. **Supabase errors**: Verify your database URL and anon key
4. **Build errors**: Make sure all environment variables are set

### Demo Credentials

For testing, you can:
- Sign up with any email (use temporary emails if needed)
- Use the tier upgrade button to test different access levels
- Events are pre-populated in the database

## Features Included

✅ User Authentication (Clerk)
✅ Tier-based event filtering
✅ Responsive design with Tailwind CSS
✅ TypeScript for type safety
✅ Supabase database with sample data
✅ Loading states and error handling
✅ Tier upgrade simulation
✅ Row-level security
✅ SEO-optimized pages

## Next Steps

1. **Customize the events** in your Supabase database
2. **Add real payment processing** for tier upgrades
3. **Implement event booking** functionality
4. **Add admin dashboard** for event management
5. **Set up email notifications** for new events

Happy coding! 🚀
