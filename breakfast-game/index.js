// PSEUDOCODE
//     1. Have 2 sides of a coin; waffle & pancake
//     2. give an id to each side of the coin
//     3. use DOM to choose a side of the coin
//         - the percentage of waffle / pancake win should be 50 / 50
//     4. show the result of the coin toss by displaying either waffle or pancake
//     5. include a replay or start over button so user can keep tossing

let flipButton = document.querySelector("#flip");

flipButton.addEventListener("click", userClick);

// function to handle user click
function userClick() {
    // define var flippedCoin
    let flippedCoin = document.querySelector("#coin");

    // use Math random and round function to pick a side
    // define what displays when 0 or 1 is chosen
    // if 0 then show waffle, if 1 then show pancake
    let pickASide = Math.round(Math.random()) === 0 ? "waffle" : "pancake";

    // return result of pickASide in flippedCoin 'waffle' or 'pancake'
    if (pickASide === "waffle") {
        flippedCoin.style.backgroundImage = "url('./pictures/waffle.png')";
    } else {
        flippedCoin.style.backgroundImage = "url('./pictures/pancake.png')";
    }
}

// function gameRestart to handle user clicking restart button
function gameRestart() {
    // shows starting breakfast div and hides waffle & pancake div
}