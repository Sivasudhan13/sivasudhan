import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center px-4 text-center bg-[#FBFBFE] text-apple-dark">
      <Helmet>
        <title>404 — Page Not Found | Sivasudhan E Portfolio</title>
      </Helmet>

      <div className="p-4 rounded-full bg-brand-lavender/10 text-brand-lavender mb-6">
        <Compass className="w-10 h-10 animate-spin-slow" />
      </div>

      <span className="text-sm font-sans font-semibold text-brand-lavender uppercase tracking-widest mb-2">
        Error 404
      </span>

      <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-apple-dark tracking-tight mb-4">
        Page Not Found
      </h1>

      <p className="text-apple-secondary max-w-md mb-8 leading-relaxed text-sm sm:text-base">
        The requested page is not part of this portfolio or may have been relocated.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-apple-dark hover:bg-brand-lavender text-white font-sans font-semibold text-sm shadow-md active:scale-95 transition-all"
      >
        <Home className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
