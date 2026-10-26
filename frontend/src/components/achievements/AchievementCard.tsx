import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trophy,
  Award,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Building,
  UserCheck,
  Tag,
} from 'lucide-react';
import type { AchievementItem, AchievementResultType } from '../../types/achievement';
import { SpotlightCard } from '../reactbits/SpotlightCard';
import { BorderBeam } from '../reactbits/BorderBeam';

export interface AchievementCardProps {
  achievement: AchievementItem;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getResultBadge = (type: AchievementResultType) => {
    switch (type) {
      case 'Winner / Runner-Up':
        return {
          icon: <Trophy className="w-3.5 h-3.5 text-brand-tomato" />,
          color: 'text-brand-tomato bg-brand-tomato/10 border-brand-tomato/25 font-bold',
          label: achievement.resultType,
        };
      case 'Finalist':
        return {
          icon: <Award className="w-3.5 h-3.5 text-brand-lavender" />,
          color: 'text-brand-lavender bg-brand-lavender/10 border-brand-lavender/25 font-semibold',
          label: achievement.resultType,
        };
      case 'Certification':
        return {
          icon: <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />,
          color: 'text-brand-green bg-brand-green/10 border-brand-green/25 font-semibold',
          label: achievement.resultType,
        };
      default:
        return {
          icon: <Award className="w-3.5 h-3.5 text-apple-secondary" />,
          color: 'text-apple-secondary bg-black/5 border-black/10 font-medium',
          label: achievement.resultType,
        };
    }
  };

  const badge = getResultBadge(achievement.resultType);
  const isWinner = achievement.resultType === 'Winner / Runner-Up';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <SpotlightCard
        className="p-7 relative overflow-hidden h-full flex flex-col justify-between border-white/80 shadow-[0_12px_35px_-8px_rgba(124,58,237,0.08)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)] transition-all"
        spotlightColor={isWinner ? 'rgba(254, 226, 226, 0.5)' : 'rgba(221, 214, 254, 0.4)'}
        borderColor={isWinner ? 'rgba(255, 90, 54, 0.35)' : 'rgba(124, 58, 237, 0.3)'}
      >
        {/* Border beam on Winner items */}
        {isWinner && (
          <BorderBeam size={180} duration={12} colorFrom="#FF5A36" colorTo="#7C3AED" />
        )}

        <div>
          {/* Top Banner Row */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans border ${badge.color}`}
            >
              {badge.icon}
              <span>{badge.label}</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-apple-secondary">
              <Calendar className="w-3.5 h-3.5 text-brand-tomato" />
              <span>{achievement.year}</span>
            </div>
          </div>

          {/* Event Title */}
          <h3 className="text-xl sm:text-2xl font-display font-bold text-apple-dark mb-2 leading-snug">
            {achievement.eventName}
          </h3>

          {/* Organizer & Category */}
          <div className="space-y-1 text-xs text-apple-secondary mb-4">
            <div className="flex items-center gap-2">
              <Building className="w-3.5 h-3.5 text-brand-lavender" />
              <span className="text-apple-dark font-medium">{achievement.organizer}</span>
            </div>
            <div className="text-[11px] font-mono text-brand-lavender font-semibold">
              Track: {achievement.competitionCategory}
            </div>
          </div>

          {/* Summary Description */}
          <p className="text-sm text-apple-secondary leading-relaxed mb-4 font-normal">
            {achievement.description}
          </p>

          {/* Expandable Section */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pt-4 border-t border-black/5 space-y-3 overflow-hidden text-xs"
              >
                <div className="flex items-center gap-2 text-apple-secondary">
                  <UserCheck className="w-3.5 h-3.5 text-brand-tomato" />
                  <span>
                    <strong className="text-apple-dark font-semibold">Role:</strong> {achievement.role}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-apple-secondary">
                  <Tag className="w-3.5 h-3.5 text-brand-tomato" />
                  <span>
                    <strong className="text-apple-dark font-semibold">Project/Team:</strong>{' '}
                    {achievement.projectOrTeamName}
                  </span>
                </div>

                {/* Skills Demonstrated */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-sans font-semibold text-brand-lavender uppercase tracking-wider">
                    Skills Demonstrated:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {achievement.skillsDemonstrated.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full bg-brand-lavender/10 border border-brand-lavender/20 font-mono text-[11px] text-brand-lavender font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-brand-green font-sans font-semibold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Evidence-based verified institutional record</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Toggle Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 pt-3.5 border-t border-black/5 w-full flex items-center justify-between text-xs font-sans font-semibold text-brand-lavender hover:text-brand-tomato transition-colors select-none"
        >
          <span>{isExpanded ? 'Hide Verification Details' : 'View Verification Details'}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>
      </SpotlightCard>
    </motion.div>
  );
};
