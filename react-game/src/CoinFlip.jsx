import React from "react";
import './CoinFlip.css'

export default function CoinFlip(props) {
    return (
        <div className="CoinFlip">
            <img id="coin" 
            src={props.image} 
            alt="coin"
            className={props.isFlipping ? (props.side === 'waffle' ? 'heads-flip' : 'tails-flip') : ''}
            />
        </div>
    )
}