import { useState, useEffect } from 'react';

// assets
import '../assets/css/Meme.css';
import { BsFillImageFill } from 'react-icons/bs';

const Meme = () => {
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    memeImage: '',
  });

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((json) => setAllMemes(json.data.memes));
  }, []);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const randomImage = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      memeImage: randomImage,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <>
      <div className='Meme'>
        <div className='input-container'>
          <input
            type='text'
            onChange={handleChange}
            placeholder='Top text'
            value={meme.topText}
            name='topText'
          />
          <input
            type='text'
            onChange={handleChange}
            placeholder='Bottom text'
            value={meme.bottomText}
            name='bottomText'
          />
        </div>
        {/* input-container */}

        <button className='btn' onClick={getMemeImage}>
          Get a new Meme Image <BsFillImageFill />
        </button>
        {/* button */}

        <div className='meme'>
          <img src={meme.memeImage} className='meme__image' />
          <h2 className='meme__text top'>{meme.topText}</h2>
          <h2 className='meme__text bottom'>{meme.bottomText}</h2>
        </div>
      </div>
      {/* meme */}
    </>
  );
};

export default Meme;
