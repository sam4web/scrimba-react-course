import Header from './components/Header';
import Card from './components/Card';
import cardData from './utils/data';

const App = () => {
  return (
    <>
      <div className='container'>
        <Header />

        <div className='card-container'>
          {cardData.map((data) => (
            <Card
              title={data.title}
              description={data.description}
              imageUrl={data.imageUrl}
              location={data.location}
              startDate={data.startDate}
              endDate={data.endDate}
              googleMapsUrl={data.googleMapsUrl}
            />
          ))}
        </div>
        {/* card container */}
      </div>
    </>
  );
};

export default App;
