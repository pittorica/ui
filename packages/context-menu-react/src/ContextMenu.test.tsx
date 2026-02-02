/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ContextMenu, ContextMenuItem, ContextMenuSub } from './ContextMenu';

describe('ContextMenu Custom', () => {
  it('opens on right click and closes on Escape', async () => {
    render(
      <ContextMenu
        trigger={<button type="button">Target</button>}
        itemCount={1}
      >
        <ContextMenuItem index={0}>Action 1</ContextMenuItem>
      </ContextMenu>
    );

    const trigger = screen.getByText('Target');
    fireEvent.contextMenu(trigger);

    // Check opening
    expect(await screen.findByText('Action 1')).toBeInTheDocument();

    // Check closing via Escape
    // eslint-disable-next-line unicorn/prefer-global-this
    fireEvent.keyDown(window, { key: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByText('Action 1')).not.toBeInTheDocument();
    });
  });

  it('navigates through items and supports custom styles', async () => {
    render(
      <ContextMenu
        trigger={<button type="button">Target</button>}
        itemCount={2}
      >
        <ContextMenuItem index={0}>Item 1</ContextMenuItem>
        <ContextMenuItem
          index={1}
          style={{ color: 'rgb(255, 0, 0)' }}
          className="custom-item"
        >
          Delete
        </ContextMenuItem>
      </ContextMenu>
    );

    fireEvent.contextMenu(screen.getByText('Target'));

    const deleteItem = await screen.findByText('Delete');

    // Verify custom props (style and className) are correctly applied
    expect(deleteItem).toHaveStyle({ color: 'rgb(255, 0, 0)' });
    expect(deleteItem).toHaveClass('custom-item');

    // Verify navigation
    // eslint-disable-next-line unicorn/prefer-global-this
    fireEvent.keyDown(window, { key: 'ArrowDown' }); // Focus index 0
    // eslint-disable-next-line unicorn/prefer-global-this
    fireEvent.keyDown(window, { key: 'ArrowDown' }); // Focus index 1 (Delete)

    expect(deleteItem).toHaveAttribute('data-active', 'true');
  });

  it('handles item clicks and closes the menu', async () => {
    const handleClick = vi.fn();
    render(
      <ContextMenu
        trigger={<button type="button">Target</button>}
        itemCount={1}
      >
        <ContextMenuItem index={0} onClick={handleClick}>
          Click Me
        </ContextMenuItem>
      </ContextMenu>
    );

    fireEvent.contextMenu(screen.getByText('Target'));
    const item = await screen.findByText('Click Me');

    fireEvent.click(item);

    expect(handleClick).toHaveBeenCalledTimes(1);
    // Menu should be closed after click
    await waitFor(() => {
      expect(screen.queryByText('Click Me')).not.toBeInTheDocument();
    });
  });

  it('renders nested menus on sub-item hover', async () => {
    render(
      <ContextMenu
        trigger={<button type="button">Target</button>}
        itemCount={1}
      >
        <ContextMenuSub label="Submenu" index={0} itemCount={1}>
          <ContextMenuItem index={0}>Nested Action</ContextMenuItem>
        </ContextMenuSub>
      </ContextMenu>
    );

    fireEvent.contextMenu(screen.getByText('Target'));

    const subTrigger = await screen.findByText('Submenu');
    fireEvent.mouseEnter(subTrigger);

    expect(await screen.findByText('Nested Action')).toBeInTheDocument();
  });
});
