import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='p-4 bg-red-400 text-white shadow md:flex md:items-center md:justify-between md:p-6 '>
      <span className='text-sm text-white sm:text-center'>
        © 2030{' '}
        <Link to='/' className='hover:underline'>
          Cinemate
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};
export default Footer;
