// React icons
import { MdEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';

const Info = () => {
  return (
    <>
      <div className='info'>
        <div className='info__image'></div>
        <h1 className='info__name'>Laura Smith</h1>
        <p className='info__job-title'>Frontend Developer</p>
        <p className='info__personal-website'>laurasmith.website</p>

        <div className='button-container'>
          <a className='btn' href='#'>
            <MdEmail />
            Email
          </a>
          <a className='btn btn-primary' href='#'>
            <BsLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Info;
