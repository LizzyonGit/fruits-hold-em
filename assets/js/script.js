// Constants for fruits

const grapes = '&#127815;';
const lemon = '&#127819;';
const pineapple = '&#127821;';
const cherries = '&#127826;';
const kiwi = '&#129373;';

// Array to store fruits
const fruitArray = [grapes, lemon, pineapple, cherries, kiwi];


// Click event added to button, calls function selectFruitFunction
document.getElementById('button-go').addEventListener('click', selectFruitFunction);

// Introduce empty array for all fruits, changable variable
let allFruits = [];

// resetArray function to empty array
function resetArray(){
    allFruits = [];

}

function selectNineFruits(){
    // Loop through main fruitArray to get 9 random fruits and push them to empty array allFruits

    for (let i=0; i < 9; i++){
        let randomFruit = fruitArray[Math.floor((Math.random()*fruitArray.length))];
 
        allFruits.push(randomFruit);
 
       }
 
}

// selectFruitFunction called by GO button
function selectFruitFunction() {

    // Call resetFunction to empty array (needs to be changed when implementing Hold)
   resetArray();

   // Call function to get 9 random fruits
   selectNineFruits();

   // Populate all fruit columns with nine random fruits from allFruits array

   document.getElementById('first-column-top').innerHTML = allFruits[0];
   document.getElementById('first-column-middle').innerHTML = allFruits[1];
   document.getElementById('first-column-bottom').innerHTML = allFruits[2];

   document.getElementById('second-column-top').innerHTML = allFruits[3];
   document.getElementById('second-column-middle').innerHTML = allFruits[4];
   document.getElementById('second-column-bottom').innerHTML = allFruits[5];

   document.getElementById('third-column-top').innerHTML = allFruits[6];
   document.getElementById('third-column-middle').innerHTML = allFruits[7];
   document.getElementById('third-column-bottom').innerHTML = allFruits[8];

   //If no winning combination
   if (allFruits[1] !== allFruits[4] && allFruits[1] !== allFruits[7]){
      spinDecrease();

      //If no spins left one game is done
      if (spinsLeft === 0){
        gameDone();
      } else {
           // what here? You should just click again...
      }
   }
}

// Code to fix credit, spins left and games played

// Restart game Code

let startCredit = 10;
let startSpinsLeft = 3;
let startGamesPlayed = 0;

let credit = document.getElementById('credit').innerText;
let spinsLeft = document.getElementById('spins-left').innerText;
let gamesPlayed = document.getElementById('games-played').innerText;

function resetGame(){
    credit = startCredit;
    spinsLeft = startSpinsLeft;
    gamesPlayed = startGamesPlayed;
}

// Click event added to button, calls function resetGame
document.getElementById('button-restart').addEventListener('click', resetGame);

// From resetGame, each time you click Go:
// - Spins left -1

function spinDecrease(){
    spinsLeft -= 1;

}

//After third time you clicked Go:
// - Spins left back to 3,
// - Games played +1,
// - Credit -5

function gameDone(){
    credit -= 5;
    spinsLeft = startSpinsLeft;
    gamesPlayed += 1;
}

//If there is a winning combination in one of the 3 spins
// - Spins left back to 3,
// - Games played +1,
// - Credit +5


// Need to fix hold function
// Need to fix winning combination