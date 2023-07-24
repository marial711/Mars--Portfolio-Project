const playButton = document.getElementById(`playButton`);
const fullGame = document.getElementById(`theGame`);
const gameHeading = document.getElementById(`gameHeader`);

playButton.addEventListener(`click`, function () {
    fullGame.style.display = `block`;
    playButton.style.display = `none`;
    gameHeading.innerHTML = `Guess A Letter!`;
});