import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Briefcase,
  MapPin,
  CheckCircle,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Terminal,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';
import { SpotlightCard } from '../components/reactbits/SpotlightCard';
import { BorderBeam } from '../components/reactbits/BorderBeam';
import { DecryptedText } from '../components/reactbits/DecryptedText';
import { TelemetryTerminal } from '../components/reactbits/TelemetryTerminal';
import { SITE_URL } from '../lib/seo';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-[#FBFBFE] min-h-screen text-apple-dark">
      <Helmet>
        <title>{`About Sivasudhan E — Systems Engineer & Full-Stack Architect`}</title>
        <meta
          name="description"
          content="Read about Sivasudhan E: B.Tech Information Technology student at Rajalakshmi Engineering College (CGPA 8.08), Smart India Hackathon 2024 Winner, and creator of physical-digital software integrations."
        />
        <link rel="canonical" href={`${SITE_URL}/about`} />
      </Helmet>

      {/* Ambient Lavender & White Background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-lavender/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-80 right-10 w-96 h-96 bg-brand-tomato/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple Style Page Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-brand-lavender/30 text-xs font-semibold text-brand-lavender shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-brand-tomato" />
            <span>Profile &amp; Engineering Philosophy</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-apple-dark tracking-tight">
            Systems Craft. Built for Impact.
          </h1>
          <p className="text-base sm:text-lg text-apple-secondary leading-relaxed">
            Bridging robust web software with real-world physical systems—from autonomous drone telemetry protocols to bio-sensing neural decoders.
          </p>
        </motion.div>

        {/* Bento Grid Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Bento Item 1: Large Narrative Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="p-8 sm:p-10 relative h-full flex flex-col justify-between">
              <BorderBeam size={240} duration={12} colorFrom="#FF5A36" colorTo="#7C3AED" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-brand-lavender/15 text-brand-lavender">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-sans font-semibold uppercase tracking-wider text-brand-lavender">
                        Core Narrative
                      </span>
                      <h3 className="text-2xl font-display font-bold text-apple-dark">
                        Software Across Web &amp; Physical Interfaces
                      </h3>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-sans font-bold text-brand-green bg-brand-green/10 border border-brand-green/25 px-3 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Records
                  </span>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-apple-secondary leading-relaxed font-normal">
                  {profileData.bioParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Core Principles */}
              <div className="pt-6 mt-8 border-t border-black/5">
                <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-brand-lavender mb-3.5 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-brand-tomato" />
                  <span>Engineering Tenets</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5 text-apple-dark">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>Rigorous Type Safety &amp; Production REST APIs</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-apple-dark">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>High-Pressure Hackathon Sprint Execution</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-apple-dark">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>Zero Fabrication: Evidence &amp; Working Code First</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-apple-dark">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>Hardware-Software Sensor Synchronization</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Item 2: Live Engineering Telemetry Terminal (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <TelemetryTerminal />

            {/* Quick Location & Availability Card */}
            <div className="p-6 rounded-3xl bg-white/80 border border-white/90 shadow-[0_10px_35px_-8px_rgba(124,58,237,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs font-sans text-apple-secondary">
                <MapPin className="w-4 h-4 text-brand-tomato" />
                <span className="font-medium">{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans text-brand-green">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
                <span className="font-semibold">{profileData.availability}</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 3: Education Spotlight Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <SpotlightCard className="p-8 relative group h-full">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3.5 rounded-2xl bg-brand-lavender/15 text-brand-lavender">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-sans font-semibold text-brand-lavender uppercase tracking-wider">
                    Education &amp; Degree
                  </span>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-apple-dark">
                    {profileData.education.degree}
                  </h4>
                </div>
              </div>

              <div className="space-y-4 text-sm text-apple-secondary">
                <p className="font-medium text-apple-dark text-base">
                  {profileData.education.institution}
                </p>
                <div className="flex flex-wrap items-center justify-between text-xs font-mono pt-3 border-t border-black/5 text-apple-secondary">
                  <span>{profileData.education.period}</span>
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/25 font-bold">
                    <span>CGPA:</span>
                    <DecryptedText text={profileData.education.cgpa} speed={30} />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Item 4: Internship Experience Spotlight Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-6"
          >
            <SpotlightCard className="p-8 relative group h-full">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3.5 rounded-2xl bg-brand-tomato/15 text-brand-tomato">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-sans font-semibold text-brand-tomato uppercase tracking-wider">
                    Industry Experience
                  </span>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-apple-dark">
                    {profileData.internship.role}
                  </h4>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-apple-dark text-base">
                    {profileData.internship.company}
                  </span>
                  <span className="text-xs font-mono text-brand-lavender bg-brand-lavender/10 px-3 py-1 rounded-full font-medium">
                    {profileData.internship.duration}
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-apple-secondary leading-relaxed">
                  {profileData.internship.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand-tomato font-bold mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Bottom Page Navigation Links */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-black/5">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-apple-dark hover:text-brand-lavender transition-colors"
          >
            <span>Next: Explore Projects &amp; Prototypes</span>
            <ArrowRight className="w-4 h-4 text-brand-tomato" />
          </Link>
          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 text-sm font-sans text-brand-lavender hover:underline font-medium"
          >
            <Award className="w-4 h-4 text-brand-tomato" />
            <span>View Smart India Hackathon &apos;24 Accolades &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
