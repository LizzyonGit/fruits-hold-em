// Constants for fruits

const grapes = '&#127815;';
const lemon = '&#127819;';
const pineapple = '&#127821;';
const cherries = '&#127826;';
const kiwi = '&#129373;';

// Array to store fruits
const fruitArray = [grapes, lemon, pineapple, cherries, kiwi];


// Click event added to GO button, calls function selectFruitFunction
const buttonGo = document.getElementById('button-go');
buttonGo.addEventListener('click', selectFruitFunction);

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

//Click event added to all hold buttons, calls function holdColumn and changeText
for (let holdButton of holdButtons){
   holdButton.addEventListener('click', holdColumn);
   holdButton.addEventListener('click', changeText);

   //Make HOLD disabled in the start when there are no fruits, only read on page load so no else statement. Later functions reset HOLD. 
   if (allFruits.length === 0){
    holdButton.setAttribute('disabled', true);
   } 

}


//Function to toggle class .held-button when clicked on a button (class changes colour) 

function holdColumn(e){
   this.classList.toggle('held-button');

   // Statements to prevent 3 clicked Hold buttons

   if (holdColumnOne.classList.contains('held-button') && holdColumnTwo.classList.contains('held-button')){
    holdColumnThree.toggleAttribute('disabled');
    
   }
   if (holdColumnOne.classList.contains('held-button') && holdColumnThree.classList.contains('held-button')){
    holdColumnTwo.toggleAttribute('disabled');
    
   }
   if (holdColumnTwo.classList.contains('held-button') && holdColumnThree.classList.contains('held-button')){
    holdColumnOne.toggleAttribute('disabled');
    
   }

   // Statements to remove disabled attribute when only one Hold button is clicked (checks if one of the other 2 buttons is clicked, if it is not, disabled is removed)

   if (holdColumnOne.classList.contains('held-button') && !(holdColumnTwo.classList.contains('held-button') || holdColumnThree.classList.contains('held-button'))){
    holdColumnTwo.removeAttribute('disabled');
    holdColumnThree.removeAttribute('disabled');
   }
   if (holdColumnTwo.classList.contains('held-button') && !(holdColumnOne.classList.contains('held-button') || holdColumnThree.classList.contains('held-button'))){
    holdColumnOne.removeAttribute('disabled');
    holdColumnThree.removeAttribute('disabled');
   }
   if (holdColumnThree.classList.contains('held-button') && !(holdColumnOne.classList.contains('held-button') || holdColumnTwo.classList.contains('held-button'))){
    holdColumnOne.removeAttribute('disabled');
    holdColumnTwo.removeAttribute('disabled');
   }

   

   
}

// Function to change text
// If button containes held-button class, change inner text, otherwise change back to HOLD
function changeText(e){
if (this.classList.contains('held-button')){
    this.innerText = 'HELD';}
    else{
        this.innerText = 'HOLD';

    }

}
// Variables for individual Hold buttons

const holdColumnOne = document.getElementById('hold-column-one');
const holdColumnTwo = document.getElementById('hold-column-two');
const holdColumnThree = document.getElementById('hold-column-three');

// Function to populate all fruit columns with nine random fruits from allFruits array, or not, depending on Hold button
// If button corresponding to column is held (contains .held-button), do not add new fruits

function populateFruits(){
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
}

//Needed for winning game functionality
//Variable for winning row
const winningRow = document.querySelectorAll('.winning-row');

//Variable for #winning-text
let winningText = document.getElementById('winning-text');

// Variable for winning each middle fruit to compare if there is a winning combination
let middleFruitOne = document.getElementById('first-column-middle');
let middleFruitTwo = document.getElementById('second-column-middle');
let middleFruitThree = document.getElementById('third-column-middle');


// selectFruitFunction called by GO button
function selectFruitFunction() {
//At the start, when there are no fruits, GO will behave like the Restart button so it will not count down the spins on the first click. After that, it will count down the spins left
    if (allFruits.length === 0){
        resetGame();

    } else {
        

      // Call resetFunction to empty array 
      resetArray();

      // Call function to get 9 random fruits
      selectNineFruits();

      // Call function to populate fruit columns (depending in Hold)
      populateFruits();

      //If winning combination call winGame function
      //if statement needs to be inside this function as it should check this condition after populateFruits, also spinDecrease is not needed for newGame
      if (middleFruitOne.innerHTML === middleFruitTwo.innerHTML && middleFruitOne.innerHTML === middleFruitThree.innerHTML){
      
         winGame();
        
        } else {
          //If no winning combination call spinDecrease function
          spinDecrease();
         }
   }
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

    
    //This part from the selectFruitFunction can be reused here (NO spinDecrease function)

    // Call resetFunction to empty array 
    resetArray();

    // Call function to get 9 random fruits
    selectNineFruits();

    // Call function to populate fruit columns (depending in Hold)
    populateFruits();

    //If winning combination call winGame function
    //if statement needs to be inside this function as it should check this condition after populateFruits, also spinDecrease is not needed for newGame
    if (middleFruitOne.innerHTML === middleFruitTwo.innerHTML && middleFruitOne.innerHTML === middleFruitThree.innerHTML){
      
      winGame();
    } 
}

