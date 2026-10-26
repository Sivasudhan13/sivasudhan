import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  Layout,
  Server,
  Code,
  Database,
  Sparkles,
  Cloud,
  Cpu,
  Layers,
  ArrowUpRight,
  ArrowRight,
  Terminal,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { skillsData } from '../data/skills';
import { SpotlightCard } from '../components/reactbits/SpotlightCard';
import { SITE_URL } from '../lib/seo';

export const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-brand-lavender" />;
      case 'Server':
        return <Server className="w-5 h-5 text-brand-tomato" />;
      case 'Code':
        return <Code className="w-5 h-5 text-brand-green" />;
      case 'Database':
        return <Database className="w-5 h-5 text-brand-lavender" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-brand-tomato" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-brand-green" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-brand-tomato" />;
      default:
        return <Layers className="w-5 h-5 text-brand-lavender" />;
    }
  };

  const displayedGroups =
    selectedCategory === 'all'
      ? skillsData
      : skillsData.filter((g) => g.id === selectedCategory);

  return (
    <div className="pt-28 pb-24 bg-[#FBFBFE] min-h-screen text-apple-dark">
      <Helmet>
        <title>{`Technical Skills & Toolsets — Sivasudhan E`}</title>
        <meta
          name="description"
          content="Validated technical proficiencies of Sivasudhan E: React, Next.js, TypeScript, Node.js, Three.js, Cesium, Python, PostgreSQL, MongoDB, Docker, Arduino, and ESP32."
        />
        <link rel="canonical" href={`${SITE_URL}/skills`} />
      </Helmet>

      {/* Ambient background glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-lavender/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-96 left-10 w-96 h-96 bg-brand-green/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple Style Page Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-brand-green/30 text-xs font-semibold text-brand-green shadow-sm">
            <Terminal className="w-3.5 h-3.5" />
            <span>Applied Engineering Stacks</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-apple-dark tracking-tight">
            Technical Competencies.
          </h1>
          <p className="text-base sm:text-lg text-apple-secondary leading-relaxed">
            Validated proficiencies directly mapped to working web applications, embedded sensor hardware, and production APIs. No arbitrary progress bars.
          </p>
        </motion.div>

        {/* Category Switcher Pills - Apple Pill Style */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-apple-dark text-white font-semibold shadow-md'
                : 'bg-white/90 text-apple-secondary hover:text-apple-dark hover:bg-white border border-black/8 shadow-2xs'
            }`}
          >
            All Competencies ({skillsData.length})
          </button>
          {skillsData.map((group) => {
            const isSelected = selectedCategory === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setSelectedCategory(group.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 transition-all ${
                  isSelected
                    ? 'bg-apple-dark text-white font-semibold shadow-md'
                    : 'bg-white/90 text-apple-secondary hover:text-apple-dark hover:bg-white border border-black/8 shadow-2xs'
                }`}
              >
                <span>{group.title}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-black/5 text-apple-secondary'
                  }`}
                >
                  {group.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedGroups.map((group, groupIdx) => {
            // Collect unique associated project IDs across this group's skills
            const associatedProjectIds = Array.from(
              new Set(
                group.skills.flatMap((s) => s.associatedProjects || [])
              )
            );

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
              >
                <SpotlightCard className="p-7 relative h-full flex flex-col justify-between group">
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-black/5">
                      <div className="p-3 rounded-2xl bg-white border border-black/5 shadow-2xs group-hover:scale-105 transition-transform">
                        {getCategoryIcon(group.iconName)}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-apple-dark">
                          {group.title}
                        </h3>
                        <span className="text-xs text-apple-secondary">
                          {group.skills.length} core proficiencies
                        </span>
                      </div>
                    </div>

                    {/* Skills Tag Pills List */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {group.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 rounded-full bg-brand-lavender/10 border border-brand-lavender/25 text-xs font-mono text-apple-dark font-medium hover:bg-brand-lavender/20 transition-colors cursor-default"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Project Links Footer */}
                  {associatedProjectIds.length > 0 && (
                    <div className="pt-4 border-t border-black/5">
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-apple-secondary block mb-2">
                        Demonstrated In:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {associatedProjectIds.map((pId: string) => (
                          <Link
                            key={pId}
                            to={`/project/${pId}`}
                            className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-tomato hover:text-white bg-brand-tomato/10 hover:bg-brand-tomato border border-brand-tomato/30 px-2.5 py-1 rounded-full transition-all"
                          >
                            <span>{pId.replace(/-/g, ' ')}</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Page Navigation Links */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-black/5">
          <Link
            to="/journey"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-apple-dark hover:text-brand-lavender transition-colors"
          >
            <span>Next: Career &amp; Education Journey Timeline</span>
            <ArrowRight className="w-4 h-4 text-brand-tomato" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-sans text-brand-lavender hover:underline font-medium"
          >
            <span>Connect for Development Opportunities &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
