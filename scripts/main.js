const playButton = document.getElementById(`playButton`);


playButton.addEventListener(`click`, function () {
     
    const fullGame = document.getElementById(`theGame`);
    const gameHeading = document.getElementById(`gameHeader`);
   
    fullGame.style.display = `block`;
    playButton.style.display = `none`;
    gameHeading.innerHTML = `Guess A Letter!`;
    // alert(`Let the games begin`);
});


// This section of code is just testing Keyboard
let a = alphabet.A;
function pickWord() {
    let wordChoice = [`lobster`, `lover`, `girlie`,`lodgreen`];
    let randomChoice = Math.floor( Math.random() * wordChoice.length);
    // console.log(wordChoice[randomChoice]);
    return wordChoice[randomChoice];
}

let word = pickWord();
console.log(word);