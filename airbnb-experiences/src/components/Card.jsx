import '../assets/css/Card.css';
import starImage from '../assets/img/star.png';

const Card = ({ item }) => {
  const getImageUrl = (name) => {
    return new URL(`../assets/img/${name}`, import.meta.url).href;
  };

  let badgeText;
  if (!(item.openSpots > 0)) {
    badgeText = 'SOLD OUT';
  } else if (item.location === 'Online') {
    badgeText = 'Online';
  }

  return (
    <>
      <div className='card'>
        {badgeText && <div className='state'>{badgeText}</div>}
        <img
          src={getImageUrl(item.coverImg)}
          alt={item.title}
          className='card__img'
        />

        <div className='card__stats'>
          <img src={starImage} alt='star' className='star-img' />
          <span> 5.0 </span>
          <span className='grey'> ({item.stats.reviewCount}) </span>
          <span className='grey'> &#183; </span>
          <span className='grey'> {item.location} </span>
        </div>
        <p className='card__title'> {item.title} </p>
        <p>
          <span className='bold'>From ${item.price}</span> / person
        </p>
      </div>
    </>
  );
};

export default Card;
