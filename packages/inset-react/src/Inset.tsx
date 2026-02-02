import type { Ref } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

export interface InsetProps extends BoxProps {
  /**
   * Which sides should be inset.
   * @default 'all'
   */
  side?: 'all' | 'x' | 'y' | 'top' | 'bottom';
  /**
   * If true, clips the content to the parent's border radius.
   * @default true
   */
  clip?: boolean;
}

/**
 * Inset is used to stretch content to the edges of its container.
 */
export const Inset = ({
  children,
  side = 'all',
  clip = true,
  className,
  style,
  ref,
  ...props
}: InsetProps & { ref?: Ref<HTMLElement> }) => {
  return (
    <Box
      {...props}
      ref={ref}
      className={clsx('pittorica-inset', `pittorica-inset--${side}`, className)}
      style={{
        overflow: clip ? 'hidden' : 'visible',
        ...style,
      }}
    >
      {children}
    </Box>
  );
};

Inset.displayName = 'Inset';
