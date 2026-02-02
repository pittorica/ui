/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Tabs } from './Tabs';

describe('Tabs', () => {
  it('renders correctly and shows initial content', () => {
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs.Root>
    );

    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /tab 1/i })).toHaveAttribute(
      'aria-selected',
      'true'
    );
  });

  it('switches content on click', () => {
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs.Root>
    );

    fireEvent.click(screen.getByRole('tab', { name: /tab 2/i }));

    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('navigates with keyboard arrows (Roving Tabindex)', () => {
    const onValueChange = vi.fn();
    render(
      <Tabs.Root defaultValue="tab1" onValueChange={onValueChange}>
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    );

    const tab1 = screen.getByRole('tab', { name: /tab 1/i });
    const tab2 = screen.getByRole('tab', { name: /tab 2/i });

    tab1.focus();
    fireEvent.keyDown(tab1, { key: 'ArrowRight' });

    expect(onValueChange).toHaveBeenCalledWith('tab2');
    expect(tab2).toHaveFocus();
    expect(tab2).toHaveAttribute('tabIndex', '0');
    expect(tab1).toHaveAttribute('tabIndex', '-1');
  });

  it('jumps to start/end with Home/End keys', () => {
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    );

    const tab1 = screen.getByRole('tab', { name: /tab 1/i });
    tab1.focus();

    fireEvent.keyDown(tab1, { key: 'End' });
    expect(screen.getByRole('tab', { name: /tab 3/i })).toHaveFocus();

    fireEvent.keyDown(screen.getByRole('tab', { name: /tab 3/i }), {
      key: 'Home',
    });
    expect(tab1).toHaveFocus();
  });
});
