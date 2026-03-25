import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { User, Camera, Shield, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '../supabase';
import { toast } from 'sonner';
import { UserDocument } from '../types';

interface OnboardingProps {
  user: { uid: string; email: string };
  onComplete: (profile: UserDocument) => void;
}

export function Onboarding({ user, onComplete }: OnboardingProps) {
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setProfileImage(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      toast.error('Username is required');
      return;
    }

    setIsSubmitting(true);
    try {
      let finalImageUrl = '';

      // 1. Upload image to Supabase Storage if present
      if (profileImage && fileInputRef.current?.files?.[0]) {
        const file = fileInputRef.current.files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `profile.${fileExt}`;
        const filePath = `${user.uid}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('profile-images')
          .upload(filePath, file, { upsert: true });

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('profile-images')
          .getPublicUrl(filePath);
        
        finalImageUrl = publicUrl;
      }

      const defaultStats = {
        aiQueries: 0,
        actionsTaken: 0,
        strongPasswords: 0,
        phishingDetected: 0,
        threatsAnalyzed: 0,
        toolsUsed: [],
        simulationsCompleted: 0,
        topicsCompleted: 0,
        quizzesPassed: 0
      };

      const profileData = {
        id: user.uid,
        name: username,
        email: user.email,
        xp: 0,
        level: 1,
        created_at: new Date().toISOString(),
        profile_image: finalImageUrl,
        badges: [],
        completed_topics: [],
        quiz_scores: {},
        simulation_scores: {},
        stats: defaultStats,
        risk_score: 15,
        preferences: {
          darkMode: true,
          highContrast: false,
          notifications: true,
          soundEffects: true,
          hapticFeedback: true
        }
      };

      // 2. Insert into profiles table
      const { error: insertError } = await supabase
        .from('profiles')
        .insert(profileData);

      if (insertError) throw insertError;

      // 3. Map to UserDocument and complete
      const userDoc: UserDocument = {
        uid: profileData.id,
        name: profileData.name,
        email: profileData.email,
        xp: profileData.xp,
        level: profileData.level,
        createdAt: profileData.created_at,
        profileImage: profileData.profile_image,
        badges: profileData.badges,
        completedTopics: profileData.completed_topics,
        quizScores: profileData.quiz_scores,
        simulationScores: profileData.simulation_scores,
        stats: profileData.stats,
        riskScore: profileData.risk_score,
        preferences: profileData.preferences
      };

      toast.success('Profile created successfully!');
      onComplete(userDoc);
    } catch (error: any) {
      console.error('Onboarding error:', error);
      toast.error('Failed to create profile', {
        description: error.message || 'Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-cyber-bg text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyber-blue/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyber-purple/20 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 max-w-md w-full bg-cyber-card border border-white/10 p-8 rounded-3xl shadow-2xl space-y-8"
      >
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-cyber-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-cyber-blue/20">
            <Shield className="w-8 h-8 text-cyber-blue" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Agent Setup</h1>
          <p className="text-white/60">Complete your profile to enter CREDENTIA</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Image Upload */}
          <div className="flex flex-col items-center space-y-4">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-24 h-24 rounded-full bg-black/40 border-2 border-dashed border-white/20 flex items-center justify-center cursor-pointer hover:border-cyber-blue/50 transition-colors relative group overflow-hidden"
            >
              {profileImage ? (
                <img src={profileImage} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <Camera className="w-8 h-8 text-white/20 group-hover:text-cyber-blue/50 transition-colors" />
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <p className="text-[10px] font-bold uppercase">Change</p>
              </div>
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              accept="image/*" 
              className="hidden" 
            />
            <p className="text-xs text-white/40">Upload Agent Identity (Optional)</p>
          </div>

          {/* Username Input */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-white/70 ml-1 uppercase tracking-wider">Agent Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter your username"
                className="w-full bg-black/30 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-cyber-blue transition-colors"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-cyber-blue text-black font-bold py-4 rounded-2xl hover:bg-cyber-blue/90 transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,255,255,0.3)] disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Initializing...
              </>
            ) : (
              <>
                Enter Platform
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
