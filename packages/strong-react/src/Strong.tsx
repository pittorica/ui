import { Text, type TextProps } from '@pittorica/text-react';

/**
 * Strong component for bold text emphasis.
 */
export const Strong = (props: TextProps) => (
  <Text as="strong" weight="bold" {...props} />
);
