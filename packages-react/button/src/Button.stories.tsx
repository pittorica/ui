import { Box, Flex, PittoricaTheme } from '@pittorica/react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Button } from './Button.js';

/**
 * Material Design 3 Button component.
 * Supports 5 variants, 5 sizes, and interactive states.
 */
const meta = {
  title: 'Interactive/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'tonal', 'outlined', 'elevated', 'text'],
      description: 'MD3 hierarchy: elevated, filled, tonal, outlined, and text',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description:
        'MD3 sizes: extra small, small, medium, large, and extra large',
    },
    color: {
      control: 'select',
      options: ['indigo', 'crimson', 'teal', 'amber', 'red', 'slate'],
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state layer with 38% opacity',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Matrix of all 5 MD3 variants.
 */
export const VariantsGallery: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <Box
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        alignItems: 'center',
      }}
    >
      <Button {...args} variant="elevated">
        Elevated
      </Button>
      <Button {...args} variant="filled">
        Filled
      </Button>
      <Button {...args} variant="tonal">
        Tonal
      </Button>
      <Button {...args} variant="outlined">
        Outlined
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
    </Box>
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
      <Flex gap="4" wrap="wrap">
        <Button variant="elevated" color="indigo">
          Elevated
        </Button>
        <Button variant="filled" color="teal">
          Filled
        </Button>
        <Button variant="tonal" color="orange">
          Tonal
        </Button>
        <Button variant="outlined" color="crimson">
          Outlined
        </Button>
        <Button variant="text" color="slate">
          Text
        </Button>
      </Flex>
    </PittoricaTheme>
  ),
};

export const Interactive: Story = {
  args: {
    children: 'Interactive Button',
  },
  render: (args) => <Button {...args} />,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /Interactive Button/i });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};
