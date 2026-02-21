import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

/**
 * Heading component for titles.
 * Supports Radix-like responsive size scaling via CSS media queries.
 */
const meta = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The semantic HTML heading tag to render.',
      table: { defaultValue: { summary: 'h1' } },
    },
    size: {
      control: 'object', // Changed to object to support responsive syntax
      description:
        'Responsive size from 1 to 9. Can be a string or a breakpoint object.',
      table: { defaultValue: { summary: '6' } },
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'bold'],
      description: 'Sets the font weight of the heading.',
      table: { defaultValue: { summary: 'bold' } },
    },
    color: {
      control: 'select',
      options: [
        'indigo',
        'crimson',
        'teal',
        'amber',
        'slate',
        'blue',
        'red',
        'danger',
        'success',
        'error',
        'info',
        'inherit',
      ],
      description: 'Sets the color of the heading using semantic tokens.',
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Stories match the current visual styles
export const H1Default: Story = {
  args: {
    as: 'h1',
    size: '9', // Explicitly setting the largest size for H1
    children: 'Heading Level 1 (H1)',
  },
};

export const H2Default: Story = {
  args: {
    as: 'h2',
    size: '8',
    children: 'Heading Level 2 (H2)',
  },
};

export const H3Default: Story = {
  args: {
    as: 'h3',
    size: '7',
    children: 'Heading Level 3 (H3)',
  },
};

// New Responsive Example
export const ResponsiveSize: Story = {
  args: {
    as: 'h1',
    size: { initial: '4', sm: '6', md: '9' },
    children: 'Responsive Heading (Resize your browser)',
  },
};

export const CustomWeight: Story = {
  args: {
    as: 'h2',
    weight: 'light',
    children: 'H2 with Light Weight',
  },
};

export const ColoredHeading: Story = {
  args: {
    as: 'h3',
    color: 'crimson', // Using one of the specific semantic colors
    children: 'Crimson H3 Heading',
  },
};
