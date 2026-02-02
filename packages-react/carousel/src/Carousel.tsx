import { type ReactNode, useRef } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

/* --- Root --- */
export interface CarouselRootProps extends BoxProps {
  children: ReactNode;
}

export const CarouselRoot = ({
  children,
  className,
  ...props
}: CarouselRootProps) => {
  const viewportRef = useRef<HTMLDivElement>(null);

  return (
    <Box {...props} className={clsx('pittorica-carousel-root', className)}>
      <div ref={viewportRef} className="pittorica-carousel-viewport">
        {children}
      </div>
    </Box>
  );
};

/* --- Item --- */
export interface CarouselItemProps extends BoxProps {
  children: ReactNode;
}

export const CarouselItem = ({
  children,
  className,
  ...props
}: CarouselItemProps) => (
  <Box {...props} className={clsx('pittorica-carousel-item', className)}>
    {children}
  </Box>
);

export const Carousel = {
  Root: CarouselRoot,
  Item: CarouselItem,
};
