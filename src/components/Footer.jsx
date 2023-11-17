import ellipsis from '../assets/img/Ellipse.png';
import Logo from '../assets/img/Logo2.png';
const Footer = () => {
  return (
    <>
      <section className='relative bg-veryLightBlue  text-white p-10 mx-auto'>
        <div className='container px-10 '>
          <img src={ellipsis} alt='' className='absolute right-0 top-0' />
          <div className='mb-4'>
            <h5 className='text-2xl tracking-wide mb-5 font-semibold'>
              {' '}
              Join Our Newsletter
            </h5>
            <p className='tracking-wide font-light mb-5'>
              Subsribe to join our newsletter, where you get weekly emails from
              our teams
            </p>
          </div>
          <div className='container mt-10 mx-10 justify-center text-center items-center flex flex-col md:flex-row'>
            <div className=' w-4/6 md:w-4/5 p-6 bg-grayBlue items-center'></div>
            <div className='w-4/6 md:w-1/5 bg-white px-6 py-3 items-center'>
              <p className='text-veryLightBlue text-center'>Subscribe</p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section
        id='links'
        className=' relative flex p-10  bg-veryLightBlue text-white  md:flex-row'
      >
        <div className='container flex-col md:flex-row'>
          <div id='img' className='flex justify-center items-center'>
            <img src={Logo} alt='logo' />
          </div>
          <div className='links flex justify-between pt-10'>
            <div id='links-one' className='space-y-3'>
              <p>Products</p>
              <p>No Debt</p>
              <p>Loan</p>
              <p>Loan Default</p>
            </div>
            <div id='links-two' className='space-y-3'>
              <p>About</p>
              <p>FAQS</p>
              <p>Blogs</p>
            </div>
            <div id='links-three' className='space-y-3'>
              <p>Legal</p>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Security</p>
            </div>
          </div>
          <div className='footer-txt flex flex-col space-y-10 md:my-20'>
            <p className='flex justify-center pt-10 text-center'>
              No Debt unlock the potential of predictive modeling and credit
              risk management to optimize your loan portfolio and drives
              businesses growth
            </p>
            <div className='flex text-center justify-center '>
              2020-2023 No Debt Global Limited - RC 1222200
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
