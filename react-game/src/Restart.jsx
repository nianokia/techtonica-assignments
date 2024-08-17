import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

export default function Restart() {
    return (
        <div className="Restart">
            <button id="restartButton">
                <FontAwesomeIcon icon={faRotateRight} />
            </button>
        </div>
    )
}