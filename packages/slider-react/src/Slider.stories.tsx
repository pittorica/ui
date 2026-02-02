import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;

export const Basic: StoryObj<typeof Slider> = {
  args: {
    defaultValue: 50,
    color: 'indigo',
  },
};

export const Stepped: StoryObj<typeof Slider> = {
  args: {
    min: 0,
    max: 10,
    step: 2,
    color: 'orange',
  },
};
