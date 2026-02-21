import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from './Chip';

const meta = {
  title: 'Media/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['indigo', 'crimson', 'teal', 'amber', 'red'],
    },
    variant: { control: 'radio', options: ['solid', 'soft', 'outline'] },
    size: { control: 'radio', options: ['1', '2', '3'] },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { children: 'Chip Content', variant: 'soft', color: 'indigo' },
};

export const Deletable: Story = {
  args: {
    children: 'Deletable Tag',
    onDelete: () => alert('Deleted!'),
    color: 'crimson',
    variant: 'outline',
  },
};
