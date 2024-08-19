import React, { useState } from "react";

export default function Outcome(props) {
    // set Outcome
    const [outcome, setOutcome] = useState("");

    // set outcome message based off winner
    if (props.winner === "user") {
        setOutcome("You won!");
    } else {
        setOutcome("You lost.");
    }

    return (
        <div className="Outcome">
            <summary>{outcome}</summary>
        </div>
    )
}