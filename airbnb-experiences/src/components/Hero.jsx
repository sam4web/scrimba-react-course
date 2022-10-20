import '../assets/css/Hero.css';
import heroImage from '../assets/img/photo-grid.png';

const Hero = () => {
  return (
    <>
      <section className='Hero'>
        <div className='img-container'>
          <img src={heroImage} alt='photo-grid' />
        </div>
        <div className='content-container'>
          <h1 className='section__title'>Online Experiences</h1>
          <p className='section__desc'>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
