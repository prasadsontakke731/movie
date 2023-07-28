import { Route, Routes } from 'react-router-dom';
import MovieList from '../pages/MovieList';
import MovieDetails from '../pages/MovieDetails';
import Search from '../pages/Search';
import PageNotFound from '../pages/PageNotFound';

const AllRoutes = () => {
  return (
    <div className='pages'>
      <Routes>
        <Route
          path=''
          element={<MovieList apiPath='movie/now_playing' title='Home' />}
        />
        <Route path='movie/:id' element={<MovieDetails />} />
        <Route
          path='movies/popular'
          element={<MovieList apiPath='movie/popular' title='Popular' />}
        />
        <Route
          path='movies/top'
          element={<MovieList apiPath='movie/top_rated' title='Top Rated' />}
        />
        <Route
          path='movies/upcoming'
          element={<MovieList apiPath='movie/upcoming' title='Upcoming' />}
        />
        <Route path='search' element={<Search apiPath='search/movie' />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
export default AllRoutes;
