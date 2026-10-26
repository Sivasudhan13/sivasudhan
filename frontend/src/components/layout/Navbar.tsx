import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { navLinks } from '../../data/navigation';
import { profileData } from '../../data/profile';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-white/85 backdrop-blur-2xl border-b border-black/5 shadow-[0_4px_20px_rgba(124,58,237,0.05)]'
            : 'py-4 bg-white/60 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Apple Style */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-lavender rounded-full p-1"
            >
              <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-brand-lavender via-purple-600 to-brand-tomato flex items-center justify-center font-display font-extrabold text-xs text-white shadow-md shadow-brand-lavender/25 group-hover:scale-105 transition-transform">
                SE
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-sm sm:text-base text-apple-dark tracking-tight leading-none">
                    Sivasudhan<span className="text-brand-tomato">.E</span>
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                </div>
                <span className="text-[10px] font-sans font-medium text-apple-secondary tracking-wide">
                  Software &amp; 3D Systems
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links - Apple Pill Design */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/90 backdrop-blur-xl border border-black/5 rounded-full px-3 py-1 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              {navLinks.map((link) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);

                return (
                  <NavLink
                    key={link.id}
                    to={link.path}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-brand-lavender font-semibold bg-brand-lavender/10 shadow-sm'
                        : 'text-apple-secondary hover:text-apple-dark hover:bg-black/5'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-brand-tomato rounded-full" />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Action Buttons - Apple Pill Style */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-apple-secondary hover:text-apple-dark hover:bg-black/5 rounded-full transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-apple-secondary hover:text-apple-dark hover:bg-black/5 rounded-full transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-sans font-semibold text-white bg-apple-dark hover:bg-brand-lavender rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 opacity-80" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-xs font-semibold text-white bg-apple-dark rounded-full"
                aria-label="View Resume PDF"
              >
                Resume
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-apple-secondary hover:text-apple-dark bg-white border border-black/5 rounded-full shadow-sm focus:outline-none"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activePath={location.pathname}
      />
    </>
  );
};
