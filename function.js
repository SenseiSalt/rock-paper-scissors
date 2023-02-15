let userValue = 0;
let gameOutcome;
const rock = 1;
const paper = 2;
const scissors = 3;
const tie = 0;
const win = 1;
const lose = 2;
let userInput;
let userInputLower;
let userWins = 0;
let computerWins = 0;

let computervalue = Math.ceil(Math.random() * 3);

while(userWins < 5 || computerWins < 5) {

    getValues();

    function getValues() {
        let userInput = prompt("Rock, Paper, or Scissors");
        let userInputLower = userInput.toLowerCase();


        assignment(userInputLower);

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
        
        console.log(uval + " " +cval);
        
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
                    userWins++;
                    computerWins++;
            break;
        
            case 1: console.log("You Win");
                    userWins++;
            break;

            case 2: console.log("You Lose");
                    computerWins++;
            break;

        }
        
        console.log("Rounds Won " + userWins);
        console.log("Computer wins " + computerWins);
    }
    
    

    
}

