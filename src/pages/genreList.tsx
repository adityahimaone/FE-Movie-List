import { useReactTable, createColumnHelper, getCoreRowModel, ColumnDef } from '@tanstack/react-table';
import { useEffect } from 'react';

import TableCustom from '@/components/UI/Table';
import TitlePage from '@/components/UI/TitlePage';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getDataGenres } from '@/store/movieSlice';
import { IGenre } from '@/types/types-redux';

export default function GenreList() {
  const dispatch = useAppDispatch();

  const { dataGenres, error, loading } = useAppSelector((state) => state.movie);

  const columnHelper = createColumnHelper<IGenre>();

  const defaultColumns: ColumnDef<IGenre, any>[] = [
    columnHelper.accessor('id', {
      header: 'ID',
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('name', {
      header: 'Name',
      cell: (info) => info.renderValue(),
    }),
  ];

  const table = useReactTable({
    columns: defaultColumns,
    data: dataGenres,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    dispatch(getDataGenres());
  }, []);
  return (
    <div className="mb-10">
      <TitlePage title="Genre List" />
      <div className="max-w-2xl">
        <TableCustom table={table} loading={loading} />
      </div>
    </div>
  );
}
