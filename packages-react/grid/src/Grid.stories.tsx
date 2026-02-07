import React from 'react';

import { Box } from '@pittorica/box-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from './Grid.js';

/**
 * Grid component for complex two-dimensional layouts.
 * Supports responsive configurations and fluid auto-wrapping (auto-fit).
 */
const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'object',
      description: 'Fixed columns (1-12) or fluid (e.g., "auto-200px")',
    },
    gap: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    flow: {
      control: 'select',
      options: ['row', 'column', 'dense', 'row-dense', 'column-dense'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
    },
    justify: {
      control: 'select',
      options: [
        'start',
        'center',
        'end',
        'between',
        'around',
        'evenly',
        'stretch',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const Item = ({
  children,
  color = 'var(--pittorica-indigo-9)',
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <Box
    style={{
      backgroundColor: color,
      padding: '24px',
      color: 'white',
      borderRadius: '8px',
      textAlign: 'center',
    }}
  >
    {children}
  </Box>
);

export const Default: Story = {
  args: {
    columns: '3',
    gap: '4',
    children: (
      <>
        <Item>1</Item>
        <Item color="var(--pittorica-crimson-9)">2</Item>
        <Item color="var(--pittorica-teal-9)">3</Item>
        <Item color="var(--pittorica-amber-9)">4</Item>
      </>
    ),
  },
};

/**
 * Automatically adjusts the number of columns based on the available width.
 * Each item will be at least 150px wide.
 */
export const FluidGrid: Story = {
  args: {
    columns: 'auto-150px',
    gap: '4',
    children: Array.from({ length: 6 }).map((_, i) => (
      <Item
        // eslint-disable-next-line @eslint-react/no-array-index-key
        key={i}
        color={
          i % 2 === 0 ? 'var(--pittorica-teal-9)' : 'var(--pittorica-indigo-9)'
        }
      >
        Fluid {i + 1}
      </Item>
    )),
  },
};

/**
 * Changes layout structure at different breakpoints using object syntax.
 */
export const ResponsiveGrid: Story = {
  args: {
    columns: { initial: '1', sm: '2', md: '3', lg: '4' },
    gap: { initial: '2', md: '6' },
    children: (
      <>
        <Item>Hero</Item>
        <Item color="var(--pittorica-crimson-9)">Sidebar</Item>
        <Item color="var(--pittorica-teal-9)">Content A</Item>
        <Item color="var(--pittorica-amber-9)">Content B</Item>
      </>
    ),
  },
};
