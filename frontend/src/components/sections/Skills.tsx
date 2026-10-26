import React, { useState } from 'react';
import { skillsData } from '../../data/skills';
import { SectionHeading } from '../ui/SectionHeading';
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
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SpotlightCard } from '../reactbits/SpotlightCard';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#54E7FF]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#4D8DFF]" />;
      case 'Code':
        return <Code className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#54E7FF]" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#4D8DFF]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#FF454F]" />;
      default:
        return <Layers className="w-5 h-5 text-[#54E7FF]" />;
    }
  };

  const displayedGroups =
    selectedCategory === 'all'
      ? skillsData
      : skillsData.filter((g) => g.id === selectedCategory);

  return (
    <section id="skills" className="relative py-24 bg-[#07090F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Toolset &amp; Stacks"
          title="Technical Competencies"
          subtitle="Validated proficiencies connected directly to real web applications, embedded sensor hardware, and production APIs. No arbitrary percentage bars."
        />

        {/* Category switcher pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === 'all'
                ? 'text-[#54E7FF] bg-[#171E31] border border-[#54E7FF]/40 shadow-[0_0_15px_rgba(84,231,255,0.15)]'
                : 'text-[#9AA5B5] bg-[#101522]/60 hover:text-[#F5F7FA] hover:bg-[#101522] border border-white/5'
            }`}
          >
            All Categories
          </button>
          {skillsData.map((group) => {
            const isActive = selectedCategory === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setSelectedCategory(group.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                  isActive
                    ? 'text-[#54E7FF] bg-[#171E31] border border-[#54E7FF]/40 shadow-[0_0_15px_rgba(84,231,255,0.15)]'
                    : 'text-[#9AA5B5] bg-[#101522]/60 hover:text-[#F5F7FA] hover:bg-[#101522] border border-white/5'
                }`}
              >
                <span>{group.title}</span>
              </button>
            );
          })}
        </div>

        {/* Groups Grid with SpotlightCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedGroups.map((group) => (
            <SpotlightCard
              key={group.id}
              className="p-6 sm:p-7 space-y-5"
              spotlightColor="rgba(84, 231, 255, 0.1)"
              borderColor="rgba(77, 141, 255, 0.35)"
            >
              {/* Group Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-[#07090F] border border-white/10">
                  {getCategoryIcon(group.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-[#F5F7FA]">
                    {group.title}
                  </h3>
                  <p className="text-xs text-[#9AA5B5] mt-0.5">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#07090F]/70 hover:bg-[#101522] border border-white/5 hover:border-[#54E7FF]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#F5F7FA]">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#54E7FF]/15 text-[#54E7FF] border border-[#54E7FF]/30">
                            Core
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#9AA5B5]">
                        {skill.focusArea}
                      </p>
                    </div>

                    {/* Associated Projects Links */}
                    {skill.associatedProjects && skill.associatedProjects.length > 0 && (
                      <div className="flex items-center gap-1.5 shrink-0 pt-1 sm:pt-0">
                        {skill.associatedProjects.map((pId) => (
                          <Link
                            key={pId}
                            to={`/project/${pId}`}
                            className="inline-flex items-center gap-1 text-[11px] font-mono text-[#54E7FF] bg-[#4D8DFF]/10 hover:bg-[#4D8DFF]/25 border border-[#54E7FF]/25 px-2 py-0.5 rounded-md transition-colors"
                            title={`View ${pId} project`}
                          >
                            <span>Demo</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
