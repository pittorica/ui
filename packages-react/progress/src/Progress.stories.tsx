import { useEffect, useState } from 'react';

import { Box } from '@pittorica/box-react';
import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from './Progress.js';

const meta = {
  title: 'Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'indigo',
        'red',
        'teal',
        'amber',
        'slate',
        'orange',
        'purple',
        'pink',
        'gray',
      ],
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: 40,
    color: 'indigo',
  },
};

/**
 * A story that demonstrates the progress bar moving dynamically.
 */
export const AnimatedShowcase: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
      }, 1000);
      return () => clearInterval(timer);
    }, []);

    return (
      <Flex direction="column" gap="6" width="400px">
        <Box>
          <Text mb="2" weight="bold">
            Standard Progress ({progress}%)
          </Text>
          <Progress value={progress} color="indigo" />
        </Box>

        <Box>
          <Text mb="2" weight="bold">
            Success State
          </Text>
          <Progress value={progress} color="teal" />
        </Box>

        <Box>
          <Text mb="2" weight="bold">
            Warning State
          </Text>
          <Progress value={progress} color="orange" />
        </Box>

        <Box>
          <Text mb="2" weight="bold">
            Critical Task
          </Text>
          <Progress value={progress} color={progress > 80 ? 'red' : 'green'} />
        </Box>
      </Flex>
    );
  },
};
