import { Box } from '@pittorica/box-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider.js';

const meta: Meta<typeof Divider> = {
  title: 'Data/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'double', 'dots', 'wave', 'scallop'],
    },
  },
};

export default meta;

export const AllVariants: StoryObj<typeof Divider> = {
  render: () => (
    <Box
      style={{
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Divider variant="solid" />
      <Divider variant="double" />
      <Divider variant="dots" />
      <Divider variant="wave" />
      <Divider variant="scallop" />
      <Divider>OR CONTINUE WITH</Divider>
    </Box>
  ),
};
