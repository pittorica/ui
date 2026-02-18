import { Link } from 'react-router';

import { Box, Flex, Sheet, Text } from '@pittorica/react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Sidebar component using Sheet for navigation.
 * Closes automatically upon link interaction.
 */
export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <Sheet side="left" isOpen={isOpen} onClose={onClose} title="Navigation">
      <Flex direction="column" gap="1">
        <Box
          as={Link}
          to="/"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Home</Text>
        </Box>

        <Box
          as={Link}
          to="/components"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Components</Text>
        </Box>
        <Box
          as={Link}
          to="/components/alert-dialog"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Alert Dialog</Text>
        </Box>
        <Box
          as={Link}
          to="/components/aspect-ratio"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Aspect Ratio</Text>
        </Box>
        <Box
          as={Link}
          to="/components/avatar"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Avatar</Text>
        </Box>
        <Box
          as={Link}
          to="/components/badge"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Badge</Text>
        </Box>
        <Box
          as={Link}
          to="/components/blockquote"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Blockquote</Text>
        </Box>
        <Box
          as={Link}
          to="/components/box"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Box</Text>
        </Box>
        <Box
          as={Link}
          to="/components/button"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Button</Text>
        </Box>
        <Box
          as={Link}
          to="/components/callout"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Callout</Text>
        </Box>
        <Box
          as={Link}
          to="/components/card"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Card</Text>
        </Box>
        <Box
          as={Link}
          to="/components/carousel"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Carousel</Text>
        </Box>
        <Box
          as={Link}
          to="/components/checkbox"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Checkbox</Text>
        </Box>
        <Box
          as={Link}
          to="/components/checkbox-card"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Checkbox Card</Text>
        </Box>
        <Box
          as={Link}
          to="/components/checkbox-group"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Checkbox Group</Text>
        </Box>
        <Box
          as={Link}
          to="/components/chip"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Chip</Text>
        </Box>
        <Box
          as={Link}
          to="/components/code"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Code</Text>
        </Box>
        <Box
          as={Link}
          to="/components/container"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Container</Text>
        </Box>
        <Box
          as={Link}
          to="/components/context-menu"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Context Menu</Text>
        </Box>
        <Box
          as={Link}
          to="/components/data-list"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Data List</Text>
        </Box>
        <Box
          as={Link}
          to="/components/dialog"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Dialog</Text>
        </Box>
        <Box
          as={Link}
          to="/components/divider"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Divider</Text>
        </Box>
        <Box
          as={Link}
          to="/components/dropdown-menu"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Dropdown Menu</Text>
        </Box>
        <Box
          as={Link}
          to="/components/em"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Em</Text>
        </Box>
        <Box
          as={Link}
          to="/components/flex"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Flex</Text>
        </Box>
        <Box
          as={Link}
          to="/components/grid"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Grid</Text>
        </Box>
        <Box
          as={Link}
          to="/components/heading"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Heading</Text>
        </Box>
        <Box
          as={Link}
          to="/components/hover-card"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Hover Card</Text>
        </Box>
        <Box
          as={Link}
          to="/components/icon-button"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Icon Button</Text>
        </Box>
        <Box
          as={Link}
          to="/components/inset"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Inset</Text>
        </Box>
        <Box
          as={Link}
          to="/components/kbd"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Kbd</Text>
        </Box>
        <Box
          as={Link}
          to="/components/link"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Link</Text>
        </Box>
        <Box
          as={Link}
          to="/components/popover"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Popover</Text>
        </Box>
        <Box
          as={Link}
          to="/components/progress"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Progress</Text>
        </Box>
        <Box
          as={Link}
          to="/components/quote"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Quote</Text>
        </Box>
        <Box
          as={Link}
          to="/components/radio"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Radio</Text>
        </Box>
        <Box
          as={Link}
          to="/components/radio-card"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Radio Card</Text>
        </Box>
        <Box
          as={Link}
          to="/components/radio-group"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Radio Group</Text>
        </Box>
        <Box
          as={Link}
          to="/components/section"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Section</Text>
        </Box>
        <Box
          as={Link}
          to="/components/segmented-control"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Segmented Control</Text>
        </Box>
        <Box
          as={Link}
          to="/components/select"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Select</Text>
        </Box>
        <Box
          as={Link}
          to="/components/sheet"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Sheet</Text>
        </Box>
        <Box
          as={Link}
          to="/components/skeleton"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Skeleton</Text>
        </Box>
        <Box
          as={Link}
          to="/components/slider"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Slider</Text>
        </Box>
        <Box
          as={Link}
          to="/components/stack"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Stack</Text>
        </Box>
        <Box
          as={Link}
          to="/components/strong"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Strong</Text>
        </Box>
        <Box
          as={Link}
          to="/components/switch"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Switch</Text>
        </Box>
        <Box
          as={Link}
          to="/components/table"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Table</Text>
        </Box>
        <Box
          as={Link}
          to="/components/tabs"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Tabs</Text>
        </Box>
        <Box
          as={Link}
          to="/components/text"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Text</Text>
        </Box>
        <Box
          as={Link}
          to="/components/text-area"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Text Area</Text>
        </Box>
        <Box
          as={Link}
          to="/components/text-field"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Text Field</Text>
        </Box>
        <Box
          as={Link}
          to="/components/theme"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Theme</Text>
        </Box>
        <Box
          as={Link}
          to="/components/toast"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Toast</Text>
        </Box>
        <Box
          as={Link}
          to="/components/tooltip"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Tooltip</Text>
        </Box>
      </Flex>
    </Sheet>
  );
};
