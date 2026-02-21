import { Box } from '@pittorica/box-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex.js';

/**
 * Flex component for building responsive and fluid layouts using CSS Cascade Layers.
 * Supports responsive object syntax and auto-wrapping fluid basis.
 */
const meta = {
  title: 'Layout/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'object' },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
    },
    gap: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    basis: {
      control: 'text',
      description: 'Fluid basis for children (e.g., "auto-200px")',
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

const Placeholder = ({
  color = 'var(--pittorica-indigo-9)',
  label,
}: {
  color?: string;
  label?: string;
}) => (
  <Box
    style={{
      backgroundColor: color,
      padding: '20px',
      minHeight: '64px',
      borderRadius: '8px',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {label || 'Box'}
  </Box>
);

export const Default: Story = {
  args: {
    gap: '4',
    children: (
      <>
        <Placeholder />
        <Placeholder color="var(--pittorica-crimson-9)" />
        <Placeholder color="var(--pittorica-teal-9)" />
      </>
    ),
  },
};

/**
 * Demonstrates fluid wrapping where items expand to fill space but maintain a minimum width.
 */
export const FluidLayout: Story = {
  args: {
    basis: 'auto-200px',
    gap: '4',
    width: '100%',
    children: (
      <>
        <Placeholder label="Item 1" />
        <Placeholder color="var(--pittorica-crimson-9)" label="Item 2" />
        <Placeholder color="var(--pittorica-teal-9)" label="Item 3" />
        <Placeholder color="var(--pittorica-amber-9)" label="Item 4" />
      </>
    ),
  },
};

/**
 * Changes from column to row at MD breakpoint.
 */
export const ResponsiveLayout: Story = {
  args: {
    direction: { initial: 'column', md: 'row' },
    gap: { initial: '2', md: '6' },
    align: 'center',
    children: (
      <>
        <Placeholder />
        <Placeholder color="var(--pittorica-crimson-9)" />
        <Placeholder color="var(--pittorica-teal-9)" />
      </>
    ),
  },
};

export const JustifyBetween: Story = {
  args: {
    justify: 'between',
    width: '100%',
    children: (
      <>
        <Placeholder />
        <Placeholder color="var(--pittorica-teal-9)" />
      </>
    ),
  },
};
