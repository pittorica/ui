import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Section } from './Section';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Layout/Section',
  component: Section,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['1', '2', '3'],
      description:
        'Vertical padding size. Maps to responsive padding values in CSS.',
    },
    as: {
      control: 'text',
      description:
        'The HTML tag to render the section as. Defaults to "section".',
    },
  },
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof meta>;

const ContentBlock = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      backgroundColor: 'var(--pittorica-slate-4)',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--pittorica-radius-1)',
    }}
  >
    <Text color="inherit">{children}</Text>
  </div>
);

export const Default: Story = {
  args: {
    children: <ContentBlock>Default Section (Size 3)</ContentBlock>,
    style: { backgroundColor: 'var(--pittorica-slate-2)' },
  },
};

export const SmallSize: Story = {
  args: {
    children: <ContentBlock>Small Section (Size 1)</ContentBlock>,
    size: '1',
    style: { backgroundColor: 'var(--pittorica-blue-1)' },
  },
};

export const MediumSize: Story = {
  args: {
    children: <ContentBlock>Medium Section (Size 2)</ContentBlock>,
    size: '2',
    style: { backgroundColor: 'var(--pittorica-teal-1)' },
  },
};

export const LargeSize: Story = {
  args: {
    children: <ContentBlock>Large Section (Size 3)</ContentBlock>,
    size: '3',
    style: { backgroundColor: 'var(--pittorica-amber-1)' },
  },
};

export const AsDiv: Story = {
  args: {
    children: <ContentBlock>Section rendered as a div</ContentBlock>,
    as: 'div',
    size: '2',
    style: { backgroundColor: 'var(--pittorica-crimson-1)' },
  },
};
