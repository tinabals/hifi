import {useState} from 'react';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../../../firebase';

import {Link} from 'react-router-dom';
import {AiFillEye} from 'react-icons/ai';
import login from '../../assets/img/login.png';
import emailIcon from '../../assets/img/email.png';
import google from '../../assets/img/google-icon.png';
import apple from '../../assets/img/apple-solid.svg';
import arrowBack from '../../assets/img/arrow-back.png';
import Modal from './SignupSuccess';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !password || !confirmPassword) {
        setError('Please fill in all the fields.');
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords don't match.");
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const profileUpates = {
        displayName: name,
        phoneNumber: '090233399000',
      };

      if (user) {
        await updateProfile(user, profileUpates);
        setShowModal(true);
      }
    } catch (error) {
      setError(error.response.message);
    }
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };
  return (
    <>
      <section className='flex flex-col items-center min-h-screen md:flex-row bg-veryDarkBlue'>
        <div className='flex flex-col items-center w-full px-4 py-8 text-white md:w-1/2 md:px-10'>
          <div className='self-start w-full md:self-center'>
            <img
              src={arrowBack}
              alt='Go back'
              className='mb-6 cursor-pointer'
            />
            <div className='mb-4 text-center'>
              <h2 className='mb-2 text-2xl font-bold'>Create an account</h2>
              <p>Sign Up to create an account</p>
            </div>
            <p className='text-center'>
              Already have an account?
              <span className='ml-2 font-bold cursor-pointer'>
                <Link to='/login'>Log In</Link>
              </span>
            </p>
          </div>
          <form className='w-full max-w-md mt-6' onSubmit={handleFormSubmit}>
            <div className='flex flex-col gap-4'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Name'
                  className='w-full px-4 py-2 bg-transparent border-2 rounded-md border-grayBlue placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:shadow-lg'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Email Address'
                  className='w-full px-4 py-2 bg-transparent border-2 rounded-md border-grayBlue placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:shadow-lg'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className='relative'>
                <input
                  type='password'
                  placeholder='Password'
                  className='w-full px-4 py-2 bg-transparent border-2 rounded-md border-grayBlue placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:shadow-lg'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <AiFillEye className='absolute text-lg cursor-pointer right-3 top-3' />
              </div>
              <div className='relative'>
                <input
                  type='password'
                  placeholder=' Confirm Password'
                  className='w-full px-4 py-2 bg-transparent border-2 rounded-md border-grayBlue placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:shadow-lg'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <AiFillEye className='absolute text-lg cursor-pointer right-3 top-3' />
              </div>
              <p className='text-red-600'>{error}</p>
              <button className='w-full py-2 mt-4 font-bold transition-colors duration-300 ease-in-out bg-white rounded-md text-lightBlue hover:bg-slate-400'>
                Sign Up
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
        <div className='hidden w-full h-full md:block md:w-1/2'>
          <img src={login} alt='Login' className='object-cover w-full h-full' />
        </div>
      </section>
      {showModal && <Modal />}
    </>
  );
};

export default SignUp;
