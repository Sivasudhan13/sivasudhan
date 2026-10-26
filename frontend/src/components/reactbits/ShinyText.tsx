import React from 'react';

export interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = '',
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent font-medium ${
        disabled
          ? 'text-[#F5F7FA]'
          : 'bg-gradient-to-r from-[#9AA5B5] via-[#54E7FF] via-[#F5F7FA] to-[#9AA5B5] bg-[length:200%_auto] animate-shiny-text'
      } ${className}`}
      style={{
        animationDuration,
      }}
    >
      {text}
    </span>
  );
};
