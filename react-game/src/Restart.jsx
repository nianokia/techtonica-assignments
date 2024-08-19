import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

export default function Restart() {
    const handleRestart = (event) => {
        event.preventDefault();
        window.location.reload();
    }
    return (
        <div className="Restart">
            <button id="restartButton" onClick={handleRestart}>
                <FontAwesomeIcon icon={faRotateRight} />
            </button>
        </div>
    )
}