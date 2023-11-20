import login from '../../assets/img/login.png';
import email from '../../assets/img/email.png';
import google from '../../assets/img/google-icon.png';
import apple from '../../assets/img/apple-solid.svg';
import arrowBack from '../../assets/img/arrow-back.png';
import {AiFillEye} from 'react-icons/ai';
const LogIn = () => {
  return (
    <section className='flex h-full md:flex-row text-center'>
      <div className='flex bg-veryDarkBlue text-white flex-col gap-10 w-full md:w-1/2'>
        <div className='w-full'>
          <div className='flex gap-40 items-center container'>
            <img src={arrowBack} alt='go back' className='' />
            <div className='flex flex-col tracking-wide mt-10 items-center gap-2 justify-center'>
              <div className='flex flex-col justify-center'>
                <p className='font-bold'>Welcome Back</p>
                <p>Log into your account</p>
              </div>
              <p>
                Don&apos;t have an account?{' '}
                <span className='text-bold'>Sign up</span>
              </p>
            </div>
          </div>
          <form action='' className='form-control'>
            <div className='flex container flex-col justify-between items-center gap-6 pt-12'>
              <div className='flex rounded-md shadow-sm'>
                <input
                  type='text'
                  placeholder='Email Address:'
                  className='block w-96  focus:outline-none  focus:text-white peer px-4 py-2 pl-4 appearance-none border-2 focus:ring-1  border-grayBlue rounded-md bg-transparent focus:border-blue-600  placeholder:text-gray-400'
                />
              </div>
              <div className='flex rounded-md relative'>
                <input
                  type='password'
                  placeholder='Password'
                  className='block w-96 px-4 py-2 pl-4 focus:outline-none peer border-2 appearance-none focus:ring-1  border-grayBlue rounded-md bg-transparent  focus:border-blue-600  placeholder:text-gray-400'
                />
                <AiFillEye className='absolute right-2 top-4 ' />
                <p className='absolute right-0 top-12'>Forgot Password</p>
                <p className='absolute top-20 flex gap-2 items-center justify-center'>
                  <span>
                    <input type='checkbox' name='' id='' className='mt-2' />
                  </span>
                  <span>Always have me logged in</span>
                </p>
              </div>
              <div className='mt-44 bg-white text-lightBlue w-96 rounded-md px-4 py-2 border-none font-bold hover:bg-slate-400 cursor-pointer'>
                <button>Log In</button>
              </div>
              <div className='flex items-center w-96'>
                <hr className='flex-grow border-0 border-t border-gray-300' />
                <p className='px-3'>Or continue with</p>
                <hr className='flex-grow border-0 border-t border-gray-300' />
              </div>
              <div className='flex items-center justify-between w-1/2 pt-9'>
                <img src={email} className='w-8' />
                <img src={google} className='w-8' />
                <img src={apple} className='w-8' />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='flex  bg-cover w-full md:w-1/2'>
        <img src={login} alt='login' />
      </div>
    </section>
  );
};
export default LogIn;
