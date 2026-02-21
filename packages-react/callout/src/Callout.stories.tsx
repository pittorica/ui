import { IconAlertTriangle, IconInfoCircle } from '@tabler/icons-react';

import type { Meta, StoryObj } from '@storybook/react';

import { Callout } from './Callout';

const meta = {
  title: 'Feedback/Callout',
  component: Callout,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['indigo', 'red', 'amber', 'teal', 'slate'],
    },
    variant: { control: 'radio', options: ['soft', 'outline'] },
  },
} satisfies Meta<typeof Callout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: (args) => (
    <Callout {...args} color="indigo">
      <Callout.Icon>
        <IconInfoCircle stroke={2} />
      </Callout.Icon>
      <Callout.Text>
        You will need to verify your email address to complete the registration.
      </Callout.Text>
    </Callout>
  ),
};

export const Warning: Story = {
  args: {
    color: 'amber',
    children: (
      <>
        <Callout.Icon>
          <IconAlertTriangle />
        </Callout.Icon>
        <Callout.Text>
          Your subscription is about to expire in 3 days.
        </Callout.Text>
      </>
    ),
  },
};
