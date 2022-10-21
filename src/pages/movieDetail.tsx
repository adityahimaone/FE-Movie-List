/* eslint-disable @typescript-eslint/naming-convention */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TitlePage from '@/components/UI/TitlePage';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getDetailMovie } from '@/store/movieSlice';
import { IMovieDetail } from '@/types/types-redux';

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const { dataMovie, error, loading } = useAppSelector((state) => state.movie);

  const { original_title, overview, release_date, backdrop_path, poster_path, genres, vote_average, vote_count } =
    dataMovie;

  useEffect(() => {
    dispatch(getDetailMovie(id as string));
  }, []);
  return (
    <div className="mb-10">
      <div className="relative z-[1] -m-4">
        <img className="h-72 w-full" src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" />
      </div>
      <div className="relative z-10 -mt-20 flex w-full flex-col space-x-2 rounded-md bg-white p-4 shadow-md md:flex-row">
        <div>
          <img
            className="h-auto w-full rounded-md md:w-[400px]"
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-4xl font-semibold">{original_title}</h2>
          <div className="my-4 space-x-4">
            <span className="rounded-full bg-slate-100 p-2">{release_date}</span>
            {genres.map((genre) => (
              <span className="rounded-full bg-slate-100 p-2" key={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>
          <p>{overview}</p>
          <div className="mt-4 grid max-w-sm grid-cols-2">
            <span className="font-semibold">Rating: </span>
            <span>{vote_average}</span>
            <span className="font-semibold">Votes: </span>
            <span>{vote_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
