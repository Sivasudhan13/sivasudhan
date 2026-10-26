import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Activity, Terminal, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import type { ProjectItem } from '../../types/project';
import { SpotlightCard } from '../reactbits/SpotlightCard';
import { BorderBeam } from '../reactbits/BorderBeam';

export interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getStatusBadge = (status: ProjectItem['developmentStatus']) => {
    switch (status) {
      case 'Completed':
      case 'Production / Live':
        return {
          icon: <CheckCircle2 className="w-3 h-3 text-brand-green" />,
          color: 'text-brand-green bg-brand-green/10 border-brand-green/30',
          label: status,
        };
      case 'Active Prototype':
        return {
          icon: <Activity className="w-3 h-3 text-brand-tomato" />,
          color: 'text-brand-tomato bg-brand-tomato/10 border-brand-tomato/30',
          label: status,
        };
      case 'Research & Lab Demo':
        return {
          icon: <Clock className="w-3 h-3 text-brand-lavender" />,
          color: 'text-brand-lavender bg-brand-lavender/10 border-brand-lavender/30',
          label: status,
        };
      default:
        return {
          icon: <Terminal className="w-3 h-3 text-apple-secondary" />,
          color: 'text-apple-secondary bg-black/5 border-black/10',
          label: status,
        };
    }
  };

  const statusBadge = getStatusBadge(project.developmentStatus);

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
        className="p-7 h-full flex flex-col justify-between group relative border-white/80 shadow-[0_12px_35px_-8px_rgba(124,58,237,0.08)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)] transition-all"
        spotlightColor="rgba(221, 214, 254, 0.4)"
        borderColor="rgba(124, 58, 237, 0.3)"
      >
        {/* Border beam on featured projects */}
        {project.featured && (
          <BorderBeam size={180} duration={10} colorFrom="#FF5A36" colorTo="#7C3AED" />
        )}

        <div>
          {/* Header: Category & Status */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-1.5 text-xs font-sans font-semibold text-brand-lavender tracking-wide uppercase">
              {project.featured && <Sparkles className="w-3 h-3 text-brand-tomato" />}
              <span>{project.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-apple-secondary">{project.year}</span>
              <div
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-sans font-medium border ${statusBadge.color}`}
              >
                {statusBadge.icon}
                <span>{statusBadge.label}</span>
              </div>
            </div>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-display font-bold text-apple-dark group-hover:text-brand-lavender transition-colors mb-2.5">
            <Link to={`/project/${project.id}`}>{project.title}</Link>
          </h3>

          {/* Short Summary */}
          <p className="text-sm text-apple-secondary leading-relaxed mb-5 font-normal">
            {project.shortSummary}
          </p>

          {/* Individual Contribution snippet */}
          <div className="p-3.5 rounded-2xl bg-brand-lavender/10 border border-brand-lavender/20 mb-5 space-y-1">
            <div className="text-[11px] font-sans font-semibold text-brand-lavender uppercase tracking-wider">
              My Role &amp; Contribution:
            </div>
            <p className="text-xs text-apple-dark/80 leading-snug line-clamp-2">
              {project.individualContribution}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full bg-white border border-brand-lavender/25 text-[11px] font-mono text-apple-dark font-medium shadow-2xs"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2.5 py-1 rounded-full bg-brand-tomato/10 text-brand-tomato text-[11px] font-mono font-bold">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Card Actions Footer */}
        <div className="pt-4 border-t border-black/5 flex items-center justify-between mt-auto">
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-tomato hover:text-brand-lavender transition-colors group/link"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/5 hover:bg-black/10 text-apple-secondary hover:text-apple-dark transition-colors"
              aria-label={`${project.title} GitHub repository`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </SpotlightCard>
    </motion.div>
  );
};
