import login from '../../assets/img/login.png';
import arrowBack from '../../assets/img/arrow-back.png';
const LogIn = () => {
  return (
    <section className='flex md:flex-row text-center'>
      <div className='flex bg-veryDarkBlue text-white flex-col gap-10 w-1/2'>
        <div className=''>
          <img src={arrowBack} alt='go back' />
          <div className='flex flex-col tracking-wide items-center gap-2 justify-center'>
            <div className='flex flex-col justify-center'>
              <p className='font-bold'>Welcome Back</p>
              <p>Log into your account</p>
            </div>
            <p>
              Don&apos;t have an account?{' '}
              <span className='text-bold'>Sign up</span>
            </p>
            <p></p>
          </div>
        </div>
      </div>
      <div className='flex  w-1/2 bg-cover'>
        <img src={login} alt='login' />
      </div>
    </section>
  );
};
export default LogIn;
