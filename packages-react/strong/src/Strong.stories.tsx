import type { Meta, StoryObj } from '@storybook/react';

import { Strong } from './Strong';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Strong> = {
  title: 'Typography/Strong',
  component: Strong,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Strong>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'This is strong text.',
  },
};
