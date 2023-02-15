let userValue = 0;
let gameOutcome;
const rock = 1;
const paper = 2;
const scissors = 3;
const tie = 0;
const win = 1;
const lose = 2;
let roundsPassed = 0;
let userInput;

let computervalue = Math.ceil(Math.random() * 3);

while(roundsPassed < 5) {

    getValues();

    function getValues() {
        let userInput = prompt("Rock, Paper, or Scissors");
        


        assignment(userInput);

    }

    function assignment(users) {
    
    
        switch(users) {
            case "rock": userValue = rock;
            break;

            case "paper": userValue = paper;
            break;

            case "scissors": userValue = scissors;
            break;

            default: console.log("Incorrect Value");
                     getValues();
                    


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


        winCondition(gameOutcome);

    }



    function winCondition(winLoseOrTie) {
        
        
        switch(winLoseOrTie) {
            case 0: console.log("You Tie");
            break;
        
            case 1: console.log("You Win");
            break;

            case 2: console.log("You Lose");
            break;

        }


    }
    
    roundsPassed = roundsPassed + 1;

    
}