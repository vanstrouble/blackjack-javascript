import { createDeck, takeCard, valueCard, renderCard, updateScore, determineWinner } from './usecases';

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

const initGame = () => {
    ({ deck, valueMap } = createDeck());
    setActionsEnabled(true);
};

const finishGame = () => {
    setActionsEnabled(false);
    while (computerPoints < playerPoints && computerPoints < 21) {
        drawCardFor(false);
    }
    determineWinner(computerPoints, playerPoints);
};

const resetGame = () => {
    playerPoints = 0;
    computerPoints = 0;
    updateScore(playerScoreElement, 0);
    updateScore(computerScoreElement, 0);
    playerCards.innerHTML = '';
    computerCards.innerHTML = '';
    initGame();
};

const drawCardFor = (isPlayer) => {
    if (deck.length === 0) {
        console.warn('There are no more cards in the deck');
        finishGame();
        return;
    }

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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGame);
} else {
    initGame();
}

btnRequest.addEventListener('click', () => {
    drawCardFor(true);

    if (playerPoints >= 21) {
        finishGame();
    }
});

btnStop.addEventListener('click', () => {
    finishGame();
});

btnNewGame.addEventListener('click', resetGame);
