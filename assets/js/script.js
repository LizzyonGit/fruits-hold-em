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

//Hold function implementation
// targets all hold buttons
const holdButtons = document.querySelectorAll('.hold-button');

//Click event added to all hold buttons, calls function holdColumn
for (let holdButton of holdButtons){
   holdButton.addEventListener('click', holdColumn);}

   
//function to add toggle class when clicked on a button (class changes colour)

function holdColumn(e){
   this.classList.toggle('held-button');
}


// Variable for winning each middle fruit to compare if there is a winning combination
let middleFruitOne = document.getElementById('first-column-middle');
let middleFruitTwo = document.getElementById('second-column-middle');
let middleFruitThree = document.getElementById('third-column-middle');


// selectFruitFunction called by GO button
function selectFruitFunction() {


    // Call resetFunction to empty array (needs to be changed when implementing Hold)
   resetArray();

   // Call function to get 9 random fruits
   selectNineFruits();

   // Populate all fruit columns with nine random fruits from allFruits array, or not, depending on Hold button

   // Variables for individual Hold buttons

   const holdColumnOne = document.getElementById('hold-column-one');
   const holdColumnTwo = document.getElementById('hold-column-two');
   const holdColumnThree = document.getElementById('hold-column-three');


   // If button corresponding to column is held (contains .held-button), do not add new fruits

   if (!(holdColumnOne.classList.contains('held-button'))){

   document.getElementById('first-column-top').innerHTML = allFruits[0];
   middleFruitOne.innerHTML = allFruits[1];
   document.getElementById('first-column-bottom').innerHTML = allFruits[2];
   }

   if (!(holdColumnTwo.classList.contains('held-button'))){

   document.getElementById('second-column-top').innerHTML = allFruits[3];
   middleFruitTwo.innerHTML = allFruits[4];
   document.getElementById('second-column-bottom').innerHTML = allFruits[5];
   }

   if (!(holdColumnThree.classList.contains('held-button'))){

   document.getElementById('third-column-top').innerHTML = allFruits[6];
   middleFruitThree.innerHTML = allFruits[7];
   document.getElementById('third-column-bottom').innerHTML = allFruits[8];
   }

   //set row variable to manipulate in coming if else statement
   const winningRow = document.querySelectorAll('.winning-row');

   //set #winning-text variable
   let winningText = document.getElementById('winning-text');

   //If winning combination call winGame function
   if (middleFruitOne.innerHTML === middleFruitTwo.innerHTML && middleFruitOne.innerHTML === middleFruitThree.innerHTML){
      
      winGame();

      // change winning text

      winningText.innerText = 'WINNER!!';

      // add background color with class
      

      for (column of winningRow){
        column.classList.toggle('winning-combination');
      
   }} else {
   //If no winning combination call spinDecrease function

        spinDecrease();

        //remove winning text
        winningText.innerText = '';
      
        //remove .winning-combination if it is there from previous win
        for (column of winningRow){
        column.classList.remove('winning-combination');




    }}
   
   
}

// Code to fix credit, spins left and games played

// Function to show the credit, spins and game info
function showCreditInfo(){
    document.getElementById('credit-amount').innerText = game.credit;
    document.getElementById('spins-left').innerText = game.spinsLeft;
    document.getElementById('games-played').innerText = game.gamesPlayed;
}


//default values for credit, spins left and games played.
//IS THIS NEEDED NOW THAT IT IS IN FUNCTION RESTARTGAME?
let game={
    credit: 10,
    spinsLeft: 3,
    gamesPlayed: 0,
};

//variable for start value spins left
const startSpinsLeft = 3;


// Click event added to button, calls function resetGame
document.getElementById('button-restart').addEventListener('click', resetGame);

function resetGame(){
    resetHold();
    //sets and shows default values
    game={
        credit: 10,
        spinsLeft: 3,
        gamesPlayed: 0,
    };

    showCreditInfo();
    
}

// From resetGame, each time you click Go:
// - Spins left -1

function spinDecrease(){

    game.spinsLeft --;
    showCreditInfo();

    if (game.spinsLeft === 0){
        
        
        gameDone();
    }
    
    


}

//After third time you clicked Go:
// - Spins left back to 3,
// - Games played +1,
// - Credit -5

function gameDone(){
    
    resetHold();
    //If credit is 0 when spins left is 0, quit the game. 
    //THERE IS A GLITCH BEFORE IT QUITS, NEED TO FIX?!!
    if (game.credit === 0){
        quitGame();
        
       } else {


    game.credit -= 5;
    game.spinsLeft = startSpinsLeft;
    game.gamesPlayed ++;

    

    showCreditInfo();

}
   

}

//If there is a winning combination in one of the 3 spins
// - Spins left back to 3,
// - Games played +1,
// - Credit +5


function winGame(){
    
    game.credit += 10;   
    game.spinsLeft = startSpinsLeft;
    game.gamesPlayed ++;
    
    resetHold();
    showCreditInfo();
}

// Quit game funtion

// Click event added to button, calls function quitGame
document.getElementById('button-quit').addEventListener('click', quitGame);

function quitGame(){
    //Code to redirect to other page, from https://www.tutorialspoint.com/how-to-redirect-to-another-webpage-using-javascript
    location.href = "index.html";
}


// Function to remove held buttons at end of game
function resetHold(){
    for (holdButton of holdButtons){
        holdButton.classList.remove('held-button');
    }
}




// Need to fix hold function
// Need to fix winning combination flash effect? See https://www.tutorialspoint.com/how-to-create-a-blinking-effect-with-css3-animations
// space key event for go button?
// Check spinsLeft as it does not work optimally