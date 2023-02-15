let userValue = 0;
let gameOutcome;
let userInput = prompt("Rock, Paper, or Scissors");
let computervalue = Math.ceil(Math.random() * 3);
const rock = 1;
const paper = 2;
const scissors = 3;
const tie = 0;
const win = 1;
const lose = 2;

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


function logic(uval, cval) {
    switch(uval) {
        case 1:
            if(cval == 1) {
                gameOutcome = tie;

            }

            else if(cval == 2) {
                gameOutcome = lose;

            }

            else if(cval == 3) {
                gameOutcome = win;


            }
        
        break;


        


        case 2:
            if(cval == 1) {
                gameOutcome = win;

            }

            else if(cval == 2) {
                gameOutcome = tie;

            }

            else if(cval == 3) {
                gameOutcome = lose;


            }
        
        break;



        case 3:
            if(cval == 1) {
                gameOutcome = lose;

            }

            else if(cval == 2) {
                gameOutcome = win;

            }

            else if(cval == 3) {
                gameOutcome = tie;


            }
        
        break;


    }

    


}