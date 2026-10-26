import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileText, Mail, ExternalLink, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { navLinks } from '../../data/navigation';
import { profileData } from '../../data/profile';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activePath?: string;
  activeSection?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activePath = '/',
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-white/95 backdrop-blur-2xl border-l border-black/5 p-6 flex flex-col justify-between md:hidden shadow-2xl overflow-y-auto"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-black/5">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg text-apple-dark tracking-tight">
                    Sivasudhan<span className="text-brand-tomato">.E</span>
                  </span>
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-apple-secondary hover:text-apple-dark rounded-full hover:bg-black/5 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="mt-6 flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive =
                    link.path === '/'
                      ? activePath === '/'
                      : activePath.startsWith(link.path);

                  return (
                    <Link
                      key={link.id}
                      to={link.path}
                      onClick={onClose}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-brand-lavender/10 text-brand-lavender font-semibold shadow-sm'
                          : 'text-apple-secondary hover:text-apple-dark hover:bg-black/5'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-tomato" />
                        )}
                        <span>{link.name}</span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 ${
                          isActive ? 'text-brand-tomato' : 'text-apple-muted'
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-black/5 space-y-3">
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-apple-dark text-white font-medium text-sm hover:bg-brand-lavender transition-all shadow-md active:scale-98"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume PDF</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              {/* Social icons */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-apple-secondary hover:text-apple-dark hover:bg-black/5 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-apple-secondary hover:text-apple-dark hover:bg-black/5 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="p-2.5 rounded-full text-apple-secondary hover:text-apple-dark hover:bg-black/5 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
