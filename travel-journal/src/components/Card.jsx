import { HiLocationMarker } from 'react-icons/hi';
import '../assets/css/Card.css';

const Card = (props) => {
  console.log(props);
  return (
    <>
      <div className='Card'>
        <div
          className='image-container'
          style={{ backgroundImage: `url(${props.imageUrl})` }}
        ></div>

        <div className='content-container'>
          <div className='location'>
            <div className='location__title'>
              <HiLocationMarker className='location__mark' />
              <span className='location__name'>{props.location}</span>
            </div>
            <a
              href={props.googleMapsUrl}
              target='_blank'
              className='location__url'
            >
              View on Google Maps
            </a>
          </div>
          {/* location */}

          <h2 className='title'>{props.title}</h2>

          <h3 className='date'>
            {props.startDate} - {props.endDate}
          </h3>

          <p className='description'>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
