// Styles
import '../assets/css/Header.css';
import logo from '../assets/img/airbnb-logo.png';

const Header = () => {
  return (
    <>
      <header className='Header'>
        <img className='logo' src={logo} alt='airbnb-logo' />
      </header>
    </>
  );
};

export default Header;
