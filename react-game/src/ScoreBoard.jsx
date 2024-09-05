import React from "react";
import Outcome from "./Outcome";

export default function ScoreBoard(props) {
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
                // If moves = 0, set outcome to winner/loser message
                // Delay outcome until animation finishes
                outcome={props.moves === 0  && !props.isFlipping ? (props.userScore > props.compScore ? "You won! Time to eat!" : "Sorry, no breakfast for you :(") : null}
                isGameOver={props.moves === 0  && !props.isFlipping}
             />
        </>
    )
}