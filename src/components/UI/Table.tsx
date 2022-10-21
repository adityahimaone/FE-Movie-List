/* eslint-disable react/button-has-type */
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/solid';
import { flexRender, Table as TableReact } from '@tanstack/react-table';
import { Table } from 'flowbite-react';
import React, { useEffect } from 'react';

interface IProps {
  table: TableReact<any>;
  pagination?: boolean;
  loading?: boolean;
  setPage?: (pageIdx: number) => void;
}

export default function TableCustom({ table, pagination, setPage, loading }: IProps) {
  console.log(table.getState(), 'state');

  const { pagination: paginationTableReact } = table.getState();

  useEffect(() => {
    setPage!(paginationTableReact?.pageIndex);
  }, [paginationTableReact]);

  return (
    <>
      <Table>
        <Table.Head>
          {table
            .getHeaderGroups()
            .map((headerGroup: { headers: any[] }) =>
              headerGroup.headers.map(
                (header: {
                  id: React.Key | null | undefined;
                  isPlaceholder: any;
                  column: { columnDef: { header: any } };
                  getContext: () => any;
                }) => (
                  <Table.HeadCell key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </Table.HeadCell>
                ),
              ),
            )}
        </Table.Head>
        <Table.Body className="divide-y">
          {loading ? (
            <Table.Row>
              <Table.Cell colSpan={table.getHeaderGroups()[0].headers.length}>
                <div className="flex items-center justify-center">
                  <div className="h-8 w-8  animate-spin rounded-full border-b-2 border-gray-900" />
                </div>
              </Table.Cell>
            </Table.Row>
          ) : (
            table.getRowModel().rows.map((row: { id: React.Key | null | undefined; getVisibleCells: () => any[] }) => (
              <Table.Row key={row.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                {row
                  .getVisibleCells()
                  .map(
                    (cell: {
                      id: React.Key | null | undefined;
                      column: { columnDef: { cell: any } };
                      getContext: () => any;
                    }) => (
                      <Table.Cell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Table.Cell>
                    ),
                  )}
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
      <div className="my-5 flex justify-end">
        {pagination && (
          <div className="flex items-center gap-2">
            <button
              className="rounded bg-blue-500 p-1"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronDoubleLeftIcon className="h-5 w-5 text-white" />
            </button>
            <button
              className="rounded bg-blue-400 p-1"
              onClick={() => table.previousPage()}
              // disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeftIcon className="h-5 w-5 text-white" />
            </button>
            <button className="rounded bg-blue-400 p-1" onClick={() => table.nextPage()}>
              <ChevronRightIcon className="h-5 w-5 text-white" />
            </button>
            <button
              className="rounded bg-blue-500 p-1"
              onClick={() => table.setPageIndex(paginationTableReact.pageSize - 1)}
              //   disabled={!table.getCanNextPage()}
            >
              <ChevronDoubleRightIcon className="h-5 w-5 text-white" />
            </button>
            <span className="flex items-center gap-1">
              <div>Page</div>
              <strong>
                {paginationTableReact.pageIndex + 1} of {paginationTableReact.pageSize}
              </strong>
            </span>
            <span className="flex items-center gap-1">
              | Go to page:
              <input
                type="number"
                defaultValue={paginationTableReact.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className="w-16 rounded border p-1"
              />
            </span>
          </div>
        )}
      </div>
    </>
  );
}

TableCustom.defaultProps = {
  pagination: false,
  setPage: () => {},
  loading: false,
};
