/*
PSEUDOCODE:

Requirements:
- Gather quiz data ( √ )
- Separate each question object ( √ )
- Show all 5 question and answer choices ( √ )
- Collect # of answered questions ( X )
- Monitor # questions user got right/wrong ( X )
- Display game outcome message whether they won or lost ( √ )
    - if user got majority right they won (score >= 3), if not they lost (score <= 2)
    - maybe use a switch for each score

Nice-to-Haves
- Reset Button to restart the Quiz (X )

Test Cases
- User answers all questions
- User answers no questions
- Does the quiz render
- Does the user answer equal the clicked answer

Edge Cases
- if user doesn't answer a question, the quiz will alert them
- if user answers 0 questions, app alerts them that they must submit at least 1 answer

Future Implementations
- allow user to pick how many questions they want (5, 10, 20)
*/

import React, { useEffect, useState } from "react";
import mockTrivia from "./mockTrivia.json";

export default function TriviaForm() {
  const [quiz, setQuiz] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const mock = mockTrivia.data.results;

  // fetch data from the API from the server
  const retrieveQuizData = async () => {
    try {
      const response = await fetch(`http://localhost:4070/trivia`);
      const quizData = await response.json();
      setQuiz(quizData.data.results);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  // monitor changes to api call
  useEffect(() => {
    retrieveQuizData();
  }, []);

  
  // gather user input
  const handleInputChange = (index, answer) => {
    setUserAnswers((userAnswersArray) => ({
      ...userAnswersArray,
      [`question-${index}`]: answer,
    }));

    console.log(userAnswers);
  };

  // monitor changes to user input
  useEffect(() => {
    handleInputChange();
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();

    // calculate user score by evaluating each index of quiz and comparing user answer to the same index's correct answer
    let userScore = 0;
    mock.map((question, index) => {
      if (userAnswers[index] === question.correct_answer) {
        userScore++;
      }
    })

    // set final score and gameOver
    setScore(userScore);
    setGameOver(true);
  };

  // combine all answers into one array
  const mergeAnswers = (correct, incorrect) => {
    let allAnswers = incorrect.slice();
    allAnswers.push(correct);
    return allAnswers;
  };

  return (
    <div className="TriviaForm">
      <form onSubmit={handleSubmit}>
        <section className="questionBlock" style={{ textAlign: "start" }}>

          {/* -------- map through each question in quiz -------- */}
          {mock.map((question, questionIndex) => {
            let answers = mergeAnswers(
              question.correct_answer,
              question.incorrect_answers
            );

            return (
              <fieldset
                id={`question-${questionIndex}`}
                key={`question-${questionIndex}`}
              >
                Question {questionIndex + 1}: {question.question}
                <br />
                {/* -------- map through all answers in each question -------- */}
                {answers.map((answer, answerIndex) => (
                  <div>
                    <label
                      key={`${questionIndex}-${answerIndex}`}
                    >
                      <input
                        type="radio"
                        name={`question-${questionIndex}`}
                        value={answer}
                        onChange={() =>
                          handleInputChange(questionIndex, answer)
                        }
                      />
                      {answer}
                    </label>
                    <br />
                  </div>
                ))}
              </fieldset>
            );
          })}
        </section>
        <button type="submit">Submit</button>
      </form>
      {/* ---- SCORE & OUTCOME MESSAGE ---- */}
      {!score && (
        <footer>
          <p>
            Score: {score}/{mock.length}
          </p>

          {/* if gameOver is true display Outcome Message */}
          {gameOver ? (
            score > mock.length / 2 ? (
              <summary>Congrats, you won!</summary>
            ) : (
              <summary>Sorry, you lost.</summary>
            )
          ) : null}
        </footer>
      )}
    </div>
  );
}

/*
I was able to:
  - connect front and back end
  - display quiz data and answers
  - have user select an answer for each question
  - show score
  - display outcome message

I was not able to:
  - compare user answers to correct answers to calculate points
    - therefore I couldn't display accurate score and accurate outcome message
  - I kept getting an error in my console that there are duplicate keys but I     didn't see any duplicates

When I replaced quiz with mock data it works, however when I insert quiz back it results in mapping errors
*/