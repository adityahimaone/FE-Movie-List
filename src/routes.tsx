import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WithSidebar from './components/layouts/WithSidebar';
import Dashboard from './pages/dashboard';
import GenreList from './pages/genreList';
import MovieList from './pages/movieList';

function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WithSidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="movies" element={<MovieList />} />
          <Route path="genres" element={<GenreList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPage;
