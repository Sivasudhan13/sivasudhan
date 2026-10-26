import React from 'react';
import { motion } from 'motion/react';
import type { HTMLMotionProps } from 'motion/react';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'tomato' | 'green' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      icon,
      iconPosition = 'right',
      isLoading = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-sans font-semibold transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-brand-lavender focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none';

    const sizeStyles = {
      sm: 'text-xs px-4 py-1.5 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-7 py-3.5 gap-2.5 font-semibold',
    };

    const variantStyles = {
      primary:
        'bg-apple-dark text-white hover:bg-brand-lavender shadow-md hover:shadow-lg active:scale-95',
      tomato:
        'bg-brand-tomato text-white hover:bg-brand-tomatoDark shadow-md active:scale-95',
      green:
        'bg-brand-green text-white hover:bg-brand-greenDark shadow-md active:scale-95',
      secondary:
        'bg-white text-apple-dark hover:bg-[#F5F3FF] border border-black/10 shadow-xs hover:shadow active:scale-95',
      outline:
        'bg-transparent hover:bg-brand-lavender/10 text-brand-lavender border border-brand-lavender/30 hover:border-brand-lavender active:scale-95',
      ghost:
        'bg-transparent hover:bg-black/5 text-apple-secondary hover:text-apple-dark active:scale-95',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {!isLoading && icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
