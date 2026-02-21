import React from 'react';

import { Box } from '@pittorica/box-react';
import { Flex } from '@pittorica/flex-react';
import { Heading } from '@pittorica/heading-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { HoverCard } from './HoverCard.js';

const meta = {
  title: 'Composite/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UserProfile: Story = {
  render: () => (
    <Box p="8">
      <Text>
        Check out the profile of{' '}
        <HoverCard
          renderTrigger={({ ref }) => (
            <span
              ref={ref as React.RefObject<HTMLSpanElement>}
              style={{
                fontWeight: 'bold',
                textDecoration: 'underline',
                cursor: 'help',
              }}
            >
              @dcdavidev
            </span>
          )}
        >
          <Flex direction="column" gap="3">
            <Flex gap="3" align="center">
              <Box
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--pittorica-indigo-9)',
                }}
              />
              <Flex direction="column" gap="0">
                <Heading size="3">Davide C.</Heading>
                <Text color="slate">@dcdavidev</Text>
              </Flex>
            </Flex>
            <Text>
              Senior Software Architect and Glassmorphism enthusiast. Building
              the Pittorica UI System.
            </Text>
            <Flex gap="4">
              <Text>
                <strong>128</strong> Following
              </Text>
              <Text>
                <strong>2.4k</strong> Followers
              </Text>
            </Flex>
          </Flex>
        </HoverCard>
      </Text>
    </Box>
  ),
};
