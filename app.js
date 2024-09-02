const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")

const possibleChoice = document.querySelectorAll("button")

let userChoice
let computerChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
   const randomNumber = Math.floor(Math.random() *3) +1 // or you can use possibleChoice.length

   if(randomNumber === 1){
    computerChoice = 'rock'
   }
   if(randomNumber === 2){
    computerChoice = 'sicssor'
   }
   if(randomNumber === 3){
    computerChoice = 'papper'
   }

   computerChoiceDisplay.innerHTML = computerChoice
}
function getResult(){
    if(computerChoice === userChoice){
        result = 'you are draw!'
    }
    
    if(computerChoice === 'rock' && userChoice === 'papper'){
        result = 'you win!'
    }
    if(computerChoice === 'rock' && userChoice === 'sicssor'){
        result = 'you lose!'
    }
    if(computerChoice === 'papper' && userChoice === 'sicssor'){
        result = 'you win!'
    }
    if(computerChoice === 'papper' && userChoice === 'rock'){
        result = 'you lose!'
    }
    if(computerChoice === 'sicssor' && userChoice === 'papper'){
        result = 'you lose!'
    }
    if(computerChoice === 'sicssor' && userChoice === 'rock'){
        result = 'you win!'
    }

    resultDisplay.innerHTML = result
}