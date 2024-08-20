import React, { useState } from "react";
import Outcome from "./Outcome";

export default function ScoreBoard(props) {
    // setGameOver, setOutcome
    // const [winner, setWinner] = useState(null);
    const [gameOver, setGameOver] = useState(null);
    const [outcome, setOutcome] = useState("");

    // const handleWinner = () => {
    //     while (props.moves > 0) {
    //         if (winner == "user") {
    //             setOutcome("You won!");
    //         } else {
    //             setOutcome("You lost.");
    //         }
    //     }

    //     if (props.moves === 0) {
    //         if (userScore > compScore) {
    //             // setWinner("user");
    //             setOutcome("Hooray you won!");
    //         } else {
    //             // setWinner("comp");
    //             setOutcome("Sorry, no breakfast for you :(");
    //         }
    //         setGameOver(true);
    //     }
    // }

    // if (moves == 0) {
    //     setGameOver(true);
    // }

    // This code block is breaking the game
    // const isGameOver = (moves === 0) ? (
    //     setGameOver(true)
    // ) : (
    //     setGameOver(false)
    // );

    // handleWinner();

    useEffect(() => {
        if (props.moves === 0) {
            if (props.userScore > props.compScore) {
                setOutcome("You won! Time to eat!");
            } else {
                setOutcome("Sorry, no breakfast for you :(");
            }
        }
        setGameOver(true);
    }, [props.moves, props.userScore, props.compScore]);

    return (
        <>
            <div className="ScoreBoard">
                <span className="userScoreBoard">
                    <h3>User Score</h3>
                    <p id="userScore">{props.userScore}</p>
                </span>
                <span className="compScoreBoard">
                    <h3>Computer Score</h3>
                    <p id="compScore">{props.compScore}</p>
                </span>
            </div>
            <Outcome 
                winner={props.moves === 0 ? (props.userScore > props.compScore ? "user" : "comp") : null}
                outcome={props.moves === 0 ? (props.userScore > props.compScore ? "You won! Time to eat!" : "Sorry, no breakfast for you :(") : null}
                isGameOver={props.moves === 0}
             />
            {/* <Outcome winner={winner} outcome={outcome} isGameOver={gameOver} /> */}
        </>
        
    )
}