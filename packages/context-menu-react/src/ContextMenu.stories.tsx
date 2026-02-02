import { Box } from '@pittorica/box-react';
import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { ContextMenu, ContextMenuItem, ContextMenuSub } from './ContextMenu';

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
};

export default meta;

export const Basic: StoryObj<typeof ContextMenu> = {
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

export const Nested: StoryObj<typeof ContextMenu> = {
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
