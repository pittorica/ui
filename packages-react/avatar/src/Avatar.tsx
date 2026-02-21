import React, { type ElementType, useEffect, useState } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

export type AvatarProps<E extends ElementType = 'div'> = BoxProps<E> & {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  /** @default '3' */
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  /** @default 'full' */
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  /** @default 'indigo' */
  color?: PittoricaColor;
};

/**
 * Avatar component with automatic fallback handling.
 * Fully polymorphic and agnostic.
 */
export const Avatar = <E extends ElementType = 'div'>({
  src,
  alt,
  fallback,
  size = '3',
  radius = 'full',
  color = 'indigo',
  className,
  style,
  as,
  ...props
}: AvatarProps<E>) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'loaded' | 'error'>(
    src ? 'loading' : 'idle'
  );

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    const handleLoad = () => setStatus('loaded');
    const handleError = () => setStatus('error');

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);
    img.src = src;

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src]);

  const sizeMap = {
    '1': '24px',
    '2': '32px',
    '3': '40px',
    '4': '48px',
    '5': '64px',
    '6': '80px',
    '7': '96px',
    '8': '128px',
    '9': '160px',
  };

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');

  const resolvedBg = isSemantic ? `var(--pittorica-${color}-3)` : color;
  const resolvedText = isSemantic ? `var(--pittorica-${color}-11)` : 'inherit';

  const finalSize = sizeMap[size];
  const Tag = as || 'div';

  return (
    <Box
      as={Tag as ElementType}
      className={clsx('pittorica-avatar', className)}
      style={
        {
          width: finalSize,
          height: finalSize,
          borderRadius:
            radius === 'full' ? '50%' : `var(--pittorica-radius-${radius})`,
          fontSize: `calc(${finalSize} / 2.5)`,
          '--_avatar-bg': resolvedBg,
          '--_avatar-text': resolvedText,
          ...style,
        } as React.CSSProperties
      }
      {...(props as BoxProps<E>)}
    >
      {status === 'loaded' && src ? (
        <img src={src} alt={alt} className="pittorica-avatar-image" />
      ) : (
        <div className="pittorica-avatar-fallback" aria-label={alt}>
          {fallback || alt?.charAt(0) || '?'}
        </div>
      )}
    </Box>
  );
};

Avatar.displayName = 'Avatar';
