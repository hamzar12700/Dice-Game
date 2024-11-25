// console.log("clicked");

// ask username
let player1Name = prompt("Enter Your Player Name 1");
let player2Name = prompt("Enter Your Player Name 2");

// getting dice image
let image = document.querySelector("img");

let currentPlayer = true;

// player 1 and player2 getting whole element
let player1Element = document.querySelector("#player1");
let player2Element = document.querySelector("#player2");

// adding playername into html element by asking from prompt
document.querySelector(".playerName1").innerText = player1Name;
document.querySelector(".playerName2").innerText = player2Name;

// toglle class
player1Element.classList.add("activePlayer");
player2Element.classList.remove("activePlayer");

let score1 = 0;
let score2 = 0;

// game ARea
let gameArea = document.querySelector("#gameArea");

// current score 0 and then adding nbr after player , playing this game
let currentScore1 = document.querySelector("#currentScore1");
let currentScore2 = document.querySelector("#currentScore2");

// total score
let totalScore1 = document.querySelector("#totalScore1");
let totalScore2 = document.querySelector("#totalScore2");

function rollDice() {
  let randNbr = Math.ceil(Math.random() * 6);
  image.src = `./Assets/${randNbr}.png`;
  console.log(randNbr);

  if (randNbr != 1) {
    if (currentPlayer) {
      score1 += randNbr;
      currentScore1.innerHTML = score1;
    } else {
      score2 += randNbr;
      currentScore2.innerHTML = score2;
    }
  } else {
    if (currentPlayer) {
      score1 = 0;
      currentScore1.innerHTML = score1;
    } else {
      score2 = 0;
      currentScore2.innerHTML = score2;
    }
    currentPlayer = !currentPlayer;
    player1Element.classList.toggle("activePlayer");
    player2Element.classList.toggle("activePlayer");
  }
}




function hold() {
  console.log("clicked");

  if (currentPlayer) {
    totalScore1.innerHTML = +totalScore1.innerHTML + score1;
    score1 = 0;
    currentScore1.innerHTML = score1;
    if (+totalScore1.innerHTML >= 20) {
      gameArea.innerHTML = `<h1>Winner is ${player1Name}</h1>`;
      return
    }
  } else {
    totalScore2.innerHTML = +totalScore2.innerHTML + score2;
    score2 = 0;
    currentScore2.innerHTML = score2;

    if (+totalScore2.innerHTML >= 20) {
      gameArea.innerHTML = `<h1>Winner is ${player2Name}</h1>`;
      return
    }
}
currentPlayer = !currentPlayer;
player1Element.classList.toggle("activePlayer");
player2Element.classList.toggle("activePlayer");
}









// function hold() {
//     console.log("clicked");
  
//     if (currentPlayer) {
//       totalScore1.innerHTML = +totalScore1.innerHTML + score1;
//       score1 = 0;
//       currentScore1.innerHTML = score1;
  
//       // Convert totalScore1.innerHTML to a number before comparison
//       if (+totalScore1.innerHTML >= 30) {
//         gameArea.innerHTML = `<h1>Winner is ${player1Name}</h1>`;
//         return; // Stop the game after declaring the winner
//       }
//     } else {
//       totalScore2.innerHTML = +totalScore2.innerHTML + score2;
//       score2 = 0;
//       currentScore2.innerHTML = score2;
  
//       // Convert totalScore2.innerHTML to a number before comparison
//       if (+totalScore2.innerHTML >= 30) {
//         gameArea.innerHTML = `<h1>Winner is ${player2Name}</h1>`;
//         return; // Stop the game after declaring the winner
//       }
//     }
  
//     // Switch player after the current turn
//     currentPlayer = !currentPlayer;
//     player1Element.classList.toggle("activePlayer");
//     player2Element.classList.toggle("activePlayer");
//   }
  