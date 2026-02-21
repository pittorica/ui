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
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: 40,
    color: 'indigo',
  },
};

export const FunkyWave: Story = {
  args: {
    value: 65,
    variant: 'wave',
    color: 'teal',
    style: { height: '20px' },
  },
};

/**
 * A story that demonstrates the progress bar moving dynamically.
 */
export const AnimatedShowcase = {
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
            System Upload ({progress}%)
          </Text>
          <Progress value={progress} color="indigo" />
        </Box>

        <Box>
          <Text mb="2" weight="bold">
            Funky Wave Download
          </Text>
          <Progress
            value={progress}
            variant="wave"
            color="orange"
            style={{ height: '24px' }}
          />
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
