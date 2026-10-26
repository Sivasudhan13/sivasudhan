import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, FileText, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';
import { navLinks } from '../../data/navigation';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F5F5F7] border-t border-black/5 pt-16 pb-12 overflow-hidden text-apple-secondary">
      {/* Subtle lavender gradient accent at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-lavender/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-black/5">
          {/* Identity column */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-lavender to-brand-tomato flex items-center justify-center font-display font-bold text-xs text-white shadow-sm">
                SE
              </div>
              <span className="font-display font-bold text-lg text-apple-dark tracking-tight">
                Sivasudhan<span className="text-brand-tomato">.E</span>
              </span>
            </Link>
            <p className="text-sm text-apple-secondary max-w-md leading-relaxed">
              Software Developer &amp; Systems Engineer. B.Tech Information Technology student at Rajalakshmi Engineering College (CGPA 8.08), Smart India Hackathon 2024 Winner, specializing in full-stack web applications, drone telemetry, and real-time physical interfaces.
            </p>
            <div className="flex items-center gap-2 text-xs font-sans font-medium text-brand-green bg-brand-green/10 border border-brand-green/20 rounded-full px-3 py-1 w-fit">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Documented Hackathon Awards &amp; Genuine Codebases</span>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-apple-dark mb-4">
              Directory
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="text-apple-secondary hover:text-brand-lavender transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-apple-dark mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="flex items-center gap-2 text-apple-secondary hover:text-apple-dark transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-tomato" />
                  <span className="truncate">{profileData.socials.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profileData.socials.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-apple-secondary hover:text-apple-dark transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-green" />
                  <span>{profileData.socials.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-apple-secondary hover:text-apple-dark transition-colors"
                >
                  <FileText className="w-4 h-4 text-brand-lavender" />
                  <span>Download Verified Resume</span>
                </a>
              </li>
              <li className="pt-2 flex items-center gap-3">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white border border-black/5 text-apple-secondary hover:text-apple-dark hover:border-brand-lavender/40 shadow-xs transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white border border-black/5 text-apple-secondary hover:text-apple-dark hover:border-brand-lavender/40 shadow-xs transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-apple-muted">
          <p>
            &copy; {new Date().getFullYear()} Sivasudhan E. All rights reserved. Designed with Apple aesthetic principles in Lavender &amp; White.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/5 text-apple-dark hover:text-brand-lavender shadow-xs transition-all group"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
