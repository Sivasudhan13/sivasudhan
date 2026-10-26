import React, { useEffect, useState, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  animateOn?: 'view' | 'hover';
}

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=~[]{}|;:,.<>?';

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 40,
  maxIterations = 10,
  sequential = true,
  characters = DEFAULT_CHARS,
  className = '',
  encryptedClassName = 'text-[#54E7FF]',
  animateOn = 'view',
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setDisplayText(text);
      return;
    }

    let intervalId: ReturnType<typeof setInterval>;
    let iteration = 0;

    const startDecryption = () => {
      iteration = 0;
      clearInterval(intervalId);

      intervalId = setInterval(() => {
        setDisplayText(() => {
          return text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (sequential) {
                if (index < iteration / (maxIterations / (text.length || 1))) {
                  return char;
                }
              } else if (iteration >= maxIterations) {
                return char;
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('');
        });

        iteration += 1;
        if (iteration > maxIterations + (sequential ? text.length * 2 : 0)) {
          clearInterval(intervalId);
          setDisplayText(text);
        }
      }, speed);
    };

    if (animateOn === 'view') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              setHasAnimated(true);
              startDecryption();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        clearInterval(intervalId);
        observer.disconnect();
      };
    } else if (animateOn === 'hover' && isHovering) {
      startDecryption();
      return () => clearInterval(intervalId);
    }
  }, [text, speed, maxIterations, sequential, characters, animateOn, isHovering, hasAnimated, reducedMotion]);

  return (
    <span
      ref={containerRef}
      onMouseEnter={() => animateOn === 'hover' && setIsHovering(true)}
      onMouseLeave={() => animateOn === 'hover' && setIsHovering(false)}
      className={`inline-block font-mono tracking-tight select-none ${className}`}
    >
      {displayText.split('').map((char, idx) => {
        const isOriginal = char === text[idx];
        return (
          <span
            key={idx}
            className={isOriginal ? '' : encryptedClassName}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};
