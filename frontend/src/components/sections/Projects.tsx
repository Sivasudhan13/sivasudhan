import React, { useState, useMemo } from 'react';
import { projectsData } from '../../data/projects';
import type { ProjectCategory } from '../../types/project';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectFilters } from '../projects/ProjectFilters';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatePresence } from 'motion/react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All');

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

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="relative py-24 bg-[#07090F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Codebases &amp; Prototypes"
          title="Featured Engineering Projects"
          subtitle="Explore full-stack web applications, autonomous drone telemetry pipelines, EEG/EMG neural visualizers, and endurance hackathon prototypes."
        />

        {/* Filters */}
        <ProjectFilters
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          categoryCounts={categoryCounts}
        />

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
          <div className="text-center py-16 p-8 rounded-2xl bg-[#101522] border border-white/10 max-w-md mx-auto">
            <p className="text-[#9AA5B5] text-sm">
              No projects currently listed under this category. Check back soon for ongoing lab prototypes!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
