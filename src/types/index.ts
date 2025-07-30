export type UserTier = 'free' | 'silver' | 'gold' | 'platinum';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image_url: string;
  tier: UserTier;
  created_at?: string;
  updated_at?: string;
}

export interface User {
  id: string;
  email: string;
  tier: UserTier;
}
