import { Text, type TextProps } from '@pittorica/text-react';

/**
 * Em component for italic text emphasis.
 */
export const Em = ({ style, ...props }: TextProps) => (
  <Text as="em" style={{ fontStyle: 'italic', ...style }} {...props} />
);
