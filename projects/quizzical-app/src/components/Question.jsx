import '../assets/css/question.css';
import { nanoid } from 'nanoid';

export default function Question({ questionObj, selectOption, gameFinish }) {
  let { id, question, correctAns, incorrectAns, selectedAns, correctAnsIdx } =
    questionObj;

  let options = [...incorrectAns];
  options.splice(correctAnsIdx, 0, correctAns);

  const decode = (str) => {
    let txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
  };

  return (
    <>
      <div className='question-container'>
        <h3 className='question'>{decode(question)}</h3>
        <div className='option-container'>
          {options.map((option) => (
            <button
              key={nanoid()}
              className={`btn option
               ${selectedAns === option && 'selected'}
               ${
                 gameFinish && correctAns === option
                   ? 'correct'
                   : gameFinish &&
                     selectedAns === option &&
                     correctAns !== option
                   ? 'incorrect'
                   : ''
               }

               `}
              onClick={() => {
                selectOption(id, option);
              }}
            >
              {decode(option)}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
