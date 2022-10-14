// React icons
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <a href='#' className='footer__link'>
          <FaTwitterSquare />
        </a>
        <a href='#' className='footer__link'>
          <FaFacebookSquare />
        </a>
        <a href='#' className='footer__link'>
          <FaInstagramSquare />
        </a>
        <a href='#' className='footer__link'>
          <FaGithubSquare />
        </a>
      </footer>
    </>
  );
};

export default Footer;
