import { GoGlobe } from 'react-icons/go';
import '../assets/css/Header.css';

const Header = () => {
  return (
    <>
      <header className='Header'>
        <GoGlobe className='header-icon' />
        <h2 className='header-title'>my travel journal.</h2>
      </header>
    </>
  );
};

export default Header;
