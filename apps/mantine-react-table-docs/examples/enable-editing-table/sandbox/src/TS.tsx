import React, { useMemo, useState } from 'react';
import {
  MantineReactTable,
  MRT_Cell,
  MRT_ColumnDef,
} from 'mantine-react-table';
import { data, Person } from './makeData';

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
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
    ],
    [],
  );

  const [tableData, setTableData] = useState<Person[]>(() => data);

  const handleSaveCell = (cell: MRT_Cell<Person>, value: any) => {
    //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here
    tableData[cell.row.index][cell.column.id as keyof Person] = value;
    //send/receive api updates here
    setTableData([...tableData]); //re-render with new data
  };

  return (
    <MantineReactTable
      columns={columns}
      data={tableData}
      editingMode="table"
      enableEditing
      mantineEditTextInputProps={({ cell }) => ({
        //onBlur is more efficient, but could use onChange instead
        onBlur: (event) => {
          handleSaveCell(cell, event.target.value);
        },
        variant: 'unstyled', //default for editingMode="table"
      })}
    />
  );
};

export default Example;
