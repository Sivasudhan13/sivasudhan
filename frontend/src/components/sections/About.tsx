import React from 'react';
import {
  GraduationCap,
  Briefcase,
  MapPin,
  CheckCircle,
  Layers,
  Sparkles,
} from 'lucide-react';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { SpotlightCard } from '../reactbits/SpotlightCard';
import { BorderBeam } from '../reactbits/BorderBeam';
import { DecryptedText } from '../reactbits/DecryptedText';
import { TelemetryTerminal } from '../reactbits/TelemetryTerminal';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#07090F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Profile &amp; Bento Matrix"
          title="Authentic Engineering &amp; Systems Craft"
          subtitle="Combining full-stack software architecture with hands-on exploration of drones, bio-sensing, and edge IoT devices."
        />

        {/* Bento Grid Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bento Item 1: Large Narrative Card with Spotlight & BorderBeam (7 cols) */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-7 sm:p-8 relative h-full flex flex-col justify-between">
              <BorderBeam size={220} duration={14} colorFrom="#54E7FF" colorTo="#4D8DFF" />
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-[#54E7FF]/10 text-[#54E7FF] border border-[#54E7FF]/20">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#54E7FF]">
                    Mission &amp; Philosophy
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F5F7FA] mb-4">
                  Building Reliable Software Across Web &amp; Physical Systems
                </h3>

                <div className="space-y-3 text-sm text-[#9AA5B5] leading-relaxed">
                  {profileData.bioParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Core Principles */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#54E7FF] mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Core Engineering Principles</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="flex items-start gap-2 text-[#F5F7FA]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#54E7FF] shrink-0 mt-0.5" />
                    <span>Rigorous Type Safety &amp; Clean REST APIs</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#F5F7FA]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#54E7FF] shrink-0 mt-0.5" />
                    <span>Sprint Prototyping Under Deadlines</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#F5F7FA]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#54E7FF] shrink-0 mt-0.5" />
                    <span>Zero Fabrication: Evidence &amp; Code First</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#F5F7FA]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#54E7FF] shrink-0 mt-0.5" />
                    <span>Hardware-Software Interface Integration</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Bento Item 2: Live Engineering Telemetry Terminal (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <TelemetryTerminal />

            {/* Quick Location & Availability Card */}
            <div className="p-5 rounded-2xl bg-[#101522] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs font-mono text-[#9AA5B5]">
                <MapPin className="w-4 h-4 text-[#FF454F]" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profileData.availability}</span>
              </div>
            </div>
          </div>

          {/* Bento Item 3: Education Spotlight Card (6 cols) */}
          <div className="lg:col-span-6">
            <SpotlightCard className="p-6 sm:p-7 relative group h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-[#4D8DFF]/15 border border-[#4D8DFF]/30 text-[#4D8DFF]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#54E7FF] uppercase tracking-wider">
                    Education &amp; Degree
                  </span>
                  <h4 className="text-lg font-display font-bold text-[#F5F7FA]">
                    {profileData.education.degree}
                  </h4>
                </div>
              </div>

              <div className="space-y-3 text-sm text-[#9AA5B5]">
                <p className="font-medium text-[#F5F7FA]">
                  {profileData.education.institution}
                </p>
                <div className="flex flex-wrap items-center justify-between text-xs font-mono pt-2 border-t border-white/10 text-[#9AA5B5]">
                  <span>{profileData.education.period}</span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#54E7FF]/10 text-[#54E7FF] border border-[#54E7FF]/25 font-semibold">
                    <span>CGPA:</span>
                    <DecryptedText text={profileData.education.cgpa} speed={30} />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Bento Item 4: Internship Experience Spotlight Card (6 cols) */}
          <div className="lg:col-span-6">
            <SpotlightCard className="p-6 sm:p-7 relative group h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-[#54E7FF]/15 border border-[#54E7FF]/30 text-[#54E7FF]">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#54E7FF] uppercase tracking-wider">
                    Verified Industry Experience
                  </span>
                  <h4 className="text-lg font-display font-bold text-[#F5F7FA]">
                    {profileData.internship.role}
                  </h4>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#F5F7FA]">
                    {profileData.internship.company}
                  </span>
                  <span className="text-xs font-mono text-[#9AA5B5]">
                    {profileData.internship.duration}
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-[#9AA5B5] leading-relaxed">
                  {profileData.internship.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#54E7FF] font-bold mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};
