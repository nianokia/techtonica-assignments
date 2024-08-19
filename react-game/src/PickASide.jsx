import React, { useState } from "react";
import CoinFlip from "./CoinFlip"
import Restart from './Restart'
import ScoreBoard from './ScoreBoard'

export default function PickASide() {
    // setChoice, setMoves, setGameOver
    const [choice, setChoice] = useState(null);
    const [randomSide, setRandomSide] = useState("");
    const [moves, setMoves] = useState(3);
    const [image, setImage] = useState("")
    const [gameOver, setGameOver] = useState(null);

    const determineSideFlipped = () => {
        // determine side landed on using math random then rounding it to the nearest integer, if 0 then show waffle, else show pancake
        setRandomSide(Math.round(Math.random()) === 0 ? "waffle" : "pancake");

        // display picture of side landed on; 'waffle' or 'pancake'
        setImage(`url('./pictures/${sideLandedOn}.png')`);
        // sideLandedOn === "waffle" ? setImage("url('./pictures/waffle.png')") : setImage("url('./pictures/pancake.png')");
    }

    const handleChoice = (event) => {
        if (event.target.value.id === "waffle") {
            setChoice("waffle");
        } else {
            setChoice("pancake");
        }
        setMoves(moves - 1);
        determineSideFlipped;
    }
  

    return(
        <div className="PickASide">
            <h2>Pick a Side</h2>
            <h3 id="moves">Moves Left: {moves}</h3>
            <section>
                <button id="waffle" onClick={handleChoice}>Waffle</button> or
                <button id="pancake" onClick={handleChoice}>Pancake</button>
            </section>
            <CoinFlip bgImage={image}/>
            <Restart />
            <ScoreBoard userChoice={choice} randomSide={randomSide}/>
        </div>
    )
}