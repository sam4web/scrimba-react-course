import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './assets/css/style.css';
import StartPage from './components/StartPage';
import Question from './components/Question';

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameFinish, setGameFinish] = useState(false);

  const generateQuestions = (data) => {
    let questionList = [];
    for (let i = 0; i < data.length; i++) {
      let { question, correct_answer, incorrect_answers } = data[i];
      let questionData = {
        id: nanoid(),
        question: question,
        correctAns: correct_answer,
        correctAnsIdx: Math.floor(Math.random() * 4),
        incorrectAns: incorrect_answers,
        selectedAns: '',
      };
      questionList.push(questionData);
    }
    return questionList;
  };

  const getQuizQuestions = () => {
    setScore(0);
    setCompleted(false);
    setGameFinish(false);

    fetch(
      'https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple'
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(generateQuestions(data.results));
      });
  };

  const selectOption = (id, option) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id ? { ...question, selectedAns: option } : question
      )
    );
  };

  const checkAnswers = () => {
    let score = 0;
    questions.forEach((question) => {
      let { correctAns, selectedAns } = question;
      if (correctAns === selectedAns) {
        score += 1;
      }
    });
    setScore(score);
    setGameFinish(true);
  };

  useEffect(() => {
    setCompleted(questions.every((question) => question.selectedAns !== ''));
  }, [questions]);

  return (
    <>
      <div className='container'>
        {questions.length > 0 ? (
          <>
            {questions.map((question) => (
              <Question
                questionObj={question}
                selectOption={selectOption}
                gameFinish={gameFinish}
                key={question.id}
              />
            ))}

            <div className='score-container'>
              {gameFinish && (
                <p className='score'>
                  You scored {score}/{questions.length} correct answers.
                </p>
              )}

              <button
                className='btn'
                disabled={!completed}
                onClick={() => {
                  gameFinish ? getQuizQuestions() : checkAnswers();
                }}
              >
                {gameFinish ? 'Play Again' : 'Check answers'}
              </button>
            </div>
          </>
        ) : (
          <StartPage startQuiz={getQuizQuestions} />
        )}
      </div>
    </>
  );
}
