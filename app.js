//Game values
let min = 5,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input');
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
      window.location.reload();  
    }
})

//Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    console.log(guess);

    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    } else if(guess === winningNum) {
    gameOver(true,`${winningNum} is correct Bro!! You win the prize!!`)
        
    } else {
        guessInput.style.borderColor = 'red';
        guessInput.value = '';
    //wrong number: subtract guess
    guessesLeft -=1;
    setMessage(`${guess} is not correct! you have ${guessesLeft} guess left, better make 'em count`, 'red');
    if(guessesLeft === 0) {
       gameOver(false, `loser! you lost all your lives - the correct number was ${winningNum} dummy!!`, 'pink');
        
    }
    }
})

//game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    //make border green on win
    guessInput.style.borderColor = color;
    //text color
    message.style.color = color;
    //winning message
    setMessage(msg);

//Play again?
guessBtn.value = 'Play Again';
guessBtn.className += 'play-again';
}

//randomize winning number
function getRandomNum(min, max) {
    console.log(Math.floor(Math.random()*(max-min+1)+min));
    return(Math.floor(Math.random()*(max-min+1)+min))
}

//Set message function
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

