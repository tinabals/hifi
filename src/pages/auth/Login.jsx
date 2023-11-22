import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import {auth} from '../../../firebase.js';

import {useState} from 'react';

import {Link} from 'react-router-dom';
import {AiFillEye} from 'react-icons/ai';
import login from '../../assets/img/login.png';
import emailIcon from '../../assets/img/email.png';
import google from '../../assets/img/google-icon.png';
import apple from '../../assets/img/apple-solid.svg';
import arrowBack from '../../assets/img/arrow-back.png';
import ForgotPasswordModal from './ForgotPassword.jsx';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      if (!email || !password) {
        setError('Please fill in all details');
      }
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => console.log(userCredentials)
      );
    } catch (error) {
      console.log(JSON.stringify(error));
      if (error.code === 'auth/invalid-email') setError('Invalid Email');
      if (error.code === 'auth/invalid-login-credentials')
        setError('Invalid Credential Details');
    }
    setEmail('');
    setPassword('');
    setError('');
  };
  const changePassword = async () => {
    setForgotPassword(true);
    try {
      if (!email) {
        setError('No email');
      }
      await sendPasswordResetEmail(auth, email).then();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <section className='flex flex-col md:flex-row items-center bg-veryDarkBlue min-h-screen'>
        <div className='w-full md:w-1/2 flex flex-col items-center text-white px-4 py-8 md:px-10'>
          <div className='self-start md:self-center w-full'>
            <img
              src={arrowBack}
              alt='Go back'
              className='cursor-pointer mb-6'
            />
            <div className='text-center mb-4'>
              <h2 className='text-2xl font-bold mb-2'>Welcome Back</h2>
              <p>Log into your account</p>
            </div>
            <p className='text-center'>
              Don&apos;t have an account?
              <span className='font-bold cursor-pointer ml-2'>
                <Link to='/signup'>Sign up</Link>
              </span>
            </p>
          </div>
          <form className='w-full max-w-md mt-6' onSubmit={handleSignIn}>
            <div className='flex flex-col gap-4'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Email Address'
                  className='w-full px-4 py-2 border-2 border-grayBlue rounded-md bg-transparent placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:shadow-lg'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='relative'>
                <input
                  type='password'
                  placeholder='Password'
                  className='w-full px-4 py-2 border-2 border-grayBlue rounded-md bg-transparent placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:shadow-lg'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <AiFillEye className='absolute right-3 top-3 text-lg cursor-pointer' />
              </div>
              <p className='text-red-600'>{error}</p>
              <div className='text-right' onClick={changePassword}>
                <a href='#' className='text-sm cursor-pointer'>
                  Forgot Password?
                </a>
              </div>
              <label className='flex items-center space-x-2 cursor-pointer'>
                <input
                  type='checkbox'
                  className='rounded text-blue-600 focus:ring-blue-500'
                />
                <span>Always have me logged in</span>
              </label>
              <button className='mt-4 bg-white text-lightBlue w-full rounded-md py-2 font-bold hover:bg-slate-400 transition-colors duration-300 ease-in-out'>
                Log In
              </button>
              <div className='flex items-center my-6'>
                <hr className='flex-grow border-t border-gray-300' />
                <p className='px-4'>Or continue with</p>
                <hr className='flex-grow border-t border-gray-300' />
              </div>
              <div className='flex justify-center space-x-6 md:space-x-10'>
                <img
                  src={emailIcon}
                  alt='Email'
                  className='w-8 cursor-pointer'
                />
                <img src={google} alt='Google' className='w-8 cursor-pointer' />
                <img src={apple} alt='Apple' className='w-8 cursor-pointer' />
              </div>
            </div>
          </form>
        </div>
        <div className='hidden md:block w-full md:w-1/2 h-full'>
          <img src={login} alt='Login' className='object-cover w-full h-full' />
        </div>
      </section>
      {forgotPassword && <ForgotPasswordModal />}{' '}
    </>
  );
};

export default LogIn;
