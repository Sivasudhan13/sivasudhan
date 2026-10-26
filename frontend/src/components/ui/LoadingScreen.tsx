import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FBFBFE] text-apple-dark">
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Outer lavender spinning ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-lavender border-r-brand-tomato animate-spin" />
        {/* Inner core */}
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-brand-lavender to-brand-tomato animate-pulse shadow-[0_0_20px_rgba(124,58,237,0.35)]" />
      </div>
      <span className="mt-5 text-xs font-sans font-medium tracking-wide text-apple-secondary">
        Loading View...
      </span>
    </div>
  );
};
