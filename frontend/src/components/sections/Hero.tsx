import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowDown, FileText, Terminal, ChevronRight, Award, ShieldCheck } from 'lucide-react';
import { profileData } from '../../data/profile';
import { HeroScene } from '../three/HeroScene';
import { ShinyText } from '../reactbits/ShinyText';
import { DecryptedText } from '../reactbits/DecryptedText';
import { BorderBeam } from '../reactbits/BorderBeam';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Apple-style scroll-driven motion (scroll up and down)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax and scale effects as user scrolls up and down
  const heroCardScale = useTransform(smoothProgress, [0, 1], [1, 0.92]);
  const heroCardY = useTransform(smoothProgress, [0, 1], [0, 90]);
  const heroCardOpacity = useTransform(smoothProgress, [0, 0.85], [1, 0.3]);
  const textY = useTransform(smoothProgress, [0, 1], [0, 50]);
  const glowScale = useTransform(smoothProgress, [0, 1], [1, 1.3]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden bg-[#FBFBFE]"
    >
      {/* Apple ethereal lavender and white mesh background */}
      <div className="absolute inset-0 bg-apple-lavender-mesh pointer-events-none opacity-80" />

      {/* Background fine grid pattern with subtle lavender lines */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-60 pointer-events-none" />

      {/* Luminous Apple atmospheric ambient lights */}
      <motion.div
        style={{ scale: glowScale }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-lavender/15 rounded-full blur-[140px] pointer-events-none"
      />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-brand-tomato/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Apple Centered Keynote Header */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-5"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-brand-lavender/25 shadow-sm text-xs font-medium backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <Terminal className="w-3.5 h-3.5 text-brand-lavender" />
            <ShinyText text="B.Tech IT • Available for Engineering Roles" speed={3.5} />
            <span className="text-apple-secondary hidden sm:inline">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-brand-tomato font-semibold">
              <Award className="w-3.5 h-3.5" />
              Smart India Hackathon &apos;24 Winner
            </span>
          </div>

          {/* Majestic Apple Headline */}
          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-display font-extrabold tracking-tight text-apple-dark leading-[1.02]">
            Sivasudhan E.
            <span className="block text-3xl sm:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-lavender via-purple-600 to-brand-tomato mt-3">
              Engineering Ideas into Reality.
            </span>
          </h1>

          {/* Role & Mission Sub-Headline */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-lg sm:text-xl font-mono text-brand-lavender font-semibold flex items-center gap-2">
              <span className="text-brand-tomato">&gt;</span>
              <DecryptedText text={profileData.headline} speed={30} />
            </p>
            <p className="text-base sm:text-lg text-apple-secondary max-w-2xl font-normal leading-relaxed">
              Winner of <strong className="text-apple-dark font-semibold">Smart India Hackathon 2024</strong> and <strong className="text-apple-dark font-semibold">Code Red Hackathon</strong>. Architecting full-stack applications, autonomous drone telemetry, and real-time biomedical systems.
            </p>
          </div>

          {/* Apple-style Action Pill Buttons */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans font-semibold text-sm text-white bg-apple-dark hover:bg-brand-lavender shadow-lg shadow-black/10 active:scale-95 transition-all"
            >
              <span>Explore Projects</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <Link
              to="/achievements"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-sans text-sm font-semibold text-apple-dark bg-white/90 hover:bg-white border border-black/10 shadow-sm hover:shadow active:scale-95 transition-all"
            >
              <Award className="w-4 h-4 text-brand-tomato" />
              <span>SIH &apos;24 Winner Awards</span>
            </Link>

            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-mono font-medium rounded-full bg-brand-lavender/10 hover:bg-brand-lavender/20 text-brand-lavender border border-brand-lavender/30 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>
        </motion.div>

        {/* =========================================================================
            Apple Product Reveal Showcase: Sivasudhan's Real Photo with Scroll Motion
           ========================================================================= */}
        <motion.div
          style={{
            scale: heroCardScale,
            y: heroCardY,
            opacity: heroCardOpacity,
          }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Outer Apple Titanium / Frosted Glass Reveal Frame */}
          <div className="relative rounded-[36px] sm:rounded-[44px] p-3 sm:p-5 bg-white/70 backdrop-blur-3xl border border-white shadow-[0_25px_80px_-15px_rgba(124,58,237,0.18),0_4px_16px_rgba(0,0,0,0.02)] overflow-hidden">
            {/* BorderBeam Animated Lavender & Tomato Orange Edge */}
            <BorderBeam
              size={300}
              duration={10}
              colorFrom="#FF5A36"
              colorTo="#7C3AED"
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Photo Showcase (5 cols) */}
              <div className="md:col-span-5 relative">
                <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden bg-gradient-to-b from-brand-lavender/10 to-brand-lavender/25 border border-white/80 shadow-md group">
                  <img
                    src="/images/sivasudhan.png"
                    alt="Sivasudhan E — Full Stack Developer &amp; Systems Engineer"
                    className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[1.01] group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />

                  {/* Gentle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Glass Badge 1: SIH 2024 Winner */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-tomato text-white text-[10px] font-sans font-bold shadow-md shadow-brand-tomato/30 backdrop-blur-md">
                    <Award className="w-3 h-3 text-white" />
                    <span>SIH &apos;24 1ST PRIZE</span>
                  </div>

                  {/* Bottom Identity Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-sm text-apple-dark">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xs">
                        Sivasudhan E
                      </span>
                      <span className="text-[10px] font-sans font-semibold text-brand-green flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                    <span className="text-[10px] text-apple-secondary block">
                      Full-Stack &amp; Embedded Systems
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive 3D Digital Core Stage beside Portrait (7 cols) */}
              <div className="md:col-span-7 flex flex-col justify-between h-full space-y-4 p-2 sm:p-4">
                {/* 3D Scene Container */}
                <div className="relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden bg-gradient-to-br from-white/90 to-brand-lavender/10 border border-brand-lavender/20 flex items-center justify-center shadow-inner">
                  <HeroScene />
                </div>

                {/* Apple-style Tech Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  {/* SIH Winner */}
                  <div className="p-3 rounded-2xl bg-white/80 border border-black/5 shadow-sm flex flex-col">
                    <span className="text-xl sm:text-2xl font-display font-extrabold text-brand-tomato tracking-tight">
                      1st
                    </span>
                    <span className="text-[11px] font-semibold text-apple-dark">
                      SIH 2024
                    </span>
                    <span className="text-[10px] text-apple-secondary">
                      National Winner
                    </span>
                  </div>

                  {/* Code Red */}
                  <div className="p-3 rounded-2xl bg-white/80 border border-black/5 shadow-sm flex flex-col">
                    <span className="text-xl sm:text-2xl font-display font-extrabold text-brand-lavender tracking-tight">
                      1st
                    </span>
                    <span className="text-[11px] font-semibold text-apple-dark">
                      Code Red
                    </span>
                    <span className="text-[10px] text-apple-secondary">
                      State Champion
                    </span>
                  </div>

                  {/* Production Builds */}
                  <div className="p-3 rounded-2xl bg-white/80 border border-black/5 shadow-sm flex flex-col">
                    <span className="text-xl sm:text-2xl font-display font-extrabold text-brand-green tracking-tight">
                      8+
                    </span>
                    <span className="text-[11px] font-semibold text-apple-dark">
                      Production
                    </span>
                    <span className="text-[10px] text-apple-secondary">
                      Web &amp; Telemetry
                    </span>
                  </div>

                  {/* CGPA */}
                  <div className="p-3 rounded-2xl bg-white/80 border border-black/5 shadow-sm flex flex-col">
                    <span className="text-xl sm:text-2xl font-display font-extrabold text-apple-dark tracking-tight">
                      8.08
                    </span>
                    <span className="text-[11px] font-semibold text-apple-dark">
                      CGPA
                    </span>
                    <span className="text-[10px] text-apple-secondary">
                      REC Chennai
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="mt-12 flex flex-col items-center pointer-events-none opacity-70">
        <span className="text-[10px] font-sans font-semibold tracking-wider text-apple-secondary uppercase mb-1">
          Scroll to explore
        </span>
        <ArrowDown className="w-4 h-4 text-brand-lavender animate-bounce" />
      </div>
    </section>
  );
};
