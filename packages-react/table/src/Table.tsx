import type { Ref, RefObject } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

/* --- Container --- */
const TableContainer = ({ children, className, ...props }: BoxProps) => (
  <Box className={clsx('pittorica-table-container', className)} {...props}>
    {children}
  </Box>
);

/* --- Root --- */
const TableRoot = ({
  children,
  className,
  ref,
  ...props
}: BoxProps & { ref?: Ref<HTMLTableElement> }) => (
  <Box
    as="table"
    className={clsx('pittorica-table-root', className)}
    ref={ref as RefObject<HTMLDivElement>}
    {...props}
  >
    {children}
  </Box>
);

/* --- Header --- */
const TableHeader = ({ children, className, ...props }: BoxProps) => (
  <Box
    as="thead"
    className={clsx('pittorica-table-header', className)}
    {...props}
  >
    {children}
  </Box>
);

/* --- Body --- */
const TableBody = ({ children, className, ...props }: BoxProps) => (
  <Box
    as="tbody"
    className={clsx('pittorica-table-body', className)}
    {...props}
  >
    {children}
  </Box>
);

/* --- Row --- */
const TableRow = ({ children, className, ...props }: BoxProps) => (
  <Box as="tr" className={clsx('pittorica-table-row', className)} {...props}>
    {children}
  </Box>
);

/* --- Cell & ColumnHeader --- */
interface CellProps extends BoxProps {
  align?: 'left' | 'center' | 'right';
}

const TableCell = ({
  children,
  align = 'left',
  className,
  ...props
}: CellProps) => (
  <Box
    as="td"
    data-align={align}
    className={clsx('pittorica-table-cell', className)}
    {...props}
  >
    {children}
  </Box>
);

const TableColumnHeader = ({
  children,
  align = 'left',
  className,
  ...props
}: CellProps) => (
  <Box
    as="th"
    data-align={align}
    className={clsx('pittorica-table-column-header', className)}
    {...props}
  >
    {children}
  </Box>
);

export const Table = {
  Container: TableContainer,
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  ColumnHeader: TableColumnHeader,
};
