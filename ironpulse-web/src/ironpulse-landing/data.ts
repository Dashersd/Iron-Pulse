import type { LucideIcon } from 'lucide-react';
import { Activity, Award, Clock, Dumbbell, Flame, Heart, Target, Users, Zap } from 'lucide-react';

export type AboutCard = { icon: LucideIcon; title: string; desc: string; color: string };
export type Program = { title: string; desc: string; icon: LucideIcon; gradient: string };
export type Feature = { icon: LucideIcon; title: string; desc: string; color: string };
export type Trainer = { name: string; specialty: string; initials: string; color: string; image: string };
export type Plan = { name: string; price: number; features: string[]; recommended: boolean };
export type Testimonial = { name: string; text: string; rating: number };

export const aboutCards: AboutCard[] = [
  { icon: Dumbbell, title: 'Strength', desc: 'Build raw power and muscle mass', color: 'from-red-600 to-red-800' },
  { icon: Zap, title: 'Endurance', desc: 'Push beyond your limits', color: 'from-orange-600 to-red-600' },
  { icon: Target, title: 'Discipline', desc: 'Master mind and body', color: 'from-red-800 to-red-950' },
];

export const programs: Program[] = [
  {
    title: 'Strength Training',
    desc: 'Build muscle and raw power with compound movements',
    icon: Dumbbell,
    gradient: 'from-red-600 to-red-800',
  },
  {
    title: 'Cardio Conditioning',
    desc: 'Boost endurance and burn fat with high-intensity workouts',
    icon: Activity,
    gradient: 'from-orange-600 to-red-600',
  },
  {
    title: 'Yoga & Mobility',
    desc: 'Enhance flexibility and recover with mindful movement',
    icon: Heart,
    gradient: 'from-purple-600 to-red-600',
  },
  {
    title: 'Boxing & Functional',
    desc: 'Develop explosive power and real-world strength',
    icon: Flame,
    gradient: 'from-red-700 to-red-900',
  },
];

export const whyChooseUsFeatures: Feature[] = [
  { icon: Award, title: 'Certified Trainers', desc: 'Expert guidance every step', color: 'text-yellow-500' },
  { icon: Dumbbell, title: 'Modern Equipment', desc: 'State-of-the-art facilities', color: 'text-red-600' },
  { icon: Clock, title: 'Flexible Schedule', desc: 'Open early to late', color: 'text-blue-500' },
  { icon: Users, title: 'Strong Community', desc: 'Supportive and motivated', color: 'text-green-500' },
];

export const trainers: Trainer[] = [
  {
    name: 'Marcus Steel',
    specialty: 'Strength & Conditioning',
    initials: 'MS',
    color: 'from-red-600 to-red-800',
    image: 'https://static.vecteezy.com/system/resources/previews/027/186/966/large_2x/black-male-bodybuilder-exercising-at-the-gym-focusing-on-his-arms-while-looking-towards-an-open-area-fit-african-american-man-working-out-his-biceps-pr-free-photo.jpg'
  },
  {
    name: 'Sofia Blaze',
    specialty: 'HIIT & Cardio',
    initials: 'SB',
    color: 'from-orange-600 to-red-600',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'David Iron',
    specialty: 'Functional Training',
    initials: 'DI',
    color: 'from-red-800 to-red-950',
    image: 'https://tse1.mm.bing.net/th/id/OIP.M-FPMiHUjo2QiNeLZRjOmwHaE8?pid=Api&P=0&h=220'
  },
];

export const membershipPlans: Plan[] = [
  { name: 'Basic', price: 49, features: ['Gym Access', 'Locker Room', 'Mobile App'], recommended: false },
  {
    name: 'Pro',
    price: 89,
    features: ['Everything in Basic', 'Group Classes', 'Nutrition Guide', '1 PT Session/month'],
    recommended: true,
  },
  {
    name: 'Elite',
    price: 149,
    features: ['Everything in Pro', 'Unlimited PT Sessions', 'Meal Planning', 'Recovery Suite'],
    recommended: false,
  },
];

export const testimonials: Testimonial[] = [
  { name: 'Jake Morrison', text: 'IronPulse transformed my life. Down 40lbs and stronger than ever.', rating: 5 },
  { name: "Emma Collins", text: "The trainers here are incredible. Best investment I've made in myself.", rating: 5 },
  { name: 'Ryan Park', text: 'Amazing community and top-tier equipment. This is where champions are made.', rating: 5 },
];

export const footerSocials = ['Instagram', 'Facebook', 'Twitter'] as const;

