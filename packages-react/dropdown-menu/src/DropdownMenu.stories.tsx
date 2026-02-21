import React from 'react';

import {
  IconChevronDown,
  IconLogout,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';

import { Button } from '@pittorica/button-react';
import { Flex } from '@pittorica/flex-react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { DropdownMenu, DropdownMenuItem } from './DropdownMenu.js';

const meta = {
  title: 'Navigation/DropdownMenu',
  args: { onClick: fn() },
  component: DropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Flex align="center" justify="center" style={{ height: '200px' }}>
      <DropdownMenu
        itemCount={3}
        renderTrigger={({ ref, onClick }) => (
          /* Wrapping in a span to safely attach the ref for positioning */
          <span ref={ref as React.RefObject<HTMLSpanElement>} onClick={onClick}>
            <Button variant="filled">
              Account Options
              <IconChevronDown size={16} style={{ marginLeft: '8px' }} />
            </Button>
          </span>
        )}
      >
        <DropdownMenuItem index={0} icon={<IconUser size={18} />}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem index={1} icon={<IconSettings size={18} />}>
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem
          index={2}
          icon={<IconLogout size={18} />}
          style={{ color: 'var(--pittorica-red-9)' }}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenu>
    </Flex>
  ),
};

export const Subtitles: Story = {
  render: () => (
    <Flex align="center" justify="center" style={{ height: '200px' }}>
      <DropdownMenu
        itemCount={2}
        renderTrigger={({ ref, onClick }) => (
          <span ref={ref as React.RefObject<HTMLSpanElement>} onClick={onClick}>
            <Button variant="outlined">Project Actions</Button>
          </span>
        )}
      >
        <DropdownMenuItem index={0}>
          <Flex direction="column" gap="0">
            <span style={{ fontWeight: 600 }}>Publish Project</span>
            <span style={{ fontSize: '12px', opacity: 0.6 }}>
              Make it visible to everyone
            </span>
          </Flex>
        </DropdownMenuItem>
        <DropdownMenuItem index={1}>
          <Flex direction="column" gap="0">
            <span style={{ fontWeight: 600 }}>Archive</span>
            <span style={{ fontSize: '12px', opacity: 0.6 }}>
              Move to cold storage
            </span>
          </Flex>
        </DropdownMenuItem>
      </DropdownMenu>
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
