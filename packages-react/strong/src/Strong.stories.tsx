import type { Meta, StoryObj } from '@storybook/react';

import { Strong } from './Strong';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Typography/Strong',
  component: Strong,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Strong>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'This is strong text.',
  },
};
