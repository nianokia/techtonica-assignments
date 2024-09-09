import { useState } from 'react'
import './App.css'

import TriviaForm from './TriviaForm';

export default function App() {
  const [displayQuiz, setDisplayQuiz] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  // const [quantity, setQuantity] = useState(0);

  const playGame = () => {
    setDisplayQuiz(true);
    // setQuantity(10);
  };

  return (
    <>
      <div className='App'>
        <h1>Anime & Manga Trivia</h1>
        {!displayQuiz ? (
          <button onClick={playGame}>Play</button>
        ) : null
        }
        {displayQuiz && <TriviaForm />}
      </div>
    </>
  )
}
