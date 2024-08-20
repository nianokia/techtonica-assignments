import React from "react";

export default function Outcome(props) {
    // set outcome message based off winner
    // FOR SOME REASON THIS CODE BLOCK IS BREAKING THE PAGE
    // if (props.winner === "user") {
    //     setOutcome("You won!");
    // } else {
    //     setOutcome("You lost.");
    // }

    // if (props.isGameOver == true && props.winner == "user") {
    //     "Hooray you won!";
    // } else {
    //     "Sorry, no breakfast for you.";
    // }

    return (
        <div className="Outcome">
            <summary>
                {props.isGameOver ? <div>{props.outcome}</div> : <div>{props.outcome}</div>}
            </summary>
        </div>
    )
}