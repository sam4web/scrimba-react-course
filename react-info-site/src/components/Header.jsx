import '../assets/css/Header.css';
import logoIcon from '../assets/react.svg';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const Header = (props) => {
  return (
    <>
      <header className={`Header ${props.dark ? 'dark' : ''}`}>
        <div className='logo'>
          <img src={logoIcon} alt='react-icon' className='logo-icon' />
          <h2 className='logo-text'>ReactFacts</h2>
        </div>

        <div className='toggle-container'>
          <BsFillSunFill className='toggle-icon light-icon' />
          <div className='toggle-btn' onClick={props.toggleTheme}>
            <div className='toggle-circle'></div>
          </div>
          <BsFillMoonFill className='toggle-icon dark-icon' />
        </div>
      </header>
    </>
  );
};

export default Header;
