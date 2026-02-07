import { Box } from '@pittorica/box-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button.js';

/**
 * Material Design 3 Button component.
 * Supports 5 variants, 5 sizes, and interactive states.
 */
const meta: Meta<typeof Button> = {
  title: 'Interactive/Button',
  component: Button,
  tags: ['autodocs'],
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
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Matrix of all 5 MD3 variants.
 * All buttons apply elevation on hover state.
 */
export const VariantsGallery: Story = {
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

/**
 * Visualization of the 5 MD3 size recommendations.
 * Small is the default existing size with 16dp recommended padding.
 */
export const AllSizes: Story = {
  render: (args) => (
    <Box
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        alignItems: 'center',
      }}
    >
      <Button {...args} size="xs">
        Extra small
      </Button>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="xl">
        Extra large
      </Button>
    </Box>
  ),
};

/**
 * Functional states including Enabled, Disabled, and Hovered (simulated by props).
 */
export const States: Story = {
  render: () => (
    <Box style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Box style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="filled">Enabled</Button>
        <Button variant="filled" disabled>
          Disabled
        </Button>
      </Box>
      <Box style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="elevated">Elevated Enabled</Button>
        <Button variant="elevated" disabled>
          Elevated Disabled
        </Button>
      </Box>
    </Box>
  ),
};

export const SemanticColors: Story = {
  render: () => (
    <Box style={{ display: 'flex', gap: '16px' }}>
      <Button color="indigo">Primary</Button>
      <Button color="crimson" variant="tonal">
        Secondary
      </Button>
      <Button color="red" variant="outlined">
        Danger
      </Button>
    </Box>
  ),
};

export const AsLink: Story = {
  args: {
    children: 'Go to Documentation',
    href: '#',
    variant: 'outlined',
  },
};
