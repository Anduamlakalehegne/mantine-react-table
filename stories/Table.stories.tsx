import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ReactTableMui, ReactTableMuiProps } from '../src';
import faker from '@faker-js/faker';

const meta: Meta = {
  title: 'ReactTableMui',
  component: ReactTableMui,
};

export default meta;

const Template: Story<ReactTableMuiProps> = (args) => (
  <ReactTableMui
    renderDetailPanel={(rowData) => <div>Hello There, General Kenobil</div>}
    {...args}
  />
);

export const Default = Template.bind({});

Default.args = {
  columns: [
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Address',
      accessor: 'address',
    },
  ],
  data: [...Array(21)].map((_) => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number(80),
    address: faker.address.streetAddress(),
  })),
};
