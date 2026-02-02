import { type Ref } from 'react';

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
  if (!loading) return <>{children}</>;

  return (
    <Box
      {...props}
      ref={ref}
      className={clsx(
        'pittorica-skeleton',
        'pittorica-skeleton--loading',
        {
          'pittorica-skeleton--hiding-children': !!children,
          'pittorica-skeleton--circle': variant === 'circle',
        },
        className
      )}
      style={{
        borderRadius:
          variant === 'circle' ? 'var(--pittorica-radius-full)' : undefined,
        height: variant === 'text' && !props.height ? '0.8em' : props.height,
        ...style,
      }}
    >
      {children}
    </Box>
  );
};

Skeleton.displayName = 'Skeleton';
