let wordChoice = {
    randomWords : [ 
        `html`, `april`,  `peru`,`cuba`, `pastry`, `sbux`, `paint`
    ],
    pickWord: function () {
        let wordArray = this.randomWords;
        let randomChoice = Math.floor( Math.random() * wordArray.length);
        return wordArray[randomChoice];
    }};
let incorrectGuesses = [];
let correctGuesses = [];
let wrongAnswerTally = 0;
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
    Z : document.getElementById(`z`),};

let selectedWord = wordChoice.pickWord();
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

function displayTheMan() {
    switch(wrongAnswerTally) {
        case 0: 
            document.querySelector(`div.ground`).style.display =  `none`;
            document.querySelector(`div.stick`).style.display = `none`;
            document.querySelector(`div.hanger`).style.display = `none`;
            document.querySelector(`div.rope`).style.display =`none`;
            document.querySelector(`div.head`).style.display = `none`;
            document.querySelector(`div.body`).style.display = `none`;
            document.querySelector(`div.rArm`).style.display = `none`;
            document.querySelector(`div.lArm`).style.display = `none`;
            document.querySelector(`div.lFoot`).style.display = `none`;
            document.querySelector(`div.rFoot`).style.display = `none`;
            break;
        case 1:
            document.querySelector(`div.ground`).style.display = `block`;
            break;
        case 2:
            document.querySelector(`div.stick`).style.display = `block`;
            break;
        case 3 :
            document.querySelector(`div.hanger`).style.display = `block`;
            break;
        case 4:
            document.querySelector(`div.rope`).style.display = `block`;
            break;
        case 5:
            document.querySelector(`div.head`).style.display = `block`;
            break;
        case 6:
            document.querySelector(`div.body`).style.display = `block`;
            break;
        case 7:            
            document.querySelector(`div.lArm`).style.display = `block`;
            break;
        case 8:
            document.querySelector(`div.rArm`).style.display = `block`;
            break;
        case 9:
            document.querySelector(`div.lFoot`).style.display = `block`;
            break;
        case 10:
            document.querySelector(`div.rFoot`).style.display = `block`;
            console.log(`Wrong, Game Over!`);
            break;
        default: 
            console.log(`Game is Done!`);
            resetGame();
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
                        console.log(`You Won!`);
                        return resetGame();
                    }
                }
                
                if(!selectedWord.includes(pickedLetter) 
                    && !incorrectGuesses.includes(pickedLetter)){
                    incorrectGuesses.push(pickedLetter);
                    alphabet[letter].style.color = `white`; 
                    alphabet[letter].style.backgroundColor = `grey`; 
                    alphabet[letter].style.boxShadow = `none`;
                    alphabet[letter].style.cursor = `auto`;
                    document.getElementById(`wrongLetters`)
                        .innerHTML= incorrectGuesses.toString();

                    wrongAnswerTally++;
                    displayTheMan();
                }
            } 
        }); 
    }
}

function resetGame() {
    incorrectGuesses = [];
    correctGuesses = [];
    wrongAnswerTally = 0;
    selectedWord = wordChoice.pickWord();
    for (let letter in alphabet) {
        alphabet[letter].style.color = `black`; 
        alphabet[letter].style.backgroundColor = `white`;
        alphabet[letter].style.borderColor = `black`;
        alphabet[letter].style.boxShadow = `2px 2px 2px black`;
    }    
    console.log(selectedWord);
    document.getElementById(`underlines`).replaceChildren();
    document.getElementById(`wrongLetters`).replaceChildren();
    displayUnderlines();
    displayTheMan();
}

playButton.addEventListener(`click`, function () {
    const fullGame = document.getElementById(`theGame`);
    const gameHeading = document.getElementById(`gameHeader`);
    const reset = document.getElementById(`reset`);

    fullGame.style.display = `block`;
    playButton.style.display = `none`;
    gameHeading.innerHTML = `Guess A Letter!`;
    displayUnderlines();
    clickedLetter();

    reset.addEventListener(`click`, function () {
        resetGame();
    });
});

