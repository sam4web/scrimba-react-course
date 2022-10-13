import logoIcon from '../assets/react.svg';

const Header = () => {
  return (
    <>
      <header className='Header'>
        <div className='logo'>
          <img src={logoIcon} alt='react-icon' className='logo-icon' />
          <h2 className='logo-text'>ReactFacts</h2>
        </div>

        <div className='page-title'>
          <h3>React Course - Project 01</h3>
        </div>
      </header>
    </>
  );
};

export default Header;
