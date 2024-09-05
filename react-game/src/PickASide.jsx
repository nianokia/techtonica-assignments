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

    const [isFlipping, setIsFlipping] = useState(false); // new state to handle flipping animation
    const [side, setSide] = useState(null); // track the side (waffle or pancake) for animation

    // Flip coin
    const determineSideFlipped = () => {
        setIsFlipping(true); // start flipping animation
        
        // round math.random to the nearest integer, if 0 then show waffle, else show pancake
        const randomSide = Math.round(Math.random()) === 0 ? "waffle" : "pancake";

        // stop flipping after 2 seconds (same as the animation duration)
        setTimeout(() => {
            setIsFlipping(false); 
            // set the image after animation finishes
            setImage(randomSide === "waffle" ? waffle : pancake);
            // set the side (waffle or pancake) for animation
            setSide(randomSide);
            // logic for scoring
            if (userChoice == randomSide) {
                setUserScore(userScore + 1);
            } else {
                setCompScore(compScore + 1);
            }  
        }, 2000);
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
        }
    }, [moves]);
    
    return(
        <div className="PickASide">
            <h2>Pick a Side</h2>
            <h3 id="moves">Moves Left: {moves}</h3>

            <section>
                <button id="waffle" value="waffle" onClick={handleUserChoice} disabled={moves <= 0 || isFlipping}>Waffle</button> or
                <button id="pancake" value="pancake" onClick={handleUserChoice} disabled={moves <= 0 || isFlipping}>Pancake</button>
            </section>

            {/* Pass the flipping state and side to CoinFlip */}
            <CoinFlip image={image} isFlipping={isFlipping} side={side} />

            {/* Pass all states to the restart component to reset them */}
            <Restart {...{setUserChoice, setUserScore, setCompScore, setMoves, setImage}} breakfast={breakfast} />

            <ScoreBoard moves={moves} userScore={userScore} compScore={compScore} isFlipping={isFlipping} />
        </div>
    )
}