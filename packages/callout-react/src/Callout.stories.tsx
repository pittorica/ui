import type { Meta, StoryObj } from '@storybook/react';

import { Callout } from './Callout';

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['indigo', 'red', 'amber', 'teal', 'slate'],
    },
    variant: { control: 'radio', options: ['soft', 'outline'] },
  },
};

export default meta;

export const Info: StoryObj<typeof Callout> = {
  render: (args) => (
    <Callout {...args} color="indigo">
      <Callout.Icon>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </Callout.Icon>
      <Callout.Text>
        You will need to verify your email address to complete the registration.
      </Callout.Text>
    </Callout>
  ),
};

export const Warning: StoryObj<typeof Callout> = {
  args: {
    color: 'amber',
    children: (
      <>
        <Callout.Icon>⚠️</Callout.Icon>
        <Callout.Text>
          Your subscription is about to expire in 3 days.
        </Callout.Text>
      </>
    ),
  },
};
