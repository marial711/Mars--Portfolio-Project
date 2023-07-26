const playButton = document.getElementById(`playButton`);




// This section of code is just testing Keyboard
let a = alphabet.A;
function pickWord() {
    let wordChoice = [`lobster`, `lover`, `girlie`,`lodgreen`];
    let wordChoice = [
        `html`, `april`, `responsive`, `spanish`, `peru`,
        `cuba`, `pastries`, `starbucks`, `paint`
    ];
    let randomChoice = Math.floor( Math.random() * wordChoice.length);
    // console.log(wordChoice[randomChoice]);
    return wordChoice[randomChoice];
}

let word = pickWord();
console.log(word);    const fullGame = document.getElementById(`theGame`);
const selectedWord = pickWord();

function displayWord() {
    let wordDisplay = document.getElementById(`theAnswer`);
    return wordDisplay.innerHTML = selectedWord;
}

function displayUnderlines() {
    for(let i = 0; i < selectedWord.length; i++) {
        let node = document.createElement(`p`);
        let textnode = document.createTextNode(`${selectedWord[i]}`);
        node.appendChild(textnode);    
        document.getElementById(`underlines`).appendChild(node);
    }        
}

playButton.addEventListener(`click`, function () {
    const fullGame = document.getElementById(`theGame`);
    const gameHeading = document.getElementById(`gameHeader`);
   
    fullGame.style.display = `block`;
    playButton.style.display = `none`;
    gameHeading.innerHTML = `Guess A Letter!`;
    // alert(`Let the games begin`);
    displayUnderlines();
});