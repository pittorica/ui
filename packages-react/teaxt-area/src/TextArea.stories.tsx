import { Flex } from '@pittorica/flex-react';
import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './TextArea.js';

/**
 * Storybook configuration for MD3 TextArea.
 */
const meta: Meta<typeof TextArea.Root> = {
  title: 'Components/TextArea',
  component: TextArea.Root,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['indigo', 'cyan', 'orange', 'crimson'],
    },
  },
};

export default meta;

/**
 * Standard MD3 Filled TextArea.
 */
export const Basic: StoryObj<typeof TextArea.Root> = {
  args: {
    label: 'Description',
    helperText: 'Write a brief overview of your project.',
    color: 'indigo',
  },
  render: (args) => (
    <Flex direction="column" style={{ width: '400px' }}>
      <TextArea.Root {...args}>
        <TextArea.Content placeholder="Enter your text here..." />
      </TextArea.Root>
    </Flex>
  ),
};

/**
 * Auto-expanding field story.
 */
export const AutoResizing: StoryObj<typeof TextArea.Root> = {
  args: {
    label: 'Auto-expanding field',
    helperText: 'This field grows as you type.',
    color: 'indigo',
  },
  render: (args) => (
    <Flex direction="column" style={{ width: '400px' }}>
      <TextArea.Root {...args}>
        <TextArea.Content
          autoResize
          placeholder="Start typing a long text to see me grow..."
        />
      </TextArea.Root>
    </Flex>
  ),
};

/**
 * Visual verification of different states using Flex for spacing.
 */
export const States: StoryObj<typeof TextArea.Root> = {
  render: () => (
    <Flex direction="column" gap="6" style={{ width: '400px' }}>
      <TextArea.Root
        label="Error State"
        error
        helperText="Please enter a valid description."
      >
        <TextArea.Content placeholder="Something is wrong..." />
      </TextArea.Root>

      <TextArea.Root
        label="Disabled State"
        disabled
        helperText="This field is currently locked."
      >
        <TextArea.Content placeholder="You cannot type here" />
      </TextArea.Root>
    </Flex>
  ),
};
