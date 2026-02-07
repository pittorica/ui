import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Link> = {
  title: 'Typography/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    underline: {
      control: 'select',
      options: ['always', 'hover', 'none'],
      description: 'Controls the underline behavior of the link.',
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
        'Sets the color of the link. Can be a semantic token or a custom value.',
    },
    rel: {
      control: 'text',
      description:
        'Specifies the relationship between the current document and the linked document.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Default Link',
  },
};

export const AlwaysUnderline: Story = {
  args: {
    children: 'Always Underlined',
    underline: 'always',
  },
};

export const NoUnderline: Story = {
  args: {
    children: 'No Underline',
    underline: 'none',
  },
};

export const CustomColor: Story = {
  args: {
    children: 'Danger Link',
    color: 'danger',
  },
};

export const ExternalLink: Story = {
  args: {
    children: 'Visit Google',
    rel: 'noopener noreferrer',
  },
};
