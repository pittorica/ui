import { Box } from '@pittorica/box-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel.Root> = {
  title: 'Components/Carousel',
  component: Carousel.Root,
};

export default meta;

export const MD3Style: StoryObj = {
  render: () => (
    <Carousel.Root>
      {[1, 2, 3, 4, 5].map((i) => (
        <Carousel.Item key={i}>
          <Box
            style={{
              height: '100%',
              background: `var(--pittorica-indigo-${i + 4})`,
              display: 'flex',
              alignItems: 'flex-end',
              padding: '24px',
            }}
          >
            <Text color="white" weight="bold" size="5">
              Card {i}
            </Text>
          </Box>
        </Carousel.Item>
      ))}
    </Carousel.Root>
  ),
};
