import { createDeck, takeCard, valueCard, renderCard, updateScore, determineWinner } from './usecases/index.js';

let deck = [];
let playerPoints = 0;
let computerPoints = 0;
let valueMap = Object.create(null);

const btnRequest = document.querySelector('#btn-request');
const btnStop = document.querySelector('#btn-stop');
const btnNewGame = document.querySelector('#btn-new-game');

const playerCards = document.querySelector('#player-cards');
const computerCards = document.querySelector('#computer-cards');
const scoreElements = document.querySelectorAll('.score .badge');
const playerScoreElement = scoreElements[0];
const computerScoreElement = scoreElements[1];

const setActionsEnabled = (enabled) => {
    btnRequest.disabled = !enabled;
    btnStop.disabled = !enabled;
};

const drawCardFor = (isPlayer) => {
    const card = takeCard(deck);
    const points = valueCard(card, valueMap);

    if (isPlayer) {
        playerPoints += points;
        updateScore(playerScoreElement, playerPoints);
        renderCard(playerCards, card);
    } else {
        computerPoints += points;
        updateScore(computerScoreElement, computerPoints);
        renderCard(computerCards, card);
    }
};

const finishGame = () => {
    setActionsEnabled(false);
    while (computerPoints < playerPoints && computerPoints < 21) {
        drawCardFor(false);
    }
    determineWinner(computerPoints, playerPoints);
};

({ deck, valueMap } = createDeck());

btnRequest.addEventListener('click', () => {
    drawCardFor(true);

    if (playerPoints >= 21) {
        finishGame();
    }
});

btnStop.addEventListener('click', () => {
    finishGame();
});

btnNewGame.addEventListener('click', () => {
    playerPoints = 0;
    computerPoints = 0;
    playerScoreElement.textContent = 'Score: 0';
    computerScoreElement.textContent = 'Score: 0';
    playerCards.innerHTML = '';
    computerCards.innerHTML = '';
    setActionsEnabled(true);
    ({ deck, valueMap } = createDeck());
});
