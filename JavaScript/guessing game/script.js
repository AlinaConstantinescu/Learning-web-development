let randomNumber = Math.floor(Math.random() * 100) +1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.loworHi');

let guessSubmit = document.querySelectorAll('.guessSubmit');
let guessField = document.querySelectorAll('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guess: ';
    }
    guesses.textContent += userGuess + '';

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congratulation! YOU GOT IT RIGHT!";
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER !!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was to low';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was to high!"
        }
    }

    guessCount ++;
    guessField.value = '';
    guessField.focus();
}

