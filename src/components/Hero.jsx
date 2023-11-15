import heroImage from '../assets/img/hero.png';

const Hero = () => {
  return (
    <section className='container mx-auto px-auto mb-20'>
      <div className='flex m-10 flex-col-reverse justify-between items-start container  md:flex-row'>
        <div className='space-y-10 md:w-2/5 lg:w-2/5'>
          <p className='text-2xl text-lightBlue font-bold text-center md:text-left md:text-4xl'>
            Experience the power of predictive analytics with our loan
            prediction software - No Debt
          </p>
          <p className='text-darkGray text-center md:text-left'>
            Get ready to explore our range of loan products and find the one
            that&apos;s right for your client.
          </p>
          <button className='bg-lightBlue container justify-center text-white px-9 py-1 font-bold rounded-md'>
            Get Started
          </button>
        </div>
        <div className='md:w-3/5 lg:w-3/5 flex container h-96'>
          <img
            src={heroImage}
            alt='hero-image'
            className='object-cover w-full h-full'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
