export interface IInitialState {
  loading: boolean;
  error: null | string;
}

export interface IErrorMessages {
  message: string;
  code: number;
}

export interface IInitialStateMovieSlice extends IInitialState {
  dataGenres: IGenres;
  dataMovies: IMovies;
  dataMovie: IMovieDetail;
}

export interface IGenres {
  genres: [
    {
      id: number;
      name: string;
    },
  ];
}

interface IMovieBase {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieDetail extends IMovieBase {
  homepage: string;
  imdb_id: string;
  belongs_to_collection: null;
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    },
  ];
  revenue: number;
  tagline: string;
  status: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    },
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    },
  ];
}

export interface IMovies {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: [IMovieBase];
}
