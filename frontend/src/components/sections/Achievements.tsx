import React, { useState, useMemo } from 'react';
import { achievementsData } from '../../data/achievements';
import { AchievementCard } from '../achievements/AchievementCard';
import { AchievementFilters } from '../achievements/AchievementFilters';
import type { AchievementFilterOption } from '../achievements/AchievementFilters';
import { SectionHeading } from '../ui/SectionHeading';
import { ShieldCheck, Info } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

export const Achievements: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<AchievementFilterOption>('All');

  const counts: Record<AchievementFilterOption, number> = useMemo(() => {
    return {
      All: achievementsData.length,
      Wins: achievementsData.filter((a) => a.resultType === 'Winner / Runner-Up').length,
      Finalists: achievementsData.filter((a) => a.resultType === 'Finalist').length,
      Participation: achievementsData.filter((a) => a.resultType === 'Participation').length,
      Certifications: achievementsData.filter((a) => a.resultType === 'Certification').length,
    };
  }, []);

  const filteredAchievements = useMemo(() => {
    if (activeFilter === 'All') return achievementsData;
    if (activeFilter === 'Wins') {
      return achievementsData.filter((a) => a.resultType === 'Winner / Runner-Up');
    }
    if (activeFilter === 'Finalists') {
      return achievementsData.filter((a) => a.resultType === 'Finalist');
    }
    if (activeFilter === 'Participation') {
      return achievementsData.filter((a) => a.resultType === 'Participation');
    }
    if (activeFilter === 'Certifications') {
      return achievementsData.filter((a) => a.resultType === 'Certification');
    }
    return achievementsData;
  }, [activeFilter]);

  return (
    <section id="achievements" className="relative py-24 bg-[#07090F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Competitions &amp; Credentials"
          title="Achievements &amp; Hackathons"
          subtitle="An evidence-first track record of hackathon sprints, technical presentation accolades, and accredited certifications."
        />

        {/* Verification Guarantee Banner */}
        <div className="mb-10 p-4 rounded-xl bg-[#101522] border border-[#54E7FF]/20 flex items-center gap-3 text-xs sm:text-sm text-[#9AA5B5]">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <p>
            <strong className="text-[#F5F7FA]">Evidence Integrity:</strong> All awards and credentials listed here correspond strictly to documented institutional and industry records. No participation is labeled as a win.
          </p>
        </div>

        {/* Filter Buttons */}
        <AchievementFilters
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
          counts={counts}
        />

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((item) => (
              <AchievementCard key={item.id} achievement={item} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state safeguard */}
        {filteredAchievements.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-[#101522] border border-white/10 max-w-md mx-auto">
            <Info className="w-6 h-6 text-[#54E7FF] mx-auto mb-2" />
            <p className="text-[#9AA5B5] text-sm">
              No entries match the selected filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
