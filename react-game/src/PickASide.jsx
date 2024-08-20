import React, { useEffect, useState } from "react";
import CoinFlip from "./CoinFlip"
import Restart from './Restart'
import ScoreBoard from './ScoreBoard'

// import pictures to use as variables
import breakfast from './pictures/breakfast.jpg'
import waffle from './pictures/waffle.png'
import pancake from './pictures/pancake.png'


export default function PickASide() {
    // setUserChoice, setMoves, setImage, setUserScore, setCompScore
    const [userChoice, setUserChoice] = useState(null);
    const [moves, setMoves] = useState(3);
    const [image, setImage] = useState(breakfast);
    const [userScore, setUserScore] = useState(0);
    const [compScore, setCompScore] = useState(0);


    // Initialize randomSide & sideFlipped to empty string
    let randomSide = "";
    let sideFlipped = "";


    // Flip coin
    const determineSideFlipped = () => {
        // round math.random to the nearest integer, if 0 then show waffle, else show pancake
        randomSide = Math.round(Math.random()) === 0 ? "waffle" : "pancake";

        // setImage of coin to waffle or pancake image
        sideFlipped = randomSide === "waffle" ? setImage(waffle) : setImage(pancake);
    }


    // Handle user clicking waffle or pancake button
    const handleUserChoice = (event) => {
        event.preventDefault();

        setMoves(moves - 1);

        // set userChoice based off the value of the button the user clicked
        if (event.target.value === "waffle") {
            setUserChoice("waffle");
        } else {
            setUserChoice("pancake");
        }
        
    }

    // Listen for when moves changes & call determineSideFlipped and distribute points
    useEffect(() => {
        if (userChoice != null && moves < 3) {
            determineSideFlipped();

            if (userChoice == randomSide) {
                setUserScore(userScore + 1);
            } else {
                setCompScore(compScore + 1);
            }  
        }
    }, [moves]);
    
    return(
        <div className="PickASide">
            <h2>Pick a Side</h2>
            <h3 id="moves">Moves Left: {moves}</h3>

            <section>
                <button id="waffle" value="waffle" onClick={handleUserChoice} disabled={moves <= 0}>Waffle</button> or
                <button id="pancake" value="pancake" onClick={handleUserChoice} disabled={moves <= 0}>Pancake</button>
            </section>

            <CoinFlip randomSide={randomSide} image={image} />

            {/* Pass all states to the restart component to reset them */}
            <Restart {...{setUserChoice, setUserScore, setCompScore, setMoves, setImage}} breakfast={breakfast} />

            <ScoreBoard moves={moves} userScore={userScore} compScore={compScore} />
        </div>
    )
}