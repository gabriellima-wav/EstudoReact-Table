import React, { useMemo } from 'react';
import { useTable } from 'react-table';

import MOCK_DATA from '../data/MOCK_DATA.json'; 
import { COLUMNS, GROUPED_COLUMNS } from '../data/columns';

import './table.css';

export const BasicTable = () => {
  // Memoize columns and data to prevent unnecessary re-renders
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  // Use the useTable hook to create the table instance
  const tableInstance = useTable({
    columns,
    data,
  });

  // Destructure the table instance to get necessary properties and methods
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} key={column.id}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} key={cell.column.id}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
      <tfooter>
        {
            footerGroups.map(footerGroups => (
            <tr{... footerGroups.getFooterGroupProps()}>
            {
                                footerGroups.headers.map(column => (
                    <td{...column.getFooterProps}>
                    {
                        column.render('Footer')
                    }

                    </td>
                 ))
            }
            </tr>
            ))
        }
      </tfooter>
    </table>
  );
};
        