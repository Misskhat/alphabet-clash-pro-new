function play(){
    hideElementById('home-screen');
    showElementById('play-screen');
    continueGame()
}

function continueGame(){
   const alphabet = getARandomAlphabet();
   const currentAlphabet = document.getElementById('current-alphabet');
   currentAlphabet.innerText = alphabet;
    setBackGroundKeboardColor(alphabet);
}