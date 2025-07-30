-- Create the events table
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  image_url VARCHAR(500),
  tier VARCHAR(20) NOT NULL CHECK (tier IN ('free', 'silver', 'gold', 'platinum')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  
  -- Add constraints for better data integrity
  CONSTRAINT events_title_length CHECK (length(title) >= 3),
  CONSTRAINT events_description_length CHECK (length(description) >= 10),
  CONSTRAINT events_future_date CHECK (date > CURRENT_TIMESTAMP)
);

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows everyone to read events
CREATE POLICY "Anyone can view events" ON events FOR SELECT USING (true);

-- Insert sample events (2 per tier)
INSERT INTO events (title, description, date, image_url, tier) VALUES 
-- Free Tier Events
('Community Meetup', 'Join our monthly community gathering to network with fellow developers and share your latest projects. Light refreshments will be provided.', '2024-08-15 18:00:00+00:00', 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop', 'free'),
('Beginner Workshop: Web Development Basics', 'Learn the fundamentals of web development including HTML, CSS, and JavaScript. Perfect for those just starting their coding journey.', '2024-08-20 14:00:00+00:00', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop', 'free'),

-- Silver Tier Events
('Advanced React Patterns', 'Deep dive into advanced React patterns including custom hooks, context optimization, and performance techniques used by industry professionals.', '2024-08-25 10:00:00+00:00', 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop', 'silver'),
('Networking Dinner with Industry Leaders', 'Exclusive dinner event with CTOs and senior developers from top tech companies. Limited to 50 attendees for meaningful conversations.', '2024-09-05 19:00:00+00:00', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop', 'silver'),

-- Gold Tier Events
('Masterclass: System Design at Scale', 'Learn how to design systems that handle millions of users from engineers at Google, Amazon, and Meta. Includes hands-on architecture exercises.', '2024-09-10 09:00:00+00:00', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop', 'gold'),
('VIP Tech Conference Access', 'Skip the lines and enjoy premium seating at TechCon 2024, plus exclusive access to speaker meet-and-greets and VIP lounge areas.', '2024-09-20 08:00:00+00:00', 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop', 'gold'),

-- Platinum Tier Events
('Private Consultation with Tech Founders', 'One-on-one sessions with successful startup founders including the CEO of a $1B unicorn. Discuss your ideas and get personalized advice.', '2024-10-01 13:00:00+00:00', 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop', 'platinum'),
('Exclusive Silicon Valley Tour', 'Behind-the-scenes tours of Google, Apple, and Meta headquarters with private presentations from senior leadership teams.', '2024-10-15 10:00:00+00:00', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', 'platinum');

-- Create an index on tier for better query performance
CREATE INDEX idx_events_tier ON events(tier);

-- Create an index on date for better sorting performance
CREATE INDEX idx_events_date ON events(date);
