import { clsx } from 'clsx';

import { Text, type TextProps } from '@pittorica/text-react';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends Omit<TextProps, 'as'> {
  as?: HeadingTag;
}

/**
 * Map header tags to default typographic sizes.
 */
const tagToSizeMap: Record<HeadingTag, TextProps['size']> = {
  h1: '9',
  h2: '8',
  h3: '7',
  h4: '6',
  h5: '5',
  h6: '4',
};

/**
 * Heading component for titles.
 * Inherits color and utility logic from Text, but defaults to heading font and bold weight.
 */
export const Heading = ({
  children,
  as: Tag = 'h1',
  size,
  weight = 'bold',
  className,
  ...rest
}: HeadingProps) => {
  // Logic: Use provided size or fall back to the default for the specific tag
  const resolvedSize = size || tagToSizeMap[Tag];

  return (
    <Text
      as={Tag}
      size={resolvedSize}
      weight={weight}
      className={clsx('pittorica-heading', className)}
      {...rest}
    >
      {children}
    </Text>
  );
};
