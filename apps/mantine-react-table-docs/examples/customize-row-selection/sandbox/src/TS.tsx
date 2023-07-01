import React, { useMemo } from 'react';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { data } from './makeData';

const Example = () => {
  const columns = useMemo(
    () =>
      [
        {
          accessorKey: 'firstName',
          header: 'First Name',
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
        },
        {
          accessorKey: 'age',
          header: 'Age',
        },
        {
          accessorKey: 'address',
          header: 'Address',
        },
        {
          accessorKey: 'city',
          header: 'City',
        },
        {
          accessorKey: 'state',
          header: 'State',
        },
      ] as MRT_ColumnDef<(typeof data)[0]>[],
    [],
  );

  return (
    <MantineReactTable
      columns={columns}
      data={data}
      enableSelectAll={false}
      enableRowSelection={(row) => row.original.age >= 21} //enable row selection conditionally per row
      mantineSelectCheckboxProps={{ color: 'red' }}
    />
  );
};

export default Example;
