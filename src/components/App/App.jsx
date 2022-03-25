import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { Spinner } from 'react-awesome-spinners';

const HomePage = lazy(() =>
  import('../../pages/HomePage/HomePage').then(module => ({
    default: module.HomePage,
  }))
);
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage').then(module => ({
    default: module.MovieDetailsPage,
  }))
);
const MoviesPage = lazy(() =>
  import('../../pages/MoviesPage/MoviesPage').then(module => ({
    default: module.MoviesPage,
  }))
);

export default function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
