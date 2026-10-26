import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
  Calendar,
  Share2,
  AlertCircle,
} from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';
import { projectsData } from '../data/projects';
import { profileData } from '../data/profile';
import { getProjectJsonLd, SITE_URL } from '../lib/seo';
import { Button } from '../components/ui/Button';
import { SpotlightCard } from '../components/reactbits/SpotlightCard';

export const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center px-4 text-center bg-[#FBFBFE] text-apple-dark">
        <Helmet>
          <title>Project Not Found — Sivasudhan E</title>
        </Helmet>
        <div className="p-4 rounded-full bg-brand-tomato/10 text-brand-tomato mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-display font-bold text-apple-dark mb-2">
          Project Not Found
        </h1>
        <p className="text-apple-secondary max-w-md mb-6">
          The requested engineering project does not exist or has been relocated.
        </p>
        <Button variant="primary" onClick={() => navigate('/projects')}>
          Return to Projects Portfolio
        </Button>
      </div>
    );
  }

  const projectSchema = getProjectJsonLd(project);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${project.title} — Sivasudhan E`,
          text: project.shortSummary,
          url: window.location.href,
        });
      } catch {
        // Ignored if cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Project link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#FBFBFE] text-apple-dark">
      <Helmet>
        <title>{`${project.title} — Sivasudhan E Engineering Case Study`}</title>
        <meta name="description" content={project.shortSummary} />
        <link rel="canonical" href={`${SITE_URL}/project/${project.id}`} />
        <meta property="og:title" content={`${project.title} — Sivasudhan E`} />
        <meta property="og:description" content={project.shortSummary} />
        <meta property="og:url" content={`${SITE_URL}/project/${project.id}`} />
        <script type="application/ld+json">
          {JSON.stringify(projectSchema)}
        </script>
      </Helmet>

      {/* Ambient background glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-lavender/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-96 left-10 w-96 h-96 bg-brand-tomato/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation - Apple Style */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-sans text-apple-secondary">
            <li>
              <Link to="/" className="hover:text-apple-dark transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/projects" className="hover:text-brand-lavender transition-colors">
                Projects
              </Link>
            </li>
            <li>/</li>
            <li className="text-brand-tomato truncate max-w-[200px] sm:max-w-none font-semibold">
              {project.title}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-apple-secondary hover:text-apple-dark transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-brand-tomato" />
          <span>Back to All Projects</span>
        </Link>

        {/* Project Header - Apple Style */}
        <header className="pb-8 border-b border-black/5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-sans font-semibold text-brand-lavender uppercase tracking-wider px-3.5 py-1 rounded-full bg-brand-lavender/10 border border-brand-lavender/25">
              {project.category}
            </span>
            <div className="flex items-center gap-3 text-xs font-mono text-apple-secondary">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand-tomato" />
                {project.year}
              </span>
              <span className="px-3 py-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/25 font-sans font-semibold">
                {project.developmentStatus}
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-apple-dark tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-apple-secondary leading-relaxed font-normal">
            {project.shortSummary}
          </p>

          {/* Action buttons - Apple Style Pills */}
          <div className="pt-3 flex flex-wrap items-center gap-3.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#F5F3FF] text-apple-dark border border-black/10 text-sm font-semibold shadow-2xs hover:shadow transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5 text-apple-secondary" />
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-apple-dark hover:bg-brand-lavender text-white text-sm font-semibold shadow-md active:scale-95 transition-all"
              >
                <span>Launch Live Demonstration</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-black/5 text-apple-secondary hover:text-apple-dark border border-black/10 text-sm font-medium transition-all"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Case Study</span>
            </button>
          </div>
        </header>

        {/* Case Study Grid */}
        <div className="py-10 space-y-10">
          {/* Problem & Solution Double Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpotlightCard
              className="p-7 space-y-3 border-l-4 border-l-brand-tomato"
              spotlightColor="rgba(254, 226, 226, 0.5)"
              borderColor="rgba(255, 90, 54, 0.4)"
            >
              <div className="flex items-center gap-2 text-sm font-sans text-brand-tomato font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>Problem Statement</span>
              </div>
              <p className="text-sm sm:text-base text-apple-secondary leading-relaxed font-normal">
                {project.problemStatement}
              </p>
            </SpotlightCard>

            <SpotlightCard
              className="p-7 space-y-3 border-l-4 border-l-brand-lavender"
              spotlightColor="rgba(221, 214, 254, 0.4)"
              borderColor="rgba(124, 58, 237, 0.4)"
            >
              <div className="flex items-center gap-2 text-sm font-sans text-brand-lavender font-bold uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Architectural Solution</span>
              </div>
              <p className="text-sm sm:text-base text-apple-secondary leading-relaxed font-normal">
                {project.solution}
              </p>
            </SpotlightCard>
          </div>

          {/* Individual Contribution */}
          <SpotlightCard
            className="p-7 sm:p-9 space-y-4"
            spotlightColor="rgba(221, 214, 254, 0.35)"
            borderColor="rgba(124, 58, 237, 0.3)"
          >
            <div className="flex items-center gap-2.5 text-lg font-display font-bold text-apple-dark">
              <Terminal className="w-5 h-5 text-brand-tomato" />
              <span>My Individual Role &amp; Contribution</span>
            </div>
            <p className="text-sm sm:text-base text-apple-secondary leading-relaxed font-normal">
              {project.individualContribution}
            </p>
          </SpotlightCard>

          {/* Architecture Highlights & Outcomes */}
          {(project.resultsOrOutcomes || project.architectureHighlights) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.resultsOrOutcomes && (
                <div className="p-7 rounded-3xl bg-white/80 border border-brand-green/25 space-y-3.5 shadow-sm">
                  <h3 className="text-base font-display font-bold text-apple-dark flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green" />
                    <span>Verified Outcomes &amp; Benchmarks</span>
                  </h3>
                  <ul className="space-y-2.5 text-sm text-apple-secondary">
                    {project.resultsOrOutcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-brand-green font-bold shrink-0 mt-0.5">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.architectureHighlights && (
                <div className="p-7 rounded-3xl bg-white/80 border border-brand-lavender/25 space-y-3.5 shadow-sm">
                  <h3 className="text-base font-display font-bold text-apple-dark flex items-center gap-2">
                    <Layers className="w-4 h-4 text-brand-lavender" />
                    <span>Technical Architecture Highlights</span>
                  </h3>
                  <ul className="space-y-2.5 text-sm text-apple-secondary">
                    {project.architectureHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-brand-tomato font-bold shrink-0 mt-0.5">▸</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Hardware Specs (if applicable) */}
          {project.hardwareSpecs && project.hardwareSpecs.length > 0 && (
            <div className="p-7 rounded-3xl bg-white/80 border border-black/5 space-y-3.5 shadow-sm">
              <h3 className="text-base font-display font-bold text-apple-dark flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-tomato" />
                <span>Embedded Hardware &amp; Sensor Specifications</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-apple-secondary">
                {project.hardwareSpecs.map((spec, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-[#F5F3FF] border border-brand-lavender/20 font-mono text-xs text-apple-dark">
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-3">
            <h3 className="text-xs font-sans font-semibold text-brand-lavender uppercase tracking-wider">
              Technologies &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-white border border-brand-lavender/25 text-xs font-mono text-apple-dark shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Navigation within Project */}
        <div className="pt-10 border-t border-black/5 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-brand-tomato hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Projects</span>
          </Link>

          <a
            href={`mailto:${profileData.socials.email}?subject=Inquiry regarding ${encodeURIComponent(
              project.title
            )}`}
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-apple-dark hover:text-brand-lavender transition-colors"
          >
            <span>Ask Sivasudhan about this project</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
