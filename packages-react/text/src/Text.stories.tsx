import { Em } from '@pittorica/em-react';
import { Kbd } from '@pittorica/kbd-react';
import { Link } from '@pittorica/link-react';
import { Quote } from '@pittorica/quote-react';
import { Strong } from '@pittorica/strong-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

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

export const MixedTypography: Story = {
  render: () => (
    <Text as="p">
      This is a paragraph with <Strong>strong text</Strong>, some{' '}
      <Em>emphasized words</Em>, and an <Link href="#">inline link</Link>. You
      can also include <Kbd>⌘ + K</Kbd> for shortcuts and a short{' '}
      <Quote>inline quote</Quote> to highlight important snippets.
    </Text>
  ),
};

export const LargeText: Story = {
  args: {
    size: '6',
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
    style: { width: '100%' },
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
