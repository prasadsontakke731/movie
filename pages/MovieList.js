import { useFetch } from '../hooks/useFetch';

import Card from '../components/Card';

const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  return (
    <main>
      <section className='max-w-7xl flex mx-auto py-7'>
        <div className='flex justify-start flex-wrap other:justify-evenly'>
          {movies?.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
export default MovieList;
