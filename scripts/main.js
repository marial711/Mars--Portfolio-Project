let alphabet = {
    A : document.getElementById(`a`),
    B : document.getElementById(`b`),
    C : document.getElementById(`c`),
    D : document.getElementById(`d`),
    E : document.getElementById(`e`),
    F : document.getElementById(`f`),
    G : document.getElementById(`g`),
    H : document.getElementById(`h`),
    I : document.getElementById(`i`),
    J : document.getElementById(`j`),
    K : document.getElementById(`k`),
    L : document.getElementById(`l`),
    M : document.getElementById(`m`),
    N : document.getElementById(`n`),
    O : document.getElementById(`o`),
    P : document.getElementById(`p`),
    Q : document.getElementById(`q`),
    R : document.getElementById(`r`),
    S : document.getElementById(`s`),
    T : document.getElementById(`t`),
    U : document.getElementById(`u`),
    V : document.getElementById(`v`),
    W : document.getElementById(`w`),
    X : document.getElementById(`x`),
    Y : document.getElementById(`y`),
    Z : document.getElementById(`z`)
};
let incorrectGuesses = [];
let correctGuesses = [];

function pickWord() {
    let wordChoice = [
        `html`, `april`,  `peru`,
        `cuba`, `pastry`, `sbux`, `paint`
    ];
    let randomChoice = Math.floor( Math.random() * wordChoice.length);
    return wordChoice[randomChoice];
}

let selectedWord = pickWord();
const playButton = document.getElementById(`playButton`);

function displayUnderlines() {
    for(let i = 0; i < selectedWord.length; i++) {
        let node = document.createElement(`p`);
        let textnode = document.createTextNode(`${selectedWord[i]}`);
        node.setAttribute(`id`, `${selectedWord[i]}`);
        node.appendChild(textnode);    
        document.getElementById(`underlines`).appendChild(node);
    }        
}

function clickedLetter() {
    for (let letter in alphabet) {
        alphabet[letter].addEventListener(`click`, function () {
            let pickedLetter = alphabet[letter].innerHTML;
            let editLetter = document.getElementById(`${pickedLetter}`);

            for(let i = 0; i < selectedWord.length; i++) {    
                if(pickedLetter === selectedWord[i] 
                        && !correctGuesses.includes(pickedLetter)) {
                    editLetter.style.color = `black`; 
                    alphabet[letter].style.color = `white`; 
                    alphabet[letter].style.backgroundColor = `lightgreen`;
                    alphabet[letter].style.borderColor = `green`;
                    alphabet[letter].style.boxShadow = `none`;
                    correctGuesses.push(pickedLetter);
                    if(correctGuesses.length == selectedWord.length) {
                        alert(`You won!`);
                    }
                }
                
                if(!selectedWord.includes(pickedLetter) 
                && !incorrectGuesses.includes(pickedLetter)){
                    incorrectGuesses.push(pickedLetter);
                    alphabet[letter].style.color = `white`; 
                    alphabet[letter].style.backgroundColor = `grey`; 
                    alphabet[letter].style.boxShadow = `none`;
                    document.getElementById(`wrongLetters`)
                        .innerHTML= incorrectGuesses.toString();
                }
            } 
        }); 
    }
}

playButton.addEventListener(`click`, function () {
    const fullGame = document.getElementById(`theGame`);
    const gameHeading = document.getElementById(`gameHeader`);

    fullGame.style.display = `block`;
    playButton.style.display = `none`;
    gameHeading.innerHTML = `Guess A Letter!`;
    displayUnderlines();
    clickedLetter();
   
});

