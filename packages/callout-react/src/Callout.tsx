import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

export interface CalloutRootProps extends BoxProps {
  /** @default 'soft' */
  variant?: 'soft' | 'outline';
  /** @default 'indigo' */
  color?: PittoricaColor;
  children: React.ReactNode;
}

const CalloutRoot = ({
  variant = 'soft',
  color = 'indigo',
  children,
  className,
  style,
  ...props
}: CalloutRootProps) => {
  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  return (
    <Box
      className={clsx(
        'pittorica-callout',
        `pittorica-callout--${variant}`,
        className
      )}
      style={
        { '--_callout-color': resolvedColor, ...style } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </Box>
  );
};

const CalloutIcon = ({ children, className, ...props }: BoxProps) => (
  <Box className={clsx('pittorica-callout-icon', className)} {...props}>
    {children}
  </Box>
);

const CalloutText = ({ children, className, ...props }: BoxProps) => (
  <Box className={clsx('pittorica-callout-content', className)} {...props}>
    {children}
  </Box>
);

export const Callout = Object.assign(CalloutRoot, {
  Icon: CalloutIcon,
  Text: CalloutText,
});
