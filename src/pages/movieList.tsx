/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/no-unstable-nested-components */
import {
  useReactTable,
  createColumnHelper,
  getPaginationRowModel,
  getCoreRowModel,
  ColumnDef,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TableCustom from '@/components/UI/Table';
import TitlePage from '@/components/UI/TitlePage';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getDataMovies } from '@/store/movieSlice';
import { IMovieBase } from '@/types/types-redux';

export default function MovieList() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [pageCol, setPageCol] = useState<number>(1);

  const { dataMovies, error, loading } = useAppSelector((state) => state.movie);
  const { results, page, total_pages } = dataMovies;

  const columnHelper = createColumnHelper<IMovieBase>();

  const defaultColumns: ColumnDef<IMovieBase, any>[] = [
    columnHelper.accessor('id', {
      header: 'ID',
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('title', {
      header: 'title',
      cell: (info) => info.renderValue(),
    }),
    // picture
    columnHelper.accessor('poster_path', {
      header: 'picture',
      cell: (info) => (
        <img
          src={`https://image.tmdb.org/t/p/original/${info.renderValue()}`}
          alt={info.renderValue()}
          className="h-10 w-10 rounded-full"
        />
      ),
    }),
    columnHelper.accessor('release_date', {
      header: 'Release Date',
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('popularity', {
      header: 'Popularity',
      cell: (info) => info.renderValue(),
    }),
    // add column detail navigate to movies/id
    columnHelper.accessor('id', {
      header: 'Detail',
      cell: (info) => (
        <button
          className="rounded-md bg-blue-500 p-2 text-white"
          type="button"
          onClick={() => {
            navigate(`/movies/${info.renderValue()}`);
          }}
        >
          Detail
        </button>
      ),
    }),
  ];

  const table = useReactTable({
    columns: defaultColumns,
    data: results,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    initialState: {
      pagination: {
        pageIndex: pageCol - 1,
        pageSize: total_pages,
      },
    },
    debugTable: true,
  });

  useEffect(() => {
    dispatch(getDataMovies(pageCol));
  }, [pageCol]);

  const handleSetPagination = (pageIdx: number) => setPageCol(pageIdx + 1);

  console.log(dataMovies);

  return (
    <div className="mb-10">
      <TitlePage title="Movie List" />
      <div className="max-w-4xl">
        <TableCustom table={table} pagination setPage={handleSetPagination} loading={loading} />
      </div>
    </div>
  );
}
