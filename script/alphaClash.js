function play() {
    // hide screen and show only play ground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-screen');
    
    // set new life
    const newLifeElemnt = document.getElementById('current-life');
    newLifeElemnt.innerText = 5;
    const currentScoreElemnt = document.getElementById('current-score');
    currentScoreElemnt.innerText = 0;
    
    continueGame()
}

function gameOver() {
    hideElementById('play-screen');
    showElementById('final-score');
    const lastScore = getTextElementValueById('current-score');
    
    
}

function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBackGroundKeboardColor(alphabet);
}

function keyboardButtonHandler(event) {
    const userPress = event.key.toLowerCase();
    console.log(userPress);
    const currentAlphabet = document.getElementById('current-alphabet');
    const currentAlphabetInnerText = currentAlphabet.innerText;
    const screenCurrentAlphabet = currentAlphabetInnerText.toLowerCase();
    console.log(userPress, screenCurrentAlphabet);
    // validation of user press and screen current alphabet
    if (userPress === screenCurrentAlphabet) {
        // update score:
        const currentScoreElement = document.getElementById('current-score');
        // const currentSoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentSoreText);
        // above work make function and given below;
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore
        
        // start a new round
        removeBackgroundKeyboardColor(screenCurrentAlphabet);
        continueGame()
    } else {
        // update life
        const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // above work make function and given below;
        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
        if (newLife === 0) {
            gameOver();
        } else {
            
        }
        
    }

}

// capture keyboard key press == this is call callback function, because if keypress and it up then this function will be run

document.addEventListener('keyup', keyboardButtonHandler);

