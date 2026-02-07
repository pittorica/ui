import type { Meta, StoryObj } from '@storybook/react';

import { Quote } from './Quote';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Quote> = {
  title: 'Typography/Quote',
  component: Quote,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Quote>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'This is a short inline quotation.',
  },
};
