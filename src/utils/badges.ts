import { Brain, Shield, Lock, Fish, Zap, ShieldAlert, Key, Crown, LucideIcon, Target, Compass, Search, BookOpen } from 'lucide-react';
import { UserDocument } from '../types';

export type BadgeTier = 'Beginner' | 'Intermediate' | 'Advanced' | 'Master';

export interface BadgeDefinition {
  id: string;
  name: string;
  description: string;
  tier: BadgeTier;
  icon: LucideIcon;
  colorClass: string;
  shapeClass: string;
  maxProgress: number;
  getProgress: (stats: NonNullable<UserDocument['stats']>, badges: string[]) => number;
}

export const BADGE_DEFINITIONS: BadgeDefinition[] = [
  {
    id: 'Cyber Explorer',
    name: 'Cyber Explorer',
    description: 'Complete your first Learning Hub topic.',
    tier: 'Beginner',
    icon: Compass,
    colorClass: 'text-blue-400 border-blue-400/50 bg-blue-400/10 shadow-[0_0_15px_rgba(96,165,250,0.5)]',
    shapeClass: 'rounded-full',
    maxProgress: 1,
    getProgress: (stats) => Math.min(1, stats.topicsCompleted || 0)
  },
  {
    id: 'Curious Mind',
    name: 'Curious Mind',
    description: 'Ask the AI Mentor a question.',
    tier: 'Beginner',
    icon: Brain,
    colorClass: 'text-blue-400 border-blue-400/50 bg-blue-400/10 shadow-[0_0_15px_rgba(96,165,250,0.5)]',
    shapeClass: 'rounded-full',
    maxProgress: 1,
    getProgress: (stats) => Math.min(1, stats.aiQueries)
  },
  {
    id: 'Password Master',
    name: 'Password Master',
    description: 'Create 5 strong passwords.',
    tier: 'Intermediate',
    icon: Key,
    colorClass: 'text-green-400 border-green-400/50 bg-green-400/10 shadow-[0_0_15px_rgba(74,222,128,0.5)]',
    shapeClass: 'rounded-xl',
    maxProgress: 5,
    getProgress: (stats) => Math.min(5, stats.strongPasswords)
  },
  {
    id: 'Phishing Detector',
    name: 'Phishing Detector',
    description: 'Detect 5 phishing attempts.',
    tier: 'Intermediate',
    icon: Fish,
    colorClass: 'text-green-400 border-green-400/50 bg-green-400/10 shadow-[0_0_15px_rgba(74,222,128,0.5)]',
    shapeClass: 'rounded-xl',
    maxProgress: 5,
    getProgress: (stats) => Math.min(5, stats.phishingDetected)
  },
  {
    id: 'Security Analyst',
    name: 'Security Analyst',
    description: 'Pass 10 quizzes in the Learning Hub.',
    tier: 'Advanced',
    icon: BookOpen,
    colorClass: 'text-orange-400 border-orange-400/50 bg-orange-400/10 shadow-[0_0_15px_rgba(251,146,60,0.5)]',
    shapeClass: 'rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm',
    maxProgress: 10,
    getProgress: (stats) => Math.min(10, stats.quizzesPassed || 0)
  },
  {
    id: 'Cyber Guardian',
    name: 'Cyber Guardian',
    description: 'Complete 5 Cyber Attack Simulations.',
    tier: 'Advanced',
    icon: Shield,
    colorClass: 'text-orange-400 border-orange-400/50 bg-orange-400/10 shadow-[0_0_15px_rgba(251,146,60,0.5)]',
    shapeClass: 'rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm',
    maxProgress: 5,
    getProgress: (stats) => Math.min(5, stats.simulationsCompleted || 0)
  },
  {
    id: 'Threat Hunter',
    name: 'Threat Hunter',
    description: 'Analyze 10 phishing attempts.',
    tier: 'Advanced',
    icon: Search,
    colorClass: 'text-orange-400 border-orange-400/50 bg-orange-400/10 shadow-[0_0_15px_rgba(251,146,60,0.5)]',
    shapeClass: 'rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm',
    maxProgress: 10,
    getProgress: (stats) => Math.min(10, stats.phishingDetected)
  },
  {
    id: 'Elite Defender',
    name: 'Elite Defender',
    description: 'Complete all 50 Learning Hub topics.',
    tier: 'Master',
    icon: Target,
    colorClass: 'text-yellow-400 border-yellow-400/50 bg-yellow-400/10 shadow-[0_0_15px_rgba(250,204,21,0.5)]',
    shapeClass: 'rounded-t-full rounded-b-md',
    maxProgress: 50,
    getProgress: (stats) => Math.min(50, stats.topicsCompleted || 0)
  },
  {
    id: 'CREDENTIA Master',
    name: 'CREDENTIA Master',
    description: 'Unlock all other badges.',
    tier: 'Master',
    icon: Crown,
    colorClass: 'text-yellow-400 border-yellow-400/50 bg-yellow-400/10 shadow-[0_0_15px_rgba(250,204,21,0.5)]',
    shapeClass: 'rounded-t-full rounded-b-md',
    maxProgress: 8,
    getProgress: (stats, badges) => Math.min(8, badges.filter(b => b !== 'CREDENTIA Master').length)
  }
];

export const checkNewBadges = (stats: NonNullable<UserDocument['stats']>, currentBadges: string[]): string[] => {
  const newBadges: string[] = [];
  
  for (const badge of BADGE_DEFINITIONS) {
    if (!currentBadges.includes(badge.id) && !newBadges.includes(badge.id)) {
      // Check if progress meets maxProgress
      // For CREDENTIA Master, we need to pass the updated badges list
      const progress = badge.getProgress(stats, [...currentBadges, ...newBadges]);
      if (progress >= badge.maxProgress) {
        newBadges.push(badge.id);
      }
    }
  }
  
  return newBadges;
};
