import { useState } from 'react';

import { Link as RouterLink, Outlet, useLocation } from 'react-router';

import { IconComponents } from '@tabler/icons-react';

import { Box, Flex, IconButton, Link, Sheet, Text } from '@pittorica/react';

const components = [
  'alert-dialog',
  'aspect-ratio',
  'avatar',
  'badge',
  'blockquote',
  'box',
  'button',
  'callout',
  'card',
  'carousel',
  'checkbox',
  'checkbox-card',
  'checkbox-group',
  'chip',
  'code',
  'container',
  'context-menu',
  'data-list',
  'dialog',
  'divider',
  'dropdown-menu',
  'em',
  'flex',
  'grid',
  'heading',
  'hover-card',
  'icon-button',
  'inset',
  'kbd',
  'link',
  'popover',
  'progress',
  'quote',
  'radio',
  'radio-card',
  'radio-group',
  'section',
  'segmented-control',
  'select',
  'sheet',
  'skeleton',
  'slider',
  'stack',
  'strong',
  'switch',
  'table',
  'tabs',
  'text',
  'text-area',
  'text-field',
  'theme',
  'toast',
  'tooltip',
];

const formatName = (name: string) =>
  name
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');

export default function Route() {
  const { pathname } = useLocation();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Box
      style={{
        overflow: 'hidden',
        backgroundColor: 'var(--pittorica-slate-1)',
        position: 'relative',
      }}
    >
      <Box as="main" style={{ overflowY: 'auto' }}>
        <Box>
          <Outlet />
        </Box>
      </Box>

      {/* Floating Action Button (FAB) */}
      <IconButton
        onClick={() => setIsSheetOpen(true)}
        style={{
          position: 'fixed',
          bottom: 'var(--pittorica-space-6)',
          right: 'var(--pittorica-space-6)',
          width: '56px',
          height: '56px',
          borderRadius: 'var(--pittorica-radius-4)',
          backgroundColor: 'var(--pittorica-indigo-9)',
          color: 'var(--pittorica-white)',
          boxShadow: 'var(--pittorica-shadow-4)',
          zIndex: 100,
        }}
        aria-label="Open components menu"
      >
        <IconComponents size={24} />
      </IconButton>

      {/* Navigation Sheet (Bottom - MaxWidth XS) */}
      <Sheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        side="bottom"
        title="Components"
        style={{
          margin: '0 auto',
          borderTopLeftRadius: 'var(--pittorica-radius-4)',
          borderTopRightRadius: 'var(--pittorica-radius-4)',
        }}
      >
        <Box
          style={{
            maxHeight: '60vh',
            overflowY: 'auto',
            paddingBottom: 'var(--pittorica-space-4)',
          }}
        >
          <Flex direction="column" gap="1" p="2">
            {components.map((component) => {
              const isActive = pathname.includes(component);
              return (
                <Link
                  key={component}
                  as={RouterLink}
                  to={`/components/${component}`}
                  underline="none"
                  onClick={() => setIsSheetOpen(false)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: 'var(--pittorica-radius-3)',
                    backgroundColor: isActive
                      ? 'var(--pittorica-indigo-3)'
                      : 'transparent',
                    color: isActive
                      ? 'var(--pittorica-indigo-11)'
                      : 'var(--pittorica-slate-11)',
                    fontSize: 'var(--pittorica-font-size-2)',
                    fontWeight: isActive ? '600' : '400',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Flex align="center" justify="between">
                    <Text color="inherit">{formatName(component)}</Text>
                    {isActive && (
                      <Box
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'currentColor',
                        }}
                      />
                    )}
                  </Flex>
                </Link>
              );
            })}
          </Flex>
        </Box>
      </Sheet>
    </Box>
  );
}
