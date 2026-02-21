import { PittoricaTheme } from '@pittorica/theme-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

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
      control: 'object',
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

export const H1Default: Story = {
  args: {
    as: 'h1',
    size: '9',
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
    color: 'crimson',
    children: 'Crimson H3 Heading',
  },
};

export const DarkMode: Story = {
  render: () => (
    <PittoricaTheme
      appearance="dark"
      style={{
        padding: '2rem',
        background: 'var(--pittorica-surface-0)',
        borderRadius: '8px',
      }}
    >
      <Heading size="9">Dark Mode Heading</Heading>
      <Heading size="6" color="teal">
        Teal Dark Heading
      </Heading>
    </PittoricaTheme>
  ),
};
