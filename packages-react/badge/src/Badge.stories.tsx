import { Avatar } from '@pittorica/avatar-react';
import { Box } from '@pittorica/box-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge.js';

const meta = {
  title: 'Feedback/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'indigo',
        'crimson',
        'teal',
        'amber',
        'red',
        'success',
        'danger',
      ],
    },
    variant: {
      control: 'radio',
      options: ['standard', 'dot'],
    },
    invisible: { control: 'boolean' },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    badgeContent: 4,
    color: 'indigo',
    children: (
      <Box
        style={{
          width: '40px',
          height: '40px',
          background: 'var(--pittorica-slate-3)',
          borderRadius: '4px',
        }}
      />
    ),
  },
};

export const WithAvatar: Story = {
  args: {
    badgeContent: 1,
    color: 'red',
    variant: 'standard',
    children: (
      <Avatar
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="User"
      />
    ),
  },
};

export const OnlineStatus: Story = {
  args: {
    variant: 'dot',
    color: 'success',
    children: <Avatar fallback="JD" alt="John Doe" />,
  },
};

export const Counter: Story = {
  args: {
    badgeContent: 120,
    max: 99,
    color: 'danger',
    children: (
      <Box
        style={{
          padding: '8px',
          border: '1px solid var(--pittorica-slate-4)',
          borderRadius: '4px',
        }}
      >
        Inbox
      </Box>
    ),
  },
};
