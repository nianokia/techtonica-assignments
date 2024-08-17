import React from "react";

export default function ScoreBoard() {
    return (
        <div className="ScoreBoard">
            <span className="userScoreBoard">
                <h3>User Score</h3>
                <p id="userScore">0</p>
            </span>
            <span className="compScoreBoard">
                <h3>Computer Score</h3>
                <p id="compScore">0</p>
            </span>
        </div>
    )
}