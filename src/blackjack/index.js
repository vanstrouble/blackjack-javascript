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

const turnComputer = (minPoints) => {
    do {
        const card = takeCard(deck);
        computerPoints += valueCard(card, valueMap);
        updateScore(computerScoreElement, computerPoints);
        renderCard(computerCards, card);
        if (minPoints > 21) break;
    } while (computerPoints < minPoints && minPoints <= 21);
    determineWinner(computerPoints, playerPoints);
};

({ deck, valueMap } = createDeck());

btnRequest.addEventListener('click', () => {
    const card = takeCard(deck);
    playerPoints += valueCard(card, valueMap);
    updateScore(playerScoreElement, playerPoints);
    renderCard(playerCards, card);

    if (playerPoints > 21) {
        setActionsEnabled(false);
        turnComputer(playerPoints);
    } else if (playerPoints === 21) {
        setActionsEnabled(false);
        determineWinner(computerPoints, playerPoints);
    }
});

btnStop.addEventListener('click', () => {
    setActionsEnabled(false);
    turnComputer(playerPoints);
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
