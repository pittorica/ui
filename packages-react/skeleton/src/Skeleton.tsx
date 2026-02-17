import { type Ref, RefObject } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

export interface SkeletonProps extends BoxProps {
  /**
   * If true, shows the skeleton. If false, shows the children.
   * @default true
   */
  loading?: boolean;
  /**
   * Shape of the skeleton.
   * @default 'rect'
   */
  variant?: 'rect' | 'circle' | 'text';
}

/**
 * Skeleton placeholder for loading states.
 * Fully hides children content including text nodes to avoid bleed-through.
 */
export const Skeleton = ({
  children,
  loading = true,
  variant = 'rect',
  className,
  style,
  ref,
  ...props
}: SkeletonProps & { ref?: Ref<HTMLElement> }) => {
  // Return children directly if not loading
  if (!loading) return <>{children}</>;

  return (
    <Box
      {...props}
      ref={ref as RefObject<HTMLDivElement>}
      className={clsx(
        'pittorica-skeleton',
        'pittorica-skeleton--loading',
        {
          'pittorica-skeleton--hiding-children': !!children,
          'pittorica-skeleton--circle': variant === 'circle',
          'pittorica-skeleton--text': variant === 'text',
        },
        className
      )}
      style={{
        height: variant === 'text' && !props.height ? '0.8em' : props.height,
        width: variant === 'text' && !props.width ? '100%' : props.width,
        ...style,
      }}
    >
      {children}
    </Box>
  );
};

Skeleton.displayName = 'Skeleton';
