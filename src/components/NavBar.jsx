import {Link} from 'react-router-dom';
import Logo from '../assets/img/Logo.png';
const NavBar = () => {
  return (
    <nav className='bg-lightGray p-6 items-center container mx-auto px-auto mb-4'>
      <div className='flex justify-between items-center'>
        <div>
          <img src={Logo} alt='hifi-logo' />
        </div>
        <ul className='hidden space-x-8 md:flex'>
          <li className='active:bg-violet-700'>
            <Link to='/'>Home </Link>
          </li>
          <li>
            <Link to='about'>About Us </Link>
          </li>
          <li>
            <Link to='/'>Services </Link>
          </li>
          <li>
            <Link to='/'>Contact Us </Link>
          </li>
        </ul>
        <div className='flex space-x-3'>
          <button className='border border-lightBlue px-2 p-1 rounded-md'>
            <Link to='/Login'> Log In </Link>
          </button>
          <button className='border border-lightBlue text-white bg-lightBlue px-2 p-1 rounded-md'>
            <Link to='/SignUp'> Sign Up </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
