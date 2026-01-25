import React from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

export interface LinebreakProps extends Omit<BoxProps, 'children' | 'as'> {
  style?: React.CSSProperties;
  className?: string;
}

export const Linebreak: React.FC<LinebreakProps> = ({ className, style }) => {
  return <Box as="br" className={clsx(className)} style={{ ...style }} />;
};
