/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { IInitialStateMovieSlice, IMovies, IGenres, IMovieDetail, IErrorMessages } from '@/types/types-redux';
import axiosCustom from '@/utils/axios-custom';

const key = '2fccde01a371b106b09a241d6d1d5b49';

const initialState: IInitialStateMovieSlice = {
  loading: false,
  error: null,
  dataGenres: {} as IGenres,
  dataMovies: {} as IMovies,
  dataMovie: {} as IMovieDetail,
};

export const getDataGenres = createAsyncThunk('movie/getDataGenres', async () => {
  const response = await axiosCustom('get', `/genre/movie/list?api_key=${key}`);
  return response.data;
});

export const getDataMovies = createAsyncThunk('movie/getDataMovies', async (page: number) => {
  const response = await axiosCustom('get', `/movie/upcoming?api_key=${key}&page=${page}`);
  return response.data;
});

export const getDetailMovie = createAsyncThunk('movie/getDetailMovie', async (id: number) => {
  const response = await axiosCustom('get', `/movie/${id}?api_key=${key}`);
  return response.data;
});

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDataGenres.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDataGenres.fulfilled.type, (state, action: PayloadAction<IGenres>) => {
        state.loading = false;
        state.dataGenres = action.payload;
      })
      .addCase(getDataGenres.rejected.type, (state, action: PayloadAction<IErrorMessages>) => {
        state.loading = false;
        state.error = action.payload.message;
      });
    builder
      .addCase(getDataMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDataMovies.fulfilled.type, (state, action: PayloadAction<IMovies>) => {
        state.loading = false;
        state.dataMovies = action.payload;
      })
      .addCase(getDataMovies.rejected.type, (state, action: PayloadAction<IErrorMessages>) => {
        state.loading = false;
        state.error = action.payload.message;
      });
    builder
      .addCase(getDetailMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDetailMovie.fulfilled.type, (state, action: PayloadAction<IMovieDetail>) => {
        state.loading = false;
        state.dataMovie = action.payload;
      })
      .addCase(getDetailMovie.rejected.type, (state, action: PayloadAction<IErrorMessages>) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default movieSlice.reducer;
