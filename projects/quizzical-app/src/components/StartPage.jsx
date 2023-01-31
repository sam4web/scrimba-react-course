import '../assets/css/startpage.css';

export default function StartPage({ startQuiz }) {
  return (
    <>
      <div className='start-page'>
        <h2 className='title'>Quizzical</h2>
        <p className='description'>Answer as many as possible.</p>
        <button className='btn' onClick={startQuiz}>
          Start quiz
        </button>
      </div>
    </>
  );
}
