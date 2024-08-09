// PSEUDOCODE
//     1. Have 2 sides of a coin; waffle & pancake
//     2. give an id to each side of the coin
//     3. use DOM to choose a side of the coin
//         - the percentage of waffle / pancake win should be 50 / 50
//     4. show the result of the coin toss by displaying either waffle or pancake
//     5. include a replay or start over button so user can keep tossing

const game = () => {
    // initialize all counter variables
    let userScore = 0;
    let computerScore = 0;
    let movesLeftText = 3;

    const playGame = () => {
        const waffleChoice = document.querySelector("#waffleChoice");
        const pancakeChoice = document.querySelector("#pancakeChoice");
        const userChoices = [waffleChoice, pancakeChoice];
        const coin = document.querySelector("#coin");

        let userSelection = "";
        const movesLeft = document.querySelector("#movesLeft");
        const restartButton = document.querySelector("#restart");

        // add listener for user click on waffle or pancake button
        userChoices.forEach(choice => {
            // function to handle user click
            choice.addEventListener("click", () => {
                userSelection = choice.id;

                // determine side landed on with using math random then rounding it to the nearest integer, if 0 then show waffle, if 1 then show pancake
                const sideLandedOn = Math.round(Math.random()) === 0 ? "waffleChoice" : "pancakeChoice";

                // display picture of side landed on; 'waffle' or 'pancake'
                sideLandedOn === "waffleChoice" ? coin.style.backgroundImage = "url('./pictures/waffle.png')" : coin.style.backgroundImage = "url('./pictures/pancake.png')";

                // call function to display text for if user won or lost
                winner(userSelection, sideLandedOn)

                if (movesLeftText > 1) {
                    movesLeftText--;
                    movesLeft.innerHTML = `Moves Left: ${movesLeftText}`;
                } else {
                    // decrement counter one more time to display accurate movesLeftText data
                    movesLeftText--;
                    movesLeft.innerHTML = `Moves Left: ${movesLeftText}`;
                    // call function to display gameOver message & winner results
                    gameOver();
                }
            });
        });

        // reload game to show starting breakfast coin image
        restartButton.addEventListener("click", () => {
            window.location.reload();
        });
    };

    const winner = (userChoice, computerChoice) => {
        let userScoreBoard = document.querySelector("#userScoreBoard");
        let computerScoreBoard = document.querySelector("#computerScoreBoard");
        let winnerResults = document.querySelector("summary");

        // style winnerResults
        winnerResults.style.fontFamily = "'Grandstander', cursive";
        winnerResults.style.fontSize = "2em";
        winnerResults.style.color = "#3a230a";
        winnerResults.style.marginTop = "30px";

        // what to show when user wins or loses a round
        if (userChoice === computerChoice) {
            userScore++;
            winnerResults.innerHTML = "You won!";
        } else {
            computerScore++;
            winnerResults.innerHTML = "You lost.";
        }

        // update scoreBoard with correct score
        userScoreBoard.innerHTML = userScore;
        computerScoreBoard.innerHTML = computerScore;
    }

    // function gameRestart to handle user clicking restart button
    const gameOver = () => {
        const gameOverMessage = document.querySelector("h2");
        gameOverMessage.innerHTML = "Game Over :("
        let winnerResults = document.querySelector("summary");

        // what to show if user wins or loses
        if (userScore > computerScore) {
            winnerResults.innerHTML = "Hooray, you win!!<br/><span>Enjoy  your breakfast! <i class='fa-solid fa-utensils'></i></span>"
        } else {
            winnerResults.innerHTML = "Sorry, you lost.<br/><span>No breakfast for you <i class='fa-regular fa-face-frown'></i></span>"
        }
    };

    playGame();
};

game();