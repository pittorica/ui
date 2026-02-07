import { Box } from '@pittorica/box-react';
import { Button } from '@pittorica/button-react';
import { Flex } from '@pittorica/flex-react';
import type { Meta, StoryObj } from '@storybook/react';

import { toast, ToastProvider } from './Toast.js';

const meta: Meta = {
  title: 'Feedback/Toast',
  decorators: [
    (Story) => (
      <Box p="4">
        <ToastProvider />
        <Story />
      </Box>
    ),
  ],
};

export default meta;

export const Interactive: StoryObj = {
  render: () => (
    <Flex gap="3">
      <Button
        onClick={() =>
          toast({
            title: 'Update Successful',
            description: 'Your profile has been saved to our servers.',
          })
        }
      >
        Show Default Toast
      </Button>

      <Button
        variant="tonal"
        color="crimson"
        onClick={() =>
          toast({
            title: 'Connection Error',
            description: 'Could not reach the server. Please try again.',
            duration: 5000,
          })
        }
      >
        Show Error Toast
      </Button>
    </Flex>
  ),
};
