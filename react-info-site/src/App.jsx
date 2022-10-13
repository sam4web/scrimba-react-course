// Components
import Header from './components/Header';
import MainContent from './components/MainContent';

// CSS
import './assets/css/index.css';

const App = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <MainContent />
      </div>
    </>
  );
};

export default App;
