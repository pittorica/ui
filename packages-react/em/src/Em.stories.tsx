import type { Meta, StoryObj } from '@storybook/react';

import { Em } from './Em';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Em> = {
  title: 'Typography/Em',
  component: Em,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Em>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'This is emphasized text.',
  },
};
