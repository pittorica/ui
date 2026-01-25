import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

import { containerRecipe } from './container.css';

export const CONTAINER_SIZES = [
  'none',
  'fixed',
  'xxlarge',
  'xlarge',
  'large',
  'medium',
  'small',
  'xsmall',
] as const;
export type ContainerSize = (typeof CONTAINER_SIZES)[number];

export interface ContainerProps extends Omit<BoxProps, 'as'> {
  children?: React.ReactNode;
  size?: ContainerSize;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'xlarge',
  className,
  ...props
}) => {
  const containerClass = containerRecipe({ size });

  return (
    <Box as="div" className={clsx(containerClass, className)} {...props}>
      {children}
    </Box>
  );
};
