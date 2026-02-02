import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

export interface AspectRatioProps extends BoxProps {
  /**
   * The aspect ratio of the container.
   * @default 1 / 1
   */
  ratio?: number;
  children?: React.ReactNode;
}

export const AspectRatio = ({
  ratio = 1 / 1,
  children,
  className,
  style,
  ...props
}: AspectRatioProps) => {
  return (
    <Box
      className={clsx('pittorica-aspect-ratio', className)}
      style={{
        aspectRatio: `${ratio}`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
