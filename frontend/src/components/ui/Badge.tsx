import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'blue' | 'red' | 'neutral' | 'success';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'sm',
  className = '',
  icon,
}) => {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1.5',
    md: 'text-sm px-3 py-1 gap-2',
  };

  const variantStyles = {
    cyan: 'bg-[#54E7FF]/10 text-[#54E7FF] border-[#54E7FF]/25',
    blue: 'bg-[#4D8DFF]/10 text-[#4D8DFF] border-[#4D8DFF]/25',
    red: 'bg-[#FF454F]/10 text-[#FF454F] border-[#FF454F]/25',
    neutral: 'bg-white/5 text-[#9AA5B5] border-white/10',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
  };

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-full border ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
