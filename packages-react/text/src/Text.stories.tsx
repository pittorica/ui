import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'The HTML tag to render the text as. Defaults to "span".',
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'bold'],
      description: 'Sets the font weight of the text.',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Sets the text alignment.',
    },
    truncate: {
      control: 'boolean',
      description:
        'If true, the text will truncate with an ellipsis if it overflows its container.',
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
      description:
        'Sets the color of the text. Can be a semantic token or a custom value.',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is default text.',
  },
};

export const LargeText: Story = {
  args: {
    children: 'This is large text.',
  },
};

export const BoldText: Story = {
  args: {
    children: 'This is bold text.',
    weight: 'bold',
  },
};

export const CenteredText: Story = {
  args: {
    children: 'This text is centered.',
    align: 'center',
    style: { width: '100%' }, // Ensure it has a width to center within
  },
};

export const TruncatedText: Story = {
  args: {
    children:
      'This is a very long text that should be truncated when it overflows its container.',
    truncate: true,
    style: { width: '200px', border: '1px solid var(--pittorica-slate-7)' },
  },
};

export const ColoredText: Story = {
  args: {
    children: 'This text is red.',
    color: 'red',
  },
};

export const CustomElementText: Story = {
  args: {
    children: 'This is text rendered as a paragraph.',
    as: 'p',
  },
};
