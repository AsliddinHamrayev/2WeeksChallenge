
let playerScoreDOM = document.querySelector('.player-score')
let computerScoreDOM = document.querySelector('.computer-score')
let result = document.querySelector('#result')

let playerScore = 0
let computerScore = 0

let winner = ''


let winners = []

function displayResults() {
    result.innerHTML = ''
    winners.forEach((item) => {
         let div = document.createElement('li')
         div.classList.add('result')
         div.innerHTML += item.text  
         result.appendChild(div) 
 })

}

playerScoreDOM.innerHTML = playerScore
computerScoreDOM.innerHTML = computerScore

function play(playerChoice) {
    
    playerScoreDOM.innerHTML = playerScore
    computerScoreDOM.innerHTML = computerScore
    let computerChoice = getComputerChoice()
    console.log(playerChoice);
    getWinner(playerChoice, computerChoice)
    console.log(playerScore, this.computerScore);
    finishGame(playerScore, computerScore)
}

function getPlayerChoice(playerChoice) {
    if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors') {
        return playerChoice
    } else {
        alert('choose valid answer');
        window.location.reload(true)
    }
}

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum]
}

function getWinner(p, c) {
    if (c == p) {
        winner = 'draw'
    } else if (p == 'scissors') {
        if (c == 'paper') {
            winner = 'Player Won'
            playerScore++
        } else {
            winner = 'Computer Won'
            computerScore++
        }
    } else if (p == 'rock') {
        if (c == 'paper') {
            winner = 'Computer Won'
            computerScore++
        } else {
            winner = 'Player Won'
            playerScore++
        }
    } else if (p == 'paper') {
        if (c == 'rock') {
            winner = 'Player Won'
            playerScore++
        } else {
            winner = 'Computer Won'
            computerScore++
        }
    }

    winners.push(
        {
        text: winner
        }
    )
    displayResults()
}


function finishGame(player, comp) {
    if(player === 5 || comp === 5){
        if(player < comp){
            alert('Computer won')
        }
        else{
            alert('You won')
        }
        playerScore = 0
        computerScore = 0 
        window.location.reload(true)

    }
}