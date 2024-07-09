function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabet(){
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}

function setBackGroundKeboardColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
function removeBackgroundKeyboardColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = getElementById(elementId);
    element.innerText = value; 
}
