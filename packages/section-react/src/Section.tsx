import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

export interface SectionProps extends BoxProps {
  /**
   * Vertical padding size.
   * Maps to responsive padding values in CSS.
   * @default '3'
   */
  size?: '1' | '2' | '3';
}

export const Section = ({
  children,
  as: Tag = 'section',
  size = '3',
  className,
  ...props
}: SectionProps) => {
  return (
    <Box
      as={Tag}
      className={clsx('pittorica-section', className)}
      data-size={size}
      {...props}
    >
      {children}
    </Box>
  );
};
