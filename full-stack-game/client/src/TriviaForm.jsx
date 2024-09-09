/*
PSEUDOCODE:

Requirements:
- Gather quiz data ( √ )
- Separate each question object ( √ )
- Show all 5 question and answer choices ( √ )
- Set userAnswers to be the event.target.value of each question (  )
- Collect # of answered questions (  )
- Monitor # questions user got right/wrong (  )
- Display game outcome message whether they won or lost (  )
    - if user got majority right they won (score >= 3), if not they lost (score <= 2)
    - maybe use a switch for each score

Nice-to-Haves
- Reset Button to restart the Quiz

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
import mockTrivia from './mockTrivia.json'

export default function TriviaForm() {
  const [quiz, setQuiz] = useState([]);
  const [userAnswer, setUserAnswer] = useState({});
  const [score, setScore] = useState(0);
  const mock = mockTrivia.data.results;

  useEffect(() => {
    const retrieveQuizData = async () => {
      try {
          const response = await fetch(`http://localhost:4070/trivia`);
          const quizData = await response.json();
          setQuiz(quizData.data.results);
      } catch (err) {
          console.log("Error:", err);
      }
    };
    retrieveQuizData();
  }, []);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    
  };

  const mergeAnswers = (correct, incorrect) => {
    let allAnswers = incorrect.slice();
    allAnswers.push(correct);
    return allAnswers;
  }

  const handleInputChange = (event) => {
    event.preventDefault();
    let userAnswersArray = {
      "question-0": "",
      "question-1": "",
      "question-2": "",
      "question-3": "",
      "question-4": ""
    }
    userAnswersArray = event.target.value;
    console.log(userAnswersArray);
  }

  return (
    <div className="TriviaForm">
      <form onSubmit={handleSubmit}>
        <section className="questionBlock" style={{textAlign: "start"}}>
          {/* Remember to change mock.map below back to quiz.map when API restores calls */}
          {mock.map((question, questionIndex) => {
            let answers = mergeAnswers(question.correct_answer, question.incorrect_answers);
            return (
              <fieldset id={`question-${questionIndex}`} key={`question-${questionIndex}`}>
                Question: {question.question}
                <br />
                {answers.map((answer, answerIndex) => {
                  return (
                    <div key={`answer-${answerIndex}`}>
                      <label>
                        <input type="radio" name={`question-${questionIndex}`} value={answer} onChange={handleInputChange} />
                        {answer}
                        </label>
                      <br/>
                    </div>   
                  )
                })}
              </fieldset> 
            )  
          })}
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}