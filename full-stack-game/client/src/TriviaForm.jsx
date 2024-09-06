/*
PSEUDOCODE:

Requirements:
- Gather quiz data (√)
- Seperate each question object
- Show all 5 question and answer choices
- Set userAnswers to be the event.target.value of each question
- Collect # of answered questions
- Monitor # questions user got right/wrong
- Display game outcome message whether they won or lost
    - if user got majority right they won (score >= 3), if not they lost (score <= 2)

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

export default function TriviaForm() {
    const [quiz, setQuiz] = useState([]);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        const retrieveQuizData = async () => {
            try {
                const response = await fetch(`http://localhost:4070/trivia`);
                const quizData = await response.json();
                console.log(quizData);
                setQuiz(quizData.data.results);
            } catch (err) {
                console.log("Error:", err);
            }
        };
        retrieveQuizData();
        // const submitAnswers = async () => {
        //     fetch(`http://localhost:4070/trivia`)
        //         .then((response) => response.json())
        //         .then((result) => {
        //             let quizData = result.data.results;
        //             console.log(quizData);
        //             setQuiz({
        //                 isLoaded: true,
        //                 question1: {
        //                     question: quizData[0].question,
        //                     correct: quizData[0].correct_answer,
        //                     incorrect1: quizData[0].incorrect_answers[0],
        //                     incorrect2: quizData[0].incorrect_answers[1],
        //                     incorrect3: quizData[0].incorrect_answers[2]
        //                 },
        //                 question2: {
        //                     question: quizData[1].question,
        //                     correct: quizData[1].correct_answer,
        //                     incorrect1: quizData[1].incorrect_answers[0],
        //                     incorrect2: quizData[1].incorrect_answers[1],
        //                     incorrect3: quizData[1].incorrect_answers[2]
        //                 },
        //                 question3: {
        //                     question: quizData[2].question,
        //                     correct: quizData[2].correct_answer,
        //                     incorrect1: quizData[2].incorrect_answers[0],
        //                     incorrect2: quizData[2].incorrect_answers[1],
        //                     incorrect3: quizData[2].incorrect_answers[2]
        //                 },
        //                 question4: {
        //                     question: quizData[3].question,
        //                     correct: quizData[3].correct_answer,
        //                     incorrect1: quizData[3].incorrect_answers[0],
        //                     incorrect2: quizData[3].incorrect_answers[1],
        //                     incorrect3: quizData[3].incorrect_answers[2]
        //                 },
        //                 question5: {
        //                     question: quizData[4].question,
        //                     correct: quizData[4].correct_answer,
        //                     incorrect1: quizData[4].incorrect_answers[0],
        //                     incorrect2: quizData[4].incorrect_answers[1],
        //                     incorrect3: quizData[4].incorrect_answers[2]
        //                 },
        //             });
        //         }
        //     );
        // };  
    }, []);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // submitAnswers();
    };

    const mergeAnswers = (correct, incorrect) => {
        incorrect.push(correct);
    }

    return (
        <div className="TriviaForm">
            <form onSubmit={handleSubmit}>
                <section className="questionBlock" style={{textAlign: "start"}}>
                    <br/>
                    {quiz.map((question) => {
                        
                        return (
                            <>
                                Question: {question.question}
                                <br />
                                {question.incorrect_answers.map((answer) => {
                                    return (
                                        <>
                                            <label><input type="radio" name="answerChoice" value="answer" />{answer}</label>
                                            <br/>
                                        </>   
                                    )
                                })}
                            </> 
                        )  
                    })}
                    
                    {/* <label><input type="radio" name="answerChoice" value="answer1" />Answer 1</label>
                    <br/>
                    <label><input type="radio" name="answerChoice" value="answer2" />Answer 2</label>
                    <br/>
                    <label><input type="radio" name="answerChoice" value="answer3" />Answer 3</label>
                    <br/>
                    <label><input type="radio" name="answerChoice" value="answer4" />Answer 4</label> */}
                </section>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}