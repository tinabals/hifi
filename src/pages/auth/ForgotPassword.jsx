// import signup from '../../assets/img/signup.png';
import {useState} from 'react';

import {AiFillLock} from 'react-icons/ai';

const ForgotPasswordModal = () => {
  const [email, setEmail] = useState('');
  const handleSendEmail = () => {};
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Overlay */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      {/* ForgotPasswordModal Content */}
      <form onSubmit={handleSendEmail}>
        <div className='bg-white p-6 rounded-lg text-center relative flex flex-col items-center py-10 px-4'>
          <div className=' mx-auto'>
            <AiFillLock />
            <p>Forgot Password</p>
          </div>
          <p className='text-darkGray mt-4 w-3/5 text-center font-semibold'>
            Kindly insert your email below, a verification code will be sent to
            you, make sure you enter the correct email.
          </p>

          <input
            type='email'
            value={email}
            placeholder='Email: '
            className='px-4 py-2 border-2 border-veryLightBlue rounded-md bg-transparent placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:shadow-lg'
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type='button'
            className='mt-6 px-28 py-2 bg-blue-500 text-white  rounded-sm font-semibold shadow-sm hover:bg-blue-600'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordModal;
