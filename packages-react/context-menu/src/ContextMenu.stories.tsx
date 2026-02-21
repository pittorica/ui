import { Box } from '@pittorica/box-react';
import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { ContextMenu, ContextMenuItem, ContextMenuSub } from './ContextMenu';

const meta = {
  title: 'Navigation/ContextMenu',
  args: { onClick: fn() },
  component: ContextMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Flex align="center" justify="center" style={{ height: '300px' }}>
      <ContextMenu
        itemCount={3}
        trigger={
          <Box
            style={{
              padding: '40px',
              border: '2px dashed var(--pittorica-slate-5)',
              borderRadius: 'var(--pittorica-radius-3)',
              cursor: 'context-menu',
            }}
          >
            <Text color="slate">Right click here</Text>
          </Box>
        }
      >
        <ContextMenuItem index={0} onClick={() => console.log('Copy')}>
          Copy
        </ContextMenuItem>
        <ContextMenuItem index={1} onClick={() => console.log('Paste')}>
          Paste
        </ContextMenuItem>
        <ContextMenuItem
          index={2}
          onClick={() => console.log('Delete')}
          style={{ color: 'var(--pittorica-red-9)' }}
        >
          Delete
        </ContextMenuItem>
      </ContextMenu>
    </Flex>
  ),
};

export const Nested: Story = {
  render: () => (
    <Flex align="center" justify="center" style={{ height: '400px' }}>
      <ContextMenu
        itemCount={3}
        trigger={
          <Box
            style={{
              padding: '60px',
              background: 'var(--pittorica-slate-2)',
              borderRadius: 'var(--pittorica-radius-4)',
              cursor: 'context-menu',
            }}
          >
            <Text weight="bold">Complex Menu (Right Click)</Text>
          </Box>
        }
      >
        <ContextMenuItem index={0}>New Tab</ContextMenuItem>
        <ContextMenuSub index={1} label="Share..." itemCount={3}>
          <ContextMenuItem index={0}>Email</ContextMenuItem>
          <ContextMenuItem index={1}>Message</ContextMenuItem>
          <ContextMenuSub index={2} label="Social Media" itemCount={2}>
            <ContextMenuItem index={0}>Twitter</ContextMenuItem>
            <ContextMenuItem index={1}>LinkedIn</ContextMenuItem>
          </ContextMenuSub>
        </ContextMenuSub>
        <ContextMenuItem index={2}>Properties</ContextMenuItem>
      </ContextMenu>
    </Flex>
  ),
};

export const Interactive: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const element =
      canvas.queryByRole('button') ||
      canvas.queryByRole('checkbox') ||
      canvas.queryByRole('radio');
    if (element) {
      await userEvent.click(element);
      if (args.onClick) {
        await expect(args.onClick).toHaveBeenCalled();
      }
    }
  },
};