// From resetGame, each time you click Go:
// - Spins left -1


function spinDecrease(){

    game.spinsLeft --;
    showCreditInfo();

    if (game.spinsLeft === 0){
        
        //This code disables GO and HOLD buttons while Spins left is on 0 and waiting to execute gameDone
        for (holdButton of holdButtons){
           holdButton.setAttribute('disabled', true);
        }

        buttonGo.setAttribute('disabled', true);

        //Added method to wait 1 sec before calling gameDone, so the credit shows with 0 spins left before moving on


        setTimeout(() => {
        gameDone();
        }, 1000);
    }

}

//After third time you clicked Go:
// - Spins left back to 3,
// - Games played +1,
// - Credit -5

function gameDone(){
    //Remove disabled state from GO
    buttonGo.removeAttribute('disabled');


    resetHold();

    //Reset winning combination from old game, but after repopulating the fruits it checks for a winning combination, see below in this function
    resetWin();

    //If credit is 0 when spins left is 0, quit the game. 
    //THERE IS A GLITCH BEFORE IT QUITS, NEED TO FIX?!!
    if (game.credit === 0){
        //quitGame();
        showResultModal();
        
       } else {

       game.credit -= 5;
       game.spinsLeft = startSpinsLeft;
       game.gamesPlayed ++;

       showCreditInfo();

       //This part from the selectFruitFunction can be reused here (NO spinDecrease function)

       // Call resetFunction to empty array 
       resetArray();

       // Call function to get 9 random fruits
       selectNineFruits();

       // Call function to populate fruit columns (depending in Hold)
       populateFruits();

       //If winning combination call winGame function
       //if statement needs to be inside this function as it should check this condition after populateFruits, also spinDecrease is not needed for newGame
       if (middleFruitOne.innerHTML === middleFruitTwo.innerHTML && middleFruitOne.innerHTML === middleFruitThree.innerHTML){
      
           winGame();
        } 
    }
   

}

//If there is a winning combination in one of the 3 spins
// - Spins left back to 3,
// - Games played +1,
// - Credit +5


function winGame(){
    // A winning row increases the credit and leaves the rest as it was for a little while, before the gameDone function is called
    game.credit += 10;   
    
    // Change winning text
    winningText.innerText = 'WINNER!!';

    // Add background color with class (should not be toggle in case two winning combinations in row)   

    for (column of winningRow){
        column.classList.add('winning-combination');
    }

    showCreditInfo();

    //This code disables GO and HOLD buttons while the winning combination is displayed and waiting to execute gameDone
    for (holdButton of holdButtons){
        holdButton.setAttribute('disabled', true);
    }

    buttonGo.setAttribute('disabled', true);
    

    //Added method to wait 1 sec before calling gameDone, so the new credit and winning combination displays before moving on

    setTimeout(() => {
    gameDone();
    }, 1000);


}

// Quit game funtion

// Click event added to button, calls function quitGame
document.getElementById('button-quit').addEventListener('click', quitGame);

function quitGame(){
    //Code to redirect to other page, from https://www.tutorialspoint.com/how-to-redirect-to-another-webpage-using-javascript
    location.href = "index.html";
}


// Function to remove held buttons and remove disabled attribute at end of a game (needs to be referred to in several scenarios)
function resetHold(){
    for (holdButton of holdButtons){
        holdButton.classList.remove('held-button');
        holdButton.removeAttribute('disabled');
        // change button text back to HOLD
        holdButton.innerText = 'HOLD';
    }
}

// Function to remove winning combination indicators
function resetWin(){
    //remove winning text
    winningText.innerText = '';
      
    //remove .winning-combination if it is there from previous win 
    for (column of winningRow){
    column.classList.remove('winning-combination');
    }
}

//Variable for result modal, from https://stackoverflow.com/questions/11404711/how-can-i-trigger-a-bootstrap-modal-programmatically
let resultModal =  new bootstrap.Modal(document.querySelector('#result-modal'));

// Function to get modal after game ends because credit has run out
function showResultModal() {
    //Show the modal, from https://stackoverflow.com/questions/11404711/how-can-i-trigger-a-bootstrap-modal-programmatically
    resultModal.show();
    let gamesPlayedModal = document.getElementById('games-played-modal');
    //the last game played is not added in the credit info section when credit is 0, so it needs to add this last game played first, then the correct nr of played games is displayed in the mdoal
    game.gamesPlayed ++;
    gamesPlayedModal.innerHTML = game.gamesPlayed;
    // Code to make sure the quitGame function is called for buth quit buttons in modal
    const quitResultButtons = document.querySelectorAll('.result-modal-quit');
    for (const quitResultButton of quitResultButtons){
        quitResultButton.addEventListener('click', quitGame);
    }
    // Code to give option to restart like the button in the credit info section
    const resultModalRestart = document.getElementById('result-modal-restart');
    resultModalRestart.addEventListener('click', resetGame);

}

// Need to fix hold function
// Need to fix winning combination flash effect? See https://www.tutorialspoint.com/how-to-create-a-blinking-effect-with-css3-animations
// space key event for go button?
// Check spinsLeft as it does not work optimally


