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
}

// Code to fix credit, spins left and games played

let startCredit = 10;
let startSpinsLeft = 3;
let startGamesPlayed = 0;

function resetGame(){
    document.getElementById('credit').innerText = startCredit;
    document.getElementById('spins-left').innerText = startSpinsLeft;
    document.getElementById('games-played').innerText = startGamesPlayed;
}





// Need to fix hold function
// Need to fix winning combination