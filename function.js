let userValue = 0;
let userInput = prompt("Rock, Paper, or Scissors");
let computervalue = Math.ceil(Math.random() * 3);
const rock = 1;
const paper = 2;
const scissors = 3;

assignment(userInput);

function assignment(users) {
    
    
    switch(users) {
        case "rock": userValue = rock;
        break;

        case "paper": userValue = paper;
        break;

        case "scissors": userValue = scissors;
        break;

        default: userValue = 0;
    }
    
    logic(userValue, computervalue);





}


function logic(val1, val2) {


}