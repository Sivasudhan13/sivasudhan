import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, Trophy, ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { achievementsData } from '../data/achievements';
import { AchievementCard } from '../components/achievements/AchievementCard';
import { AchievementFilters } from '../components/achievements/AchievementFilters';
import type { AchievementFilterOption } from '../components/achievements/AchievementFilters';
import { SITE_URL } from '../lib/seo';

export const AchievementsPage: React.FC = () => {
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
    <div className="pt-28 pb-24 bg-[#FBFBFE] min-h-screen text-apple-dark">
      <Helmet>
        <title>{`Achievements & Hackathons — Sivasudhan E (SIH 2024 Winner)`}</title>
        <meta
          name="description"
          content="Documented accolades of Sivasudhan E: 1st Prize Winner at Smart India Hackathon 2024, 1st Prize Winner at Code Red, Top 10 National Paper Presentation, and NPTEL Elite+Silver credentials."
        />
        <link rel="canonical" href={`${SITE_URL}/achievements`} />
      </Helmet>

      {/* Ambient background glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-tomato/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-96 right-10 w-96 h-96 bg-brand-lavender/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple Style Page Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-brand-tomato/30 text-xs font-semibold text-brand-tomato shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-brand-tomato" />
            <span>Verified Hackathon Wins &amp; Accolades</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-apple-dark tracking-tight">
            Awards &amp; Competitions.
          </h1>
          <p className="text-base sm:text-lg text-apple-secondary leading-relaxed">
            An evidence-first record of endurance coding marathons, national engineering triumphs, and accredited certifications.
          </p>
        </motion.div>

        {/* Verification Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 p-5 rounded-3xl bg-white/80 border border-brand-green/30 flex items-center gap-3.5 text-xs sm:text-sm text-apple-secondary shadow-xs backdrop-blur-xl"
        >
          <ShieldCheck className="w-6 h-6 text-brand-green shrink-0" />
          <p>
            <strong className="text-apple-dark font-semibold">Authenticity Guarantee:</strong> Every award and credential listed here corresponds strictly to verifiable institutional records and certificates. No participation is misrepresented as a win.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <AchievementFilters
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
          counts={counts}
        />

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((item) => (
              <AchievementCard key={item.id} achievement={item} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state safeguard */}
        {filteredAchievements.length === 0 && (
          <div className="text-center py-16 p-8 rounded-3xl bg-white border border-black/5 max-w-md mx-auto my-8 shadow-sm">
            <Info className="w-6 h-6 text-brand-lavender mx-auto mb-2" />
            <p className="text-apple-secondary text-sm">
              No entries match the selected filter.
            </p>
          </div>
        )}

        {/* Bottom Page Navigation Links */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-black/5">
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-apple-dark hover:text-brand-lavender transition-colors"
          >
            <span>Next: Technical Skills &amp; Stack Matrices</span>
            <ArrowRight className="w-4 h-4 text-brand-tomato" />
          </Link>
          <Link
            to="/journey"
            className="inline-flex items-center gap-2 text-sm font-sans text-brand-lavender hover:underline font-medium"
          >
            <Award className="w-4 h-4 text-brand-lavender" />
            <span>Inspect Chronological Career Timeline &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
