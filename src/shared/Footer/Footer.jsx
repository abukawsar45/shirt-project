import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebookF,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className='footer p-10 bg-base-200 text-base-content'>
        <div className=' flex flex-col md:justify-center md:items-center'>
          <Link to='/'>
            {' '}
            <img
              src='https://i.ibb.co/Hrb3xcV/Nishant-Sah-logo.png'
              alt='logo'
              className='w-20 md:w-24 rounded-l-sm'
            />
          </Link>
        </div>
        <div className='flex flex-col md:justify-center md:items-center'>
          <span className='footer-title'>About Us</span>
          <Link className='link link-hover'>
            <span className='flex justify-center items-center gap-2'>
              <FaMapMarkerAlt className='text-2xl text-red-700' /> Bhagalpur,
              Bihar, India
            </span>
          </Link>
          
        </div>
        <div className='flex flex-col md:justify-center md:items-center'>
          <span className='footer-title'>Follow Us</span>
          <div className='flex flex-row'>
              <span className=''>
                <Link
                  to='https://www.linkedin.com/in/nishantsah/'
                  target='_blank'
                >
                  <FaLinkedin className='text-2xl text-sky-700' />{' '}
                </Link>
              </span>
              <span className=''>
                <Link to='' target='_blank'>
                  <FaFacebookF className='text-2xl text-sky-700' />{' '}
                </Link>
              </span>
              <span className=''>
                <Link to='' target='_blank'>
                  <FaTwitterSquare className='text-2xl text-sky-700' />{' '}
                </Link>
              </span>
          </div>
        </div>
        <div>
          <span className='footer-title'>Contact Us</span>
        <p>+9999342334</p>
        </div>
        <div>
          <span className='footer-title'>Legal</span>
          <Link className='link link-hover'>Terms of use</Link>
  
        </div>
      </footer>
    </div>
  );
};

export default Footer;