import React, { useState } from "react";

export default function PickASide() {
    const [choice, setChoice] = useState("breakfast");
    const [moves, setMoves] = useState(3);

    return(
        <div className="PickASide">
            <h2>Pick a Side</h2>
            <h3 id="moves">Moves Left: 3</h3>
            <section>
                <button id="waffle">Waffle</button> or
                <button id="pancake">Pancake</button>
            </section>
        </div>
    )
}