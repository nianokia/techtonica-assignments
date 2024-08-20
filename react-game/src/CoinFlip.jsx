import React from "react";

export default function CoinFlip(props) {
    return (
        <div className="CoinFlip">
            <img id="coin" src={props.image} />
        </div>
    )
}