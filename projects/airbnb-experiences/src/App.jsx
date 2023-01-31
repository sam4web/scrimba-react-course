// Styles
import './assets/css/index.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';

import data from './utils/data';

const cardData = data[0];

const App = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <Hero />

        <div className='card-container'>
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
