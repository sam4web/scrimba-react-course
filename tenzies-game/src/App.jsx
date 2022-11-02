import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import './assets/css/style.css';
import Dice from './components/Dice';

export default function App() {
  const generateNewDice = () => ({
    value: Math.ceil(Math.random() * 6),
    isHold: false,
    id: nanoid(),
  });

  const allDiceValue = () => {
    const newArr = [];
    for (let i = 0; i < 10; i++) {
      newArr.push(generateNewDice());
    }
    return newArr;
  };

  const rollDice = () => {
    if (tenzies) {
      setDice(allDiceValue);
    } else {
      setDice((oldDice) =>
        oldDice.map((die) => (die.isHold ? die : generateNewDice()))
      );
    }
  };

  const toggleHoldDie = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id
          ? {
              ...die,
              isHold: !die.isHold,
            }
          : die
      )
    );
  };

  const [dice, setDice] = useState(allDiceValue());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    setTenzies(dice.every((dice) => dice.isHold));
  }, [dice]);

  return (
    <>
      <div className='container'>
        {tenzies && <Confetti />}
        <div className='text-container'>
          <h1 className='title'>Tenzies</h1>
          <p className='instructions'>
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>

        <div className='dice-container'>
          {dice.map((die) => (
            <Dice
              key={die.id}
              value={die.value}
              hold={die.isHold}
              toggleHoldDie={() => toggleHoldDie(die.id)}
            />
          ))}
        </div>

        <button className='btn' onClick={rollDice}>
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </div>
    </>
  );
}
