import '../assets/css/MainContent.css';
import { FaReact } from 'react-icons/fa';

const MainContent = ({ dark }) => {
  return (
    <>
      <section className={`MainContent ${dark ? 'dark' : ''}`}>
        <h1 className='main-title'>Fun facts about React</h1>
        <ul className='content-list'>
          <li className='content-item'>Was first released in 2013</li>
          <li className='content-item'>
            Was originally created by Jordan Walke
          </li>
          <li className='content-item'>Has well over 100K stars on GitHub</li>
          <li className='content-item'>Is maintained by Facebook</li>
          <li className='content-item'>
            Powers thousands of enterprise apps, including mobile apps
          </li>
        </ul>

        <FaReact className='background-icon ' />
      </section>
    </>
  );
};

export default MainContent;
