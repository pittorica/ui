import { useMemo, useState } from 'react';

import { clsx } from 'clsx';

import { AnimatePresence, motion } from 'motion/react';
import { Box, type BoxProps } from '@pittorica/box-react';
import { Text } from '@pittorica/text-react';

export interface CarouselRootProps extends BoxProps {
  /** Number of items to show in the viewport layout */
  preview?: 2 | 3;
  /** Initial active index */
  defaultIndex?: number;
}

/**
 * MD3 Hero Carousel with dynamic layout masking and fixed radius.
 */
export const CarouselRoot = ({
  children,
  className,
  preview = 2,
  defaultIndex = 0,
  ...props
}: CarouselRootProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const items = useMemo(() => {
    const arr = Array.isArray(children) ? children : [children];
    return [...arr.slice(activeIndex), ...arr.slice(0, activeIndex)];
  }, [children, activeIndex]);

  /**
   * Calculates width based on position and preview prop.
   */
  const getWidth = (visualIndex: number): string => {
    if (preview === 2) {
      if (visualIndex === 0) return '75%';
      if (visualIndex === 1) return '25%';
      return '0%';
    }

    if (visualIndex === 0) return '50%';
    if (visualIndex === 1) return '35%';
    if (visualIndex === 2) return '15%';
    return '0%';
  };

  return (
    <Box {...props} className={clsx('pittorica-carousel-root', className)}>
      <motion.div
        layout
        className="pittorica-carousel-viewport"
        style={{ display: 'flex', overflow: 'hidden', gap: '8px' }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {items.map((child, visualIndex) => {
            const originalIndex = (activeIndex + visualIndex) % items.length;
            const width = getWidth(visualIndex);

            if (width === '0%') return null;

            return (
              <motion.div
                key={originalIndex}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  width: width,
                }}
                exit={{ opacity: 0, scale: 0.9, width: '0%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="pittorica-carousel-item"
                onClick={() => setActiveIndex(originalIndex)}
                style={{ cursor: 'pointer', flexShrink: 0 }}
              >
                {child}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Box>
  );
};

export const CarouselItem = ({ children, className, ...props }: BoxProps) => (
  <Box
    {...props}
    className={clsx('pittorica-carousel-item-inner', className)}
    style={{ width: '100%', height: '100%' }}
  >
    {children}
  </Box>
);

export const CarouselDescription = ({ children, className }: BoxProps) => (
  <div className={clsx('pittorica-carousel-description', className)}>
    <Text color="white" weight="medium">
      {children}
    </Text>
  </div>
);

export const Carousel = {
  Root: CarouselRoot,
  Item: CarouselItem,
  Description: CarouselDescription,
};
