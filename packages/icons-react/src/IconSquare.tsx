import { IconSquare as TablerIcon } from '@tabler/icons-react';

import type { IconProps } from './types.js';

export const IconSquare: React.FC<IconProps> = ({
  width = '24',
  fillColor = 'none',
  strokeColor = 'currentColor',
  strokeWidth = '2',
  ...props
}) => (
  <TablerIcon
    width={width}
    height={width}
    fill={fillColor}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    {...(props as React.ComponentProps<typeof TablerIcon>)}
  />
);
