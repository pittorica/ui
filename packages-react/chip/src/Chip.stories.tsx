import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
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
};

export default meta;

export const Basic: StoryObj<typeof Chip> = {
  args: { children: 'Chip Content', variant: 'soft', color: 'indigo' },
};

export const Deletable: StoryObj<typeof Chip> = {
  args: {
    children: 'Deletable Tag',
    onDelete: () => alert('Deleted!'),
    color: 'crimson',
    variant: 'outline',
  },
};
