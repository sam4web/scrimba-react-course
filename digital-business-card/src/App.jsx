// Components
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className='card-container'>
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </>
  );
};

export default App;
