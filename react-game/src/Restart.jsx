import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

export default function Restart({setUserChoice, setUserScore, setCompScore, setMoves, setImage, breakfast}) {
    const handleRestart = (event) => {
        event.preventDefault();

        // reset all states from PickASide component
        setUserChoice(null);
        setUserScore(0);
        setCompScore(0);
        setMoves(3);
        setImage(breakfast);
    }
    return (
        <div className="Restart">
            <button id="restartButton" onClick={handleRestart}>
                <FontAwesomeIcon icon={faRotateRight} />
            </button>
        </div>
    )
}