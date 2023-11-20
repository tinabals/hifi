import service1 from '../assets/img/services1.png';
import service2 from '../assets/img/services2.png';
import service3 from '../assets/img/services3.png';

const Services = () => {
  return (
    <section className='container mt-20 mx-auto px-auto'>
      <div className='flex flex-col'>
        <h2 className='text-3xl tracking-wide text-center pb-10 md:pt-0 md:text-left font-medium text-lightBlue underline underline-offset-8 uppercase'>
          Our Services
        </h2>
        <div className='flex flex-col md:flex-row'>
          <ul className='w-full m-0 p-0'>
            <li className='flex flex-col md:flex-row items-center p-5 md:w-full md:justify-between'>
              <div className='flex flex-col items-center  gap-7 md:flex-row md:justify-start md:items-start md:w-1/5'>
                <p className='text-4xl text-lightBlue border-2 border-lightBlue rounded-full px-5 py-2'>
                  1
                </p>
              </div>
              <div className='flex flex-col  md:flex-row md:items-center md:w-4/5'>
                <p className='text-lg text-darkGray md:text-2xl'>
                  Help reduce the rate of loan default by using advanced
                  algorithms to analyze the borrowers data and giving
                  predictions of default possibilities.
                </p>
                <img src={service1} alt='service-one' className='md:w-2/5' />
              </div>
            </li>
            <li className='flex flex-col md:flex-row items-center p-5 md:w-full md:justify-between'>
              <div className='flex flex-col items-center  gap-7 md:flex-row md:justify-start md:items-start md:w-1/5'>
                <p className='text-4xl text-lightBlue border-2 border-lightBlue rounded-full px-5 py-2'>
                  2
                </p>
              </div>
              <div className='flex flex-col  md:flex-row md:items-center md:w-4/5'>
                <img src={service2} alt='service-two' className='md:w-2/5' />
                <p className='text-lg text-darkGray md:text-2xl'>
                  Borrowers with financial difficulties will be flagged up
                  sooner rather than later. So you can address issues before
                  they arise – and before a customer defaults. This is proactive
                  credit risk management.
                </p>
              </div>
            </li>
            <li className='flex flex-col md:flex-row items-center p-5 md:w-full md:justify-between'>
              <div className='flex flex-col items-center  gap-7 md:flex-row md:justify-start md:items-start md:w-1/5'>
                <p className='text-4xl text-lightBlue border-2 border-lightBlue rounded-full px-5 py-2'>
                  3
                </p>
              </div>
              <div className='flex flex-col  md:flex-row md:items-center md:w-4/5'>
                <p className='text-lg text-darkGray md:text-2xl'>
                  The prediction model helps the bank by minimizing the risk and
                  reducing the number of defaulters.
                </p>
                <img src={service3} alt='service-three' className='md:w-2/5' />
              </div>
            </li>
          </ul>
        </div>
        <button className='bg-lightBlue text-white rounded-md px-2 py-3 mx-auto md:w-1/5'>
          View all Services
        </button>
      </div>
    </section>
  );
};

export default Services;
