import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  FolderGit2,
  Trophy,
  Layers,
  Sparkles,
  Milestone,
  MessageSquare,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { Hero } from '../components/sections/Hero';
import { SpotlightCard } from '../components/reactbits/SpotlightCard';
import { BorderBeam } from '../components/reactbits/BorderBeam';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projectsData } from '../data/projects';
import { getPersonJsonLd, SITE_URL } from '../lib/seo';
import { profileData } from '../data/profile';

export const HomePage: React.FC = () => {
  const personJsonLd = getPersonJsonLd();
  // Get featured projects (top 3)
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="relative overflow-x-hidden bg-[#FBFBFE] text-apple-dark">
      <Helmet>
        <title>{`${profileData.fullName} — ${profileData.headline} | Official Portfolio`}</title>
        <meta
          name="description"
          content="Official developer portfolio of Sivasudhan E, Smart India Hackathon 2024 Winner and software developer. Explore 3D Cesium drone telemetry, biomedical neural visualizers, and full-stack applications."
        />
        <link rel="canonical" href={SITE_URL} />
        <script type="application/ld+json">
          {JSON.stringify(personJsonLd)}
        </script>
      </Helmet>

      <main>
        {/* Dynamic Hero Section with Real Photo + 3D Core + Apple White & Lavender */}
        <Hero />

        {/* =========================================================================
            SECTION: Navigation Command Center (Apple-style Bento Directory)
           ========================================================================= */}
        <section className="relative py-24 bg-gradient-to-b from-[#FBFBFE] via-[#F5F3FF] to-[#FBFBFE] border-t border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-brand-lavender/30 text-xs font-semibold text-brand-lavender mb-3 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-tomato" />
                <span>Command Center Directory</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-apple-dark tracking-tight">
                Explore the Portfolio.
              </h2>
              <p className="text-base sm:text-lg text-apple-secondary mt-3">
                Dedicated spaces for verified case studies, national hackathon awards, interactive skill matrices, and chronological career milestones.
              </p>
            </motion.div>

            {/* Apple Bento Gateway Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1: Projects Gateway */}
              <Link to="/projects" className="group">
                <SpotlightCard className="p-8 relative h-full flex flex-col justify-between group-hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)] transition-all">
                  <BorderBeam size={200} duration={12} colorFrom="#FF5A36" colorTo="#7C3AED" />
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3.5 rounded-2xl bg-brand-tomato/15 text-brand-tomato group-hover:scale-110 transition-transform">
                        <FolderGit2 className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/25">
                        {projectsData.length} Live Builds
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-apple-dark group-hover:text-brand-lavender transition-colors mb-2.5">
                      Projects &amp; Prototypes
                    </h3>
                    <p className="text-sm text-apple-secondary leading-relaxed mb-6 font-normal">
                      Full-stack web software, 3D drone ground control telemetry, EEG neural visualizers, and IoT embedded systems.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-lavender pt-4 border-t border-black/5 group-hover:text-brand-tomato transition-colors">
                    <span>Enter Project Showcase</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </SpotlightCard>
              </Link>

              {/* Card 2: Achievements Gateway */}
              <Link to="/achievements" className="group">
                <SpotlightCard className="p-8 relative h-full flex flex-col justify-between group-hover:shadow-[0_20px_50px_rgba(255,90,54,0.12)] transition-all">
                  <BorderBeam size={200} duration={10} colorFrom="#7C3AED" colorTo="#FF5A36" />
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3.5 rounded-2xl bg-brand-lavender/15 text-brand-lavender group-hover:scale-110 transition-transform">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-sans font-bold text-brand-tomato bg-brand-tomato/10 px-3 py-1 rounded-full border border-brand-tomato/25">
                        1st Prize SIH &apos;24
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-apple-dark group-hover:text-brand-tomato transition-colors mb-2.5">
                      Hackathons &amp; Awards
                    </h3>
                    <p className="text-sm text-apple-secondary leading-relaxed mb-6 font-normal">
                      Smart India Hackathon 2024 Winner, Code Red Winner, Top 10 Paper Presentation, and accredited NPTEL credentials.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-tomato pt-4 border-t border-black/5 group-hover:text-brand-lavender transition-colors">
                    <span>Inspect Accolades</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </SpotlightCard>
              </Link>

              {/* Card 3: About Gateway */}
              <Link to="/about" className="group">
                <SpotlightCard className="p-8 relative h-full flex flex-col justify-between group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)] transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3.5 rounded-2xl bg-brand-green/15 text-brand-green group-hover:scale-110 transition-transform">
                        <Layers className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-brand-lavender bg-brand-lavender/10 px-3 py-1 rounded-full border border-brand-lavender/25">
                        CGPA 8.08
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-apple-dark group-hover:text-brand-green transition-colors mb-2.5">
                      About &amp; Telemetry
                    </h3>
                    <p className="text-sm text-apple-secondary leading-relaxed mb-6 font-normal">
                      Engineering philosophy, B.Tech IT education at REC, CodeBind internship highlights, and live telemetry terminal.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-green pt-4 border-t border-black/5 group-hover:translate-x-1 transition-all">
                    <span>Read Biography &amp; Stats</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </SpotlightCard>
              </Link>

              {/* Card 4: Skills Matrix Gateway */}
              <Link to="/skills" className="group">
                <SpotlightCard className="p-8 relative h-full flex flex-col justify-between group-hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)] transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3.5 rounded-2xl bg-brand-lavender/15 text-brand-lavender group-hover:scale-110 transition-transform">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-sans text-apple-secondary bg-black/5 px-3 py-1 rounded-full border border-black/5">
                        7 Core Domains
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-apple-dark group-hover:text-brand-lavender transition-colors mb-2.5">
                      Skills &amp; Toolsets
                    </h3>
                    <p className="text-sm text-apple-secondary leading-relaxed mb-6 font-normal">
                      React, Next.js, Node.js, Three.js, Python, PostgreSQL, MongoDB, Docker, Arduino, and ESP32 mapped to verified projects.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-lavender pt-4 border-t border-black/5">
                    <span>Open Competencies Matrix</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </SpotlightCard>
              </Link>

              {/* Card 5: Journey Gateway */}
              <Link to="/journey" className="group">
                <SpotlightCard className="p-8 relative h-full flex flex-col justify-between group-hover:shadow-[0_20px_50px_rgba(255,90,54,0.12)] transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3.5 rounded-2xl bg-brand-tomato/15 text-brand-tomato group-hover:scale-110 transition-transform">
                        <Milestone className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-apple-secondary bg-black/5 px-3 py-1 rounded-full border border-black/5">
                        2022 &rarr; 2026
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-apple-dark group-hover:text-brand-tomato transition-colors mb-2.5">
                      Journey &amp; Milestones
                    </h3>
                    <p className="text-sm text-apple-secondary leading-relaxed mb-6 font-normal">
                      Chronological progression tracking college enrollment, prototype development, hackathon victories, and future engineering goals.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-tomato pt-4 border-t border-black/5">
                    <span>Inspect Career Timeline</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </SpotlightCard>
              </Link>

              {/* Card 6: Contact Gateway */}
              <Link to="/contact" className="group">
                <SpotlightCard className="p-8 relative h-full flex flex-col justify-between group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)] transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3.5 rounded-2xl bg-brand-green/15 text-brand-green group-hover:scale-110 transition-transform">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-sans font-semibold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/25 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                        Available for Roles
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-apple-dark group-hover:text-brand-green transition-colors mb-2.5">
                      Contact &amp; Connect
                    </h3>
                    <p className="text-sm text-apple-secondary leading-relaxed mb-6 font-normal">
                      Direct transmission form, email, phone, and downloadable verified resume PDF. Immediate response within 24 hours.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-green pt-4 border-t border-black/5">
                    <span>Initiate Transmission</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </SpotlightCard>
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: Featured Projects Showcase (Apple Product Grid Style)
           ========================================================================= */}
        <section className="relative py-24 bg-[#FBFBFE] border-t border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lavender/10 border border-brand-lavender/30 text-xs font-semibold text-brand-lavender mb-3">
                  <FolderGit2 className="w-3.5 h-3.5 text-brand-tomato" />
                  <span>Curated Works</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-apple-dark tracking-tight">
                  Featured Projects.
                </h2>
                <p className="text-base sm:text-lg text-apple-secondary mt-2 max-w-xl">
                  Deep implementations combining real-time 3D graphics, drone telemetry, and full-stack software.
                </p>
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-apple-dark hover:bg-brand-lavender text-white text-xs font-sans font-semibold shadow-md active:scale-95 transition-all shrink-0 self-start md:self-auto"
              >
                <span>Browse All {projectsData.length} Projects</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Featured Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
