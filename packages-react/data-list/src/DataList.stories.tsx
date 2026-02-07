import type { Meta, StoryObj } from '@storybook/react';

import { DataList } from './DataList';

const meta: Meta<typeof DataList> = {
  title: 'Data/DataList',
  component: DataList,
  tags: ['autodocs'],
};

export default meta;

export const Basic: StoryObj<typeof DataList> = {
  render: (args) => (
    <DataList {...args}>
      <DataList.Item>
        <DataList.Label>Customer ID</DataList.Label>
        <DataList.Value>#12345</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label>Status</DataList.Label>
        <DataList.Value>
          <span style={{ color: 'var(--pittorica-teal-9)' }}>●</span> Active
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label>Email</DataList.Label>
        <DataList.Value>dev@pittorica.it</DataList.Value>
      </DataList.Item>
    </DataList>
  ),
};
