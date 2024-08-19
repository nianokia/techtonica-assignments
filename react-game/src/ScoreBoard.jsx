import React, { useState } from "react";
import Outcome from "./Outcome";

export default function ScoreBoard(props) {
    // setWinner, setUserScore, setCompScore
    const [winner, setWinner] = useState(null);
    const [userScore, setUserScore] = useState(0);
    const [compScore, setCompScore] = useState(0);

    const handleWinner = () => {
        if (props.userChoice === props.randomSide) {
            setUserScore(userScore + 1);
            setWinner("user");
        } else {
            setCompScore(compScore + 1);
            setWinner("computer");
        }
    }

    handleWinner;

    return (
        <div className="ScoreBoard">
            <span className="userScoreBoard">
                <h3>User Score</h3>
                <p id="userScore">{userScore}</p>
            </span>
            <span className="compScoreBoard">
                <h3>Computer Score</h3>
                <p id="compScore">{compScore}</p>
            </span>
            <Outcome winner={winner}/>
        </div>
    )
}