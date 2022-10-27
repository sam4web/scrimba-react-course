// components
import Header from './components/Header';
import MainContent from './components/MainContent';

// assets
import './assets/css/index.css';
import { useState } from 'react';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  return (
    <>
      <div className='container'>
        <Header dark={isDark} toggleTheme={toggleTheme} />
        <MainContent dark={isDark} />
      </div>
    </>
  );
};

export default App;
