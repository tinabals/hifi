import {Link} from 'react-router-dom';
import signup from '../../assets/img/signup.png';

const Modal = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Overlay */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      {/* Modal Content */}
      <div className='bg-white p-6 rounded-lg text-center relative flex flex-col items-center py-10 px-4'>
        <div className='w-44 mx-auto'>
          <img src={signup} alt='sign up' />
        </div>
        <p className='text-darkGray mt-4 w-3/5 text-center font-semibold'>
          You now have an account, please go ahead to Log into your account
        </p>
        <button
          type='button'
          className='mt-6 px-28 py-2 bg-blue-500 text-white  rounded-sm font-semibold shadow-sm hover:bg-blue-600'
        >
          <Link to='/login'>Log in</Link>
        </button>
      </div>
    </div>
  );
};

export default Modal;
