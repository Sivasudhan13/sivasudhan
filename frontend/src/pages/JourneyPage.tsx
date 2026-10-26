import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Briefcase,
  Trophy,
  Award,
  Code2,
  FileCheck,
  CheckCircle2,
  FileText,
  ExternalLink,
  ArrowRight,
  Milestone,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { journeyMilestones } from '../data/journey';
import { profileData } from '../data/profile';
import type { JourneyItemType } from '../types/journey';
import { SITE_URL } from '../lib/seo';

export const JourneyPage: React.FC = () => {
  const getMilestoneIcon = (type: JourneyItemType) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-brand-lavender" />;
      case 'internship':
        return <Briefcase className="w-4 h-4 text-brand-green" />;
      case 'hackathon':
        return <Trophy className="w-4 h-4 text-brand-tomato" />;
      case 'recognition':
        return <Award className="w-4 h-4 text-brand-tomato" />;
      case 'certification':
        return <FileCheck className="w-4 h-4 text-brand-lavender" />;
      case 'project':
        return <Code2 className="w-4 h-4 text-brand-green" />;
      default:
        return <Code2 className="w-4 h-4 text-brand-lavender" />;
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#FBFBFE] min-h-screen text-apple-dark">
      <Helmet>
        <title>{`Career & Academic Journey — Sivasudhan E`}</title>
        <meta
          name="description"
          content="Follow the engineering trajectory of Sivasudhan E: B.Tech IT at Rajalakshmi Engineering College, SIH 2024 Winner, Code Red Winner, internship at CodeBind, and IoT certifications."
        />
        <link rel="canonical" href={`${SITE_URL}/journey`} />
      </Helmet>

      {/* Ambient background glows */}
      <div className="absolute top-24 left-10 w-96 h-96 bg-brand-green/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-96 right-10 w-96 h-96 bg-brand-lavender/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple Style Page Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-brand-lavender/30 text-xs font-semibold text-brand-lavender shadow-sm">
            <Milestone className="w-3.5 h-3.5 text-brand-tomato" />
            <span>Chronological Progress</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-apple-dark tracking-tight">
            Trajectory &amp; Milestones.
          </h1>
          <p className="text-base sm:text-lg text-apple-secondary leading-relaxed">
            A transparent timeline of academic milestones, internship delivery, national hackathon championships, and real-time systems experimentation.
          </p>
        </motion.div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-brand-lavender/30 ml-4 sm:ml-8 space-y-12">
          {journeyMilestones.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Node Point */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-brand-lavender group-hover:border-brand-tomato group-hover:shadow-[0_0_16px_rgba(255,90,54,0.4)] flex items-center justify-center transition-all shadow-sm">
                {getMilestoneIcon(item.type)}
              </div>

              {/* Milestone Content Card */}
              <div className="p-7 sm:p-8 rounded-3xl bg-white/80 border border-white/90 group-hover:border-brand-lavender/40 transition-all space-y-4 shadow-[0_10px_35px_-8px_rgba(124,58,237,0.08)]">
                {/* Top Year & Period Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-brand-tomato font-bold text-sm">
                    {item.year}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/5 text-apple-secondary font-sans font-medium">
                    {item.period}
                  </span>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-apple-dark group-hover:text-brand-lavender transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-apple-secondary mt-0.5">
                    {item.organization}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-apple-secondary leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Key Outcomes */}
                {item.keyOutcomes && item.keyOutcomes.length > 0 && (
                  <div className="pt-2">
                    <ul className="space-y-2">
                      {item.keyOutcomes.map((outcome: string, hIdx: number) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-apple-dark/90"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Resume Banner Card - Apple Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 sm:p-10 rounded-[32px] bg-gradient-to-r from-brand-lavender/10 via-white to-brand-tomato/10 border border-brand-lavender/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-[0_15px_45px_rgba(124,58,237,0.08)]"
        >
          <div>
            <h3 className="text-2xl font-display font-bold text-apple-dark mb-2">
              Verified Technical Credentials
            </h3>
            <p className="text-sm text-apple-secondary max-w-xl font-normal leading-relaxed">
              Inspect the comprehensive PDF resume detailing coursework, hackathon certificates, technical proficiencies, and contact information.
            </p>
          </div>
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans font-semibold text-sm text-white bg-apple-dark hover:bg-brand-lavender shadow-md active:scale-95 transition-all shrink-0"
          >
            <FileText className="w-4 h-4" />
            <span>Download Verified Resume</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </motion.div>

        {/* Bottom Page Navigation Links */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-black/5">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-apple-dark hover:text-brand-lavender transition-colors"
          >
            <span>Next: Contact &amp; Collaboration Terminal</span>
            <ArrowRight className="w-4 h-4 text-brand-tomato" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-sans text-brand-lavender hover:underline font-medium"
          >
            <span>Review Full Project Gallery &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JourneyPage;
