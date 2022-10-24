import logo from '../assets/img/troll-face.png';
import '../assets/css/Header.css';

const Header = () => {
  return (
    <>
      <header className='Header'>
        <div className='logo'>
          <img src={logo} alt='' className='logo__img' />
          <h2 className='logo__text'>Meme Generator</h2>
        </div>

        <h3 className='title'>React Course - Project 3</h3>
      </header>
    </>
  );
};

export default Header;
