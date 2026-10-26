import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Search, FolderGit2, Sparkles, Code2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import type { ProjectCategory } from '../types/project';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectFilters } from '../components/projects/ProjectFilters';
import { SITE_URL } from '../lib/seo';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Available categories
  const categories: ('All' | ProjectCategory)[] = [
    'All',
    'Web Development',
    'Drone and Robotics',
    'EEG and EMG',
    'IoT and Embedded Systems',
    'Hackathon Projects',
  ];

  // Calculate counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: projectsData.length,
    };
    projectsData.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered projects by category and search
  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchesCategory =
        activeCategory === 'All' || p.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        p.title.toLowerCase().includes(query) ||
        p.shortSummary.toLowerCase().includes(query) ||
        p.technologies.some((t: string) => t.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-28 pb-24 bg-[#FBFBFE] min-h-screen text-apple-dark">
      <Helmet>
        <title>{`Projects & Engineering Prototypes — Sivasudhan E`}</title>
        <meta
          name="description"
          content="Explore the engineering portfolio of Sivasudhan E: Drone Telemetry with 3D Cesium/Three.js, EEG Signal visualizer, Full-Stack Next.js/React applications, and IoT prototypes."
        />
        <link rel="canonical" href={`${SITE_URL}/projects`} />
      </Helmet>

      {/* Ambient background glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-lavender/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-96 left-10 w-96 h-96 bg-brand-tomato/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple Style Page Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-brand-lavender/30 text-xs font-semibold text-brand-lavender shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5 text-brand-tomato" />
            <span>Verified Codebases &amp; Prototypes</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-apple-dark tracking-tight">
            Engineering Projects.
          </h1>
          <p className="text-base sm:text-lg text-apple-secondary leading-relaxed">
            Full-stack web software, autonomous drone telemetry systems, biomedical neural monitors, and endurance hackathon prototypes.
          </p>
        </motion.div>

        {/* Apple Search & Filter Controls Bar */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-apple-secondary" />
              <input
                type="text"
                placeholder="Search projects by tech, keyword, or name (e.g. Three.js, React, EEG)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-black/10 text-apple-dark placeholder-apple-muted text-xs sm:text-sm shadow-xs focus:outline-none focus:border-brand-lavender focus:ring-2 focus:ring-brand-lavender/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-sans font-medium text-apple-secondary hover:text-apple-dark"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <ProjectFilters
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            categoryCounts={categoryCounts}
          />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state safeguard */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 p-8 rounded-3xl bg-white border border-black/5 max-w-md mx-auto my-8 shadow-sm">
            <Code2 className="w-8 h-8 text-brand-lavender mx-auto mb-3" />
            <h3 className="text-lg font-display font-bold text-apple-dark mb-1">
              No matching projects
            </h3>
            <p className="text-apple-secondary text-xs">
              No projects matched your criteria &quot;{searchQuery}&quot;. Try resetting the search or category filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-full text-xs font-sans font-semibold text-white bg-apple-dark hover:bg-brand-lavender transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Page Navigation Links */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-black/5">
          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-apple-dark hover:text-brand-lavender transition-colors"
          >
            <span>Next: Hackathon Triumphs &amp; Accolades</span>
            <ArrowRight className="w-4 h-4 text-brand-tomato" />
          </Link>
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 text-sm font-sans text-brand-lavender hover:underline font-medium"
          >
            <Sparkles className="w-4 h-4 text-brand-lavender" />
            <span>Explore Technical Competencies Matrix &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
