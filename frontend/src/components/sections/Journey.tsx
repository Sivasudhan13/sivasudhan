import React from 'react';
import { journeyMilestones } from '../../data/journey';
import { SectionHeading } from '../ui/SectionHeading';
import {
  GraduationCap,
  Briefcase,
  Trophy,
  Award,
  Code2,
  FileCheck,
  CheckCircle2,
} from 'lucide-react';
import type { JourneyItemType } from '../../types/journey';

export const Journey: React.FC = () => {
  const getMilestoneIcon = (type: JourneyItemType) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-[#54E7FF]" />;
      case 'internship':
        return <Briefcase className="w-4 h-4 text-[#4D8DFF]" />;
      case 'hackathon':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      case 'recognition':
        return <Award className="w-4 h-4 text-emerald-400" />;
      case 'certification':
        return <FileCheck className="w-4 h-4 text-cyan-300" />;
      case 'project':
        return <Code2 className="w-4 h-4 text-[#FF454F]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#54E7FF]" />;
    }
  };

  return (
    <section id="journey" className="relative py-24 bg-[#07090F] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Chronological Progress"
          title="Education &amp; Engineering Journey"
          subtitle="A transparent timeline tracking academic milestones, internship delivery, competitive hackathons, and systems experimentation."
        />

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-6 space-y-12">
          {journeyMilestones.map((item) => (
            <div key={item.id} className="relative pl-8 sm:pl-10 group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#101522] border-2 border-[#54E7FF]/40 group-hover:border-[#54E7FF] group-hover:shadow-[0_0_12px_rgba(84,231,255,0.4)] flex items-center justify-center transition-all">
                {getMilestoneIcon(item.type)}
              </div>

              {/* Milestone Content Card */}
              <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 group-hover:border-[#4D8DFF]/40 transition-all space-y-3">
                {/* Top Year & Period Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-[#54E7FF] font-semibold text-sm">
                    {item.year}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-[#9AA5B5] border border-white/10">
                    {item.period}
                  </span>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#F5F7FA]">
                    {item.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-[#4D8DFF] mt-0.5">
                    {item.organization} {item.location && `• ${item.location}`}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#9AA5B5] leading-relaxed">
                  {item.description}
                </p>

                {/* Key Outcomes */}
                {item.keyOutcomes && item.keyOutcomes.length > 0 && (
                  <div className="pt-2 border-t border-white/5 space-y-1.5 text-xs text-[#9AA5B5]">
                    {item.keyOutcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#07090F] border border-white/5 text-[#9AA5B5]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
