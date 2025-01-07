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

// Introduce empty array for second fruit column, changable variable
let fruitColumnTwo = [];

// resetArray function to empty array
function resetArray(){
    fruitColumnTwo = [];

}

// selectFruitFunction called by GO button
function selectFruitFunction() {

    // Call resetFunction to empty array
    resetArray();

// Loop through main fruitArray to get 3 random fruits and push them to empty fruitColumnTwo

for (let i=0; i < 3; i++){
    let randomFruit = fruitArray[Math.floor((Math.random()*fruitArray.length))];

    fruitColumnTwo.push(randomFruit);

   }

// Populate second fruit column with three random fruits from fruitColumnTwo array

document.getElementById('second-column-top').innerHTML = fruitColumnTwo[0];
document.getElementById('second-column-middle').innerHTML = fruitColumnTwo[1];
document.getElementById('second-column-bottom').innerHTML = fruitColumnTwo[2];
}