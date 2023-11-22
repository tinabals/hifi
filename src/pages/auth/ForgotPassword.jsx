// import signup from '../../assets/img/signup.png';
import {sendPasswordResetEmail} from 'firebase/auth';
import {auth} from '../../../firebase.js';
import {useState} from 'react';

import {AiFillLock} from 'react-icons/ai';

const ForgotPasswordModal = () => {
  const [email, setEmail] = useState('');

  const handleSendEmail = async (e) => {
    e.preventDefault();
    try {
      //   if (!email) {
      //     return;
      //   }
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent!');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Overlay */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      {/* ForgotPasswordModal Content */}
      <form onSubmit={handleSendEmail}>
        <div className='bg-white p-6 rounded-lg text-center relative flex flex-col items-center py-10 px-4 max-w-lg'>
          <div className=' mx-auto'>
            <div className='flex items-center justify-center bg-veryLightBlue text-white  rounded-full px-2 py-2'>
              <AiFillLock />
            </div>
            <p className='text-veryLightBlue font-semibold text-2xl'>
              Forgot Password
            </p>
          </div>
          <p className='text-darkGray mt-2 text-center font-semibold'>
            Kindly insert your email below, a verification code will be sent to
            you, make sure you enter the correct email.
          </p>

          <input
            type='email'
            value={email}
            placeholder='Email: '
            className='my-20 w-4/5 px-4 py-2 border-2 border-veryLightBlue rounded-md bg-transparent placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:shadow-lg'
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type='submit'
            className='w-4/5 mt-6 px-28 py-2 bg-blue-500 text-white  rounded-sm font-semibold shadow-sm hover:bg-blue-600'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordModal;
