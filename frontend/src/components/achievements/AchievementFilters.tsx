import React from 'react';
import { motion } from 'motion/react';

export type AchievementFilterOption =
  | 'All'
  | 'Wins'
  | 'Finalists'
  | 'Participation'
  | 'Certifications';

export interface AchievementFiltersProps {
  activeFilter: AchievementFilterOption;
  onSelectFilter: (filter: AchievementFilterOption) => void;
  counts: Record<AchievementFilterOption, number>;
}

export const AchievementFilters: React.FC<AchievementFiltersProps> = ({
  activeFilter,
  onSelectFilter,
  counts,
}) => {
  const options: AchievementFilterOption[] = [
    'All',
    'Wins',
    'Finalists',
    'Participation',
    'Certifications',
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
      {options.map((opt) => {
        const isActive = activeFilter === opt;
        const count = counts[opt] || 0;

        return (
          <button
            key={opt}
            onClick={() => onSelectFilter(opt)}
            className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 select-none flex items-center gap-2 ${
              isActive
                ? 'text-white bg-apple-dark shadow-md font-semibold'
                : 'text-apple-secondary bg-white/90 hover:text-apple-dark hover:bg-white border border-black/8 shadow-2xs'
            }`}
          >
            <span>{opt}</span>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                isActive
                  ? 'bg-white/20 text-white font-bold'
                  : 'bg-black/5 text-apple-secondary'
              }`}
            >
              {count}
            </span>
            {isActive && (
              <motion.div
                layoutId="activeAchievementFilter"
                className="absolute inset-0 rounded-full border-2 border-brand-tomato pointer-events-none"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
