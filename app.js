const game = () => {

    //Initializations
    let pScore =0;
    let cScore =0;
    if (localStorage.getItem('compscore')){
       document.querySelector('.computer-score p').textContent = localStorage.getItem("compscore");
       document.querySelector('.player-score p').textContent = localStorage.getItem("playerscore");
       pScore = localStorage.getItem("playerscore");
       cScore = localStorage.getItem("compscore");
    }else{
        pScore = 0
        cSscore = 0
    }


    //Start the game
    const startGame = () => {
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const playBtn = document.querySelector('.intro button');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add("fadeIn");
        })
        
    };
    //Play the game
    const playGame = () => {
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')
        const hands = document.querySelectorAll('.hands img')

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = ""
            })
        })

        //Computer Choices
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option =>{
            option.addEventListener('click', function(){
                
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber]

                setTimeout(() => {
                    //Compare the Hands
                    compareHands(this.textContent, computerChoice)

                    //Update Images
                    playerHand.src = `/img/${this.textContent}.png`
                    computerHand.src = `/img/${computerChoice}.png`
                }, 2000)

                //Animation
                playerHand.style.animation ="shakePlayer 2s ease"
                computerHand.style.animation ="shakeComputer 2s ease"
                
            })
        })

    };

    //Update the Score
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore;
        computerScore.textContent = cScore
        localStorage.setItem("playerscore", pScore);
        localStorage.setItem("compscore", cScore);
    }

    //Compare both hands
    const compareHands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector('.winner')


        if(playerChoice === computerChoice){
            winner.textContent = 'It is Tie!'
            return

        }

        // If Rock
        if (playerChoice ==='rock'){
            if(computerChoice ==='scissors'){
                winner.textContent = 'Player wins!'
                pScore++
                updateScore()
                return

            }else{
                winner.textContent ='Computer Wins!';
                cScore++
                updateScore()
                return

            }
        }


        // If Paper
        if (playerChoice ==='paper'){
            if(computerChoice ==='scissors'){
                winner.textContent = 'Computer wins!'
                cScore++
                updateScore()
                return

            }else{
                winner.textContent ='Player Wins!';
                pScore++
                updateScore()
                return

            }
        }


        // If Scissors
        if (playerChoice ==='scissors'){
            if(computerChoice ==='rock'){
                winner.textContent = 'Computer wins'
                cScore++
                updateScore()
                return

            }else{
                winner.textContent ='Player Wins';
                pScore++
                updateScore()
                return

            }
        }




    };


    //Reset
    const resetScore = () => {
        document.querySelector('.reset-score').addEventListener('click', () =>{
            localStorage.clear
            pScore = 0;
            cScore = 0;
            document.querySelector('.computer-score p').textContent = cScore
            document.querySelector('.player-score p').textContent = pScore
        })

    }


    //Call all inner functions here
    startGame();
    playGame();
    resetScore();
    
}

game();