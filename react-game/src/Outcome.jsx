import React from "react";

export default function Outcome(props) {
    return (
        <div className="Outcome">
            <summary>
                {props.isGameOver ? <div>{props.outcome}</div> : <div>{props.outcome}</div>}
            </summary>
        </div>
    )
}