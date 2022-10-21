import React from 'react';

import TitlePage from '@/components/UI/TitlePage';
import { useAppSelector } from '@/store/hooks';

export default function Dashboard() {
  const { dataGenres, dataMovies } = useAppSelector((state) => state.movie);
  return (
    <>
      <TitlePage title="Dashboard" />
      <div className="flex space-x-5">
        <div className="flex rounded-md bg-white p-4 shadow">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Total Movies</span>
            <span className="text-base font-normal">{dataMovies.total_results}</span>
          </div>
        </div>
        <div className="flex rounded-md bg-white p-4 shadow">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Total Genres</span>
            <span className="text-base font-normal">{dataGenres.length}</span>
          </div>
        </div>
      </div>
    </>
  );
}
