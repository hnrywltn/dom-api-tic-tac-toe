//Write a function that tracks the clicks on the page 
// Write a code that can track when each tile of the tic tac toe is clicked
    window.addEventListener("DOMContentLoaded", event =>{
        document.addEventListener('click',(event) => {
            console.log(event.target.id)
        })
    })
//When clicked, a mark should be placed/ check for a mark    

//Write down all the winning combinations

const winningCondition = [
    [0,1,2],  //Horizational win condition
    [3,4,5],
    [6,7,8],
    [0,3,6], //vertical win condition
    [1,4,7],
    [2,5,8],
    [0,4,8],//Diagonal win condition
    [2,4,6]
] 


//Create a function that checks is the winning conditions have been met 
//Display winner


// Function buttons
//    If Give up is writted, player loses 
// New Game just reloads the page


