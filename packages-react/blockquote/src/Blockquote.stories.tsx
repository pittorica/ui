import type { Meta, StoryObj } from '@storybook/react';

import { Blockquote } from './Blockquote';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Blockquote> = {
  title: 'Typography/Blockquote',
  component: Blockquote,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'This is a blockquote example.',
  },
};
