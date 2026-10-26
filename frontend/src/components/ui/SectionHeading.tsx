import React from 'react';

export interface SectionHeadingProps {
  badge?: string;
  badgeColor?: 'lavender' | 'tomato' | 'green';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeColor = 'lavender',
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left';

  const badgeStyles = {
    lavender: 'text-brand-lavender bg-brand-lavender/10 border-brand-lavender/30',
    tomato: 'text-brand-tomato bg-brand-tomato/10 border-brand-tomato/30',
    green: 'text-brand-green bg-brand-green/10 border-brand-green/30',
  };

  const dotStyles = {
    lavender: 'bg-brand-lavender',
    tomato: 'bg-brand-tomato',
    green: 'bg-brand-green',
  };

  return (
    <div className={`flex flex-col mb-12 md:mb-16 max-w-3xl ${alignClass} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1 mb-4 text-xs font-sans font-semibold tracking-wide border rounded-full w-fit ${badgeStyles[badgeColor]}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${dotStyles[badgeColor]} animate-pulse`} />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-apple-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-apple-secondary leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
