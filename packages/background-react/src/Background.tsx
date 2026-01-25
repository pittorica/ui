'use client';

import React from 'react';

import clsx from 'clsx';

import { backgroundRecipe, contentContainer } from './background.css.js';
import { BackgroundBeams } from './BackgroundBeams.js';
import { BackgroundBubbles } from './BackgroundBubbles.js';

const FadeInWrapper: React.FC<React.PropsWithChildren<{ delay?: number }>> = ({
  children,
  delay = 1.5,
}) => {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={contentContainer}
      style={{
        opacity: isReady ? 1 : 0,
        transition: 'opacity 0.5s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export interface BackgroundProps extends React.PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  /**
   * The visual variant of the background.
   * - 'bubbles': Floating, gooey bubbles.
   * - 'beams': Animated gradient beams.
   * - 'moon': Rocky, cratered surface texture.
   * - 'image': A static background image specified by imageUrl.
   * @default 'bubbles'
   */
  variant?: 'bubbles' | 'beams' | 'moon' | 'image';

  /**
   * URL of the image to use when variant is set to 'image'.
   */
  imageUrl?: string;

  colors?: string[];
  animationSpeed?: number;
}

const DEFAULT_CONTENT_DELAY = 1.5;

export const Background: React.FC<BackgroundProps> = ({
  className,
  style,
  children,
  variant = 'bubbles',
  imageUrl,
  colors,
  animationSpeed = 15,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const hasChildren = Boolean(children);

  const getDelay = () => {
    if (variant === 'bubbles') {
      return DEFAULT_CONTENT_DELAY + 10 / animationSpeed;
    }
    if (variant === 'beams') {
      return 2;
    }
    return 0.1;
  };

  const contentDelay = getDelay();

  const imageStyle: React.CSSProperties =
    variant === 'image' && imageUrl
      ? {
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }
      : {};

  return (
    <div
      ref={containerRef}
      className={clsx(
        backgroundRecipe({ position: hasChildren ? 'relative' : 'absolute' }),
        className
      )}
      style={{
        ...style,
        ...imageStyle,
        backgroundColor: style?.backgroundColor,
      }}
    >
      {variant === 'bubbles' && (
        <BackgroundBubbles
          containerRef={containerRef}
          colors={colors}
          animationSpeed={animationSpeed}
        />
      )}

      {variant === 'beams' && (
        <BackgroundBeams
          color={colors?.[0] ?? '#FF0000'}
          background={style?.backgroundColor}
        />
      )}

      {/* Content: Usa il wrapper animato */}
      {hasChildren && (
        <FadeInWrapper delay={contentDelay}>{children}</FadeInWrapper>
      )}
    </div>
  );
};
