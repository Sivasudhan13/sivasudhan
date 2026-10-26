import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LoadingScreen } from './components/ui/LoadingScreen';

// Lazy Loaded Routes
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const AchievementsPage = React.lazy(() => import('./pages/AchievementsPage'));
const SkillsPage = React.lazy(() => import('./pages/SkillsPage'));
const JourneyPage = React.lazy(() => import('./pages/JourneyPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ProjectPage = React.lazy(() => import('./pages/ProjectPage').then(m => ({ default: m.ProjectPage })));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Global Scroll-to-Top on Navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

// Apple-style Glowing Top Scroll Progress Bar
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-lavender via-purple-600 to-brand-tomato z-50 pointer-events-none shadow-[0_0_10px_rgba(124,58,237,0.5)]"
    />
  );
}

// Animated Page Wrapper with Apple Smooth Motion
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex-grow flex flex-col"
      >
        <Suspense fallback={<LoadingScreen />}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollProgress />
        <div className="min-h-screen flex flex-col bg-[#FBFBFE] text-apple-dark selection:bg-brand-lavender/20 selection:text-brand-lavender">
          <Navbar />
          <div className="flex-grow flex flex-col">
            <AnimatedRoutes />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
