import { Chip } from '@pittorica/chip-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Table } from './Table';

const meta: Meta<typeof Table.Root> = {
  title: 'Components/Table',
  tags: ['autodocs'],
  component: Table.Root,
};

export default meta;

export const Basic: StoryObj = {
  render: () => (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Full name</Table.ColumnHeader>
          <Table.ColumnHeader>Email</Table.ColumnHeader>
          <Table.ColumnHeader>Group</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Text weight="bold">Danilo C.</Text>
          </Table.Cell>
          <Table.Cell>danilo@example.com</Table.Cell>
          <Table.Cell>
            <Chip color="indigo">Developer</Chip>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text weight="bold">Zahra S.</Text>
          </Table.Cell>
          <Table.Cell>zahra@example.com</Table.Cell>
          <Table.Cell>
            <Chip color="teal">Admin</Chip>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
};
