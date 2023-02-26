userWins = 0;
computerWins = 0;

imagesToChoose = document.querySelectorAll(".left-image");
startGame = document.querySelector('.continue');
blurredElements = document.querySelectorAll('#blurred');
computerWinText = document.querySelector('#computer-wins');
userWinsText = document.querySelector('#user-wins');
startGame.addEventListener('click', playGame);
roundsText = document.querySelector(".rounds-text");

function playGame() {
    rounds = 1;
    roundsText.innerText = "Rounds: "
    userWins = 0;
    computerWins = 0;
    userWinsText.innerText = "User Wins:";
    computerWinText.innerText = "Computer Wins:";
    startGame.style.display = 'none';
    imagesToChoose.forEach(image => image.style.display = "flex");
    blurredElements.forEach(element => element.style.filter = 'none');
    imagesToChoose.forEach(image => image.addEventListener('click', beginGame));
}



function beginGame(e) {
    id = e.target.getAttribute('id');

    if (id == 'left-rock') {
        userChoice = 1;
        logic(userChoice);
    }

    else if (id == 'left-paper') {
        userChoice = 2;
        logic(userChoice);
    }


    else if (id == 'left-scissors') {
        userChoice = 3;
        logic(userChoice);
    } 
}



function logic(logicDecider) {
    computerChoice = Math.ceil(Math.random() * 3);
    switch (logicDecider) {
        case 1: 
            if (computerChoice == 1) {
                winOrLose = 1;
                updateDOM(winOrLose);
                }

            else if (computerChoice == 2) {
                winOrLose = 0;
                updateDOM(winOrLose);
            }

                    
            else if (computerChoice == 3) {
                winOrLose = 2;
                updateDOM(winOrLose);
            }

        break;

        case 2:
            if (computerChoice == 1) {
                winOrLose = 2;
                updateDOM(winOrLose);
            }
           
            else if (computerChoice == 2) {
                winOrLose = 1;
                updateDOM(winOrLose);
            }

                    
            else if (computerChoice == 3) {
                winOrLose = 0;
                updateDOM(winOrLose);
            }

        break;


                    
        case 3:
            if (computerChoice == 1) {
                winOrLose = 0;
                updateDOM(winOrLose);
            }

            else if (computerChoice == 2) {
                winOrLose = 2;
                updateDOM(winOrLose);
            }
                    
            else if (computerChoice == 3) {
                winOrLose = 1;
                updateDOM(winOrLose);
            }

        break;
    }
}

function updateDOM(whoWon) {
    userWinsText.innerText = "User Wins:";
    computerWinText.innerText = "Computer Wins:";
    roundsText.innerText = "Rounds: "
    roundsText.innerText = roundsText.innerText + rounds;
    rounds++;
            
    if (whoWon == 0) {
        computerWins++;
    }

    else if (whoWon == 1) {
        computerWins++;
        userWins++;
    }

    else if (whoWon == 2) {
        userWins++;
    }

    userWinsText.innerText = userWinsText.innerText + userWins;
    computerWinText.innerText = computerWinText.innerText + computerWins;
    endGame(userWins, computerWins);
}
        
function endGame(u, c) {
        
    if (u >= 5 || c >=5 ) {
        
        imagesToChoose.forEach(image => image.style.display = 'none');
        blurredElements.forEach(element => element.style.filter = 'blur(2px)');
        startGame.style.display = 'block';
        startGame.innerText = "Play Again?";   
    }
}

    