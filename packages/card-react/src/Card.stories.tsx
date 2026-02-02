import { AspectRatio } from '@pittorica/aspect-ratio-react';
import { Avatar } from '@pittorica/avatar-react';
import { Box } from '@pittorica/box-react';
import { Flex } from '@pittorica/flex-react';
import { Heading } from '@pittorica/heading-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card.js';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['surface', 'outlined', 'ghost'] },
    translucent: { control: 'boolean' },
  },
};

export default meta;

export const GlassCard: StoryObj<typeof Card> = {
  render: (args) => (
    <Flex
      p="9"
      align="center"
      justify="center"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '8px',
      }}
    >
      <Card {...args} translucent style={{ width: '350px', padding: '20px' }}>
        <Flex gap="3" align="center" mb="3">
          <Avatar fallback="JD" />
          <Box>
            <Heading size="3">Jane Doe</Heading>
            <Text size="1" color="slate">
              Software Engineer
            </Text>
          </Box>
        </Flex>

        <Text size="2">
          Building delightful user interfaces with Pittorica Design System.
        </Text>
      </Card>
    </Flex>
  ),
};

export const WithImage: StoryObj<typeof Card> = {
  render: (args) => (
    <Card {...args} style={{ width: '300px' }}>
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400"
          alt="Abstract Art"
        />
      </AspectRatio>
      <Box p="4">
        <Heading size="2" mb="2">
          Abstract Composition
        </Heading>
        <Text size="2" color="slate">
          A study of color and form in digital environments.
        </Text>
      </Box>
    </Card>
  ),
};
