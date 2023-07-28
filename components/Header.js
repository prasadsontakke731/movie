import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [hidden, setHidden] = useState(true);

  const navigate = useNavigate();

  const activeClass =
    'text-base block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white';
  const inActiveClass =
    'text-base block py-2 pr-4 pl-3 text-red-700 rounded   md:hover:text-red-700 md:p-0 md:hover:text-black md:hover:bg-transparent ';

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  };

  return (
    <header>
      <nav className='bg-red-500 border-b-2 text-white border-gray-200 px-2 sm:px-4 py-2 '>
        <div className='flex flex-wrap justify-between items-center mx-auto'>
          <Link to='/' className='flex items-center'>
            <span className='self-center mr-2  text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Movie-App
            </span>
          </Link>

          <div id='mobile-nav' className='flex md:order-2'>
            <button
              onClick={() => setHidden(!hidden)}
              type='button'
              data-collapse-toggle='navbar-search'
              aria-controls='navbar-search'
              aria-expanded='false'
              className='md:hidden text-black bg-red-500   hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 mr-1'
            >
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Search</span>
            </button>
            <div className='hidden relative md:block'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-white'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='sr-only'>Search icon</span>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  id='search-navbar'
                  name='search'
                  className='block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-red-500 focus:border-red-500 '
                  placeholder='Search...'
                  autoComplete='off'
                />
              </form>
            </div>
            <button
              onClick={() => setHidden(!hidden)}
              data-collapse-toggle='navbar-search'
              type='button'
              className='inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
              aria-controls='navbar-search'
              aria-expanded='false'
            >
              <span className='sr-only'>Open menu</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`${
              hidden ? 'hidden' : ''
            } justify-between items-center w-full md:flex md:w-auto md:order-1`}
            id='navbar-search'
          >
            <div className='relative mt-3 md:hidden'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-white'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  id='search-navbar'
                  name='search'
                  className='block p-2 pl-10 w-full text-white bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-red-500 focus:border-red-500 '
                  placeholder='Search...'
                  autoComplete='off'
                />
              </form>
            </div>
            <ul className='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/movies/popular'
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/movies/top'
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Top Rated
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/movies/upcoming'
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
