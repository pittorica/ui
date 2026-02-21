import { Flex } from '@pittorica/flex-react';
import { PittoricaTheme } from '@pittorica/theme-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Blockquote } from './Blockquote';

const meta = {
  title: 'Typography/Blockquote',
  component: Blockquote,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['classic', 'soft', 'solid', 'outline'],
    },
    color: {
      control: 'select',
      options: ['indigo', 'teal', 'crimson', 'orange', 'purple', 'slate'],
    },
  },
} satisfies Meta<typeof Blockquote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      'Design is not just what it looks like and feels like. Design is how it works.',
    variant: 'classic',
  },
};

export const Variants: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Blockquote {...args} variant="classic">
        Classic: Minimal border-left only.
      </Blockquote>
      <Blockquote {...args} variant="soft">
        Soft: Pastel background with border-left.
      </Blockquote>
      <Blockquote {...args} variant="outline">
        Outline: Colored border with transparent background.
      </Blockquote>
      <Blockquote {...args} variant="solid">
        Solid: Full background with high contrast text.
      </Blockquote>
    </Flex>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Blockquote {...args} variant="soft" color="indigo">
        Indigo soft blockquote.
      </Blockquote>
      <Blockquote {...args} variant="soft" color="teal">
        Teal soft blockquote.
      </Blockquote>
      <Blockquote {...args} variant="soft" color="crimson">
        Crimson soft blockquote.
      </Blockquote>
      <Blockquote {...args} variant="soft" color="orange">
        Orange soft blockquote.
      </Blockquote>
    </Flex>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <PittoricaTheme
      appearance="dark"
      style={{
        padding: '2rem',
        background: 'var(--pittorica-surface-0)',
        borderRadius: '8px',
      }}
    >
      <Flex direction="column" gap="4">
        <Blockquote variant="classic" color="indigo">
          Dark Classic Blockquote
        </Blockquote>
        <Blockquote variant="soft" color="teal">
          Dark Soft Blockquote
        </Blockquote>
        <Blockquote variant="outline" color="orange">
          Dark Outline Blockquote
        </Blockquote>
        <Blockquote variant="solid" color="crimson">
          Dark Solid Blockquote
        </Blockquote>
      </Flex>
    </PittoricaTheme>
  ),
};
