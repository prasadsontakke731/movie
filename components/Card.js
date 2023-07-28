import { Link } from 'react-router-dom';
import Backup from '../assets/back.png';

const Card = ({ movie }) => {
    const { id, original_title, overview, poster_path, popularity } = movie;
    const image = poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : Backup;
    console.log(movie);

    return (
        <div className='card max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  m-3'>
            <Link to={`/movie/${id}`}>
                <img className='image rounded-t-sm' src={image} alt='' />
            </Link>
            <div className='p-5 '>
                <Link to={`/movie/${id}`}>
                    <div className='flex justify-between'>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            {original_title}
                        </h5>
                        <span className='text-lg text-red-700'>{popularity}</span>
                    </div>

                </Link>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    {overview}
                </p>
            </div>
        </div>
    );
};
export default Card;
