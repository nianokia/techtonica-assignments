import React, { useEffect, useState } from "react";
import CoinFlip from "./CoinFlip"
import Restart from './Restart'
import ScoreBoard from './ScoreBoard'

import breakfast from './pictures/breakfast.jpg'
import waffle from './pictures/waffle.png'
import pancake from './pictures/pancake.png'

export default function PickASide() {
    // setChoice, setMoves, setImage, setUserScore, setCompScore
    const [userChoice, setUserChoice] = useState(null);
    const [moves, setMoves] = useState(3);
    const [image, setImage] = useState(breakfast);
    const [userScore, setUserScore] = useState(0);
    const [compScore, setCompScore] = useState(0);

    let randomSide = "";
    let sideFlipped = "";

    const determineSideFlipped = () => {
        // determine side landed on using math random then rounding it to the nearest integer, if 0 then show waffle, else show pancake
        randomSide = Math.round(Math.random()) === 0 ? "waffle" : "pancake";

        // display picture of side landed on; 'waffle' or 'pancake'
        sideFlipped = randomSide === "waffle" ? setImage(waffle) : setImage(pancake);
    }

    const handleUserChoice = (event) => {
        event.preventDefault();
        if (event.target.value.id === "waffle") {
            setUserChoice("waffle");
        } else {
            setUserChoice("pancake");
        }
        setMoves(moves - 1);

        determineSideFlipped();

        if (userChoice === randomSide) {
            setUserScore(userScore + 1);
        } else {
            setCompScore(compScore + 1);
        }
    }
    
    return(
        <div className="PickASide">
            <h2>Pick a Side</h2>
            <h3 id="moves">Moves Left: {moves}</h3>
            <section>
                <button id="waffle" onClick={handleUserChoice} disabled={moves <= 0}>Waffle</button> or
                <button id="pancake" onClick={handleUserChoice} disabled={moves <= 0}>Pancake</button>
            </section>
            <CoinFlip randomSide={randomSide} image={image} />
            <Restart />
            <ScoreBoard moves={moves} userScore={userScore} compScore={compScore} />
        </div>
    )
}