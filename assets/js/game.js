let deck = [];
let playerPoints = 0;
let computerPoints = 0;

// HTML refrences
const btnRequest = document.querySelector('#btn-request');
const btnStop = document.querySelector('#btn-stop');
const btnNewGame = document.querySelector('#btn-new-game');

const playerCards = document.querySelector('#player-cards');
const computerCards = document.querySelector('#computer-cards');
const scoreElements = document.querySelectorAll('.score .badge');
const playerScoreElement = scoreElements[0];
const computerScoreElement = scoreElements[1];


const createDeck = () => {
    const suits = ['C', 'D', 'H', 'S'];
    const specialCards = ['A', 'J', 'Q', 'K'];
    deck = suits.flatMap(suit =>
        [...Array(9).keys()].map(i => (i + 2) + suit).concat(specialCards.map(card => card + suit))
    );
    deck = _.shuffle(deck);
    return deck;
};

const takeCard = () => {
    if (deck.length === 0) {
        throw 'No cards left';
    }

    const card = deck.pop();
    return card;
};

const valueCard = (card) => {
    const value = card.substring(0, card.length - 1);
    return isNaN(value) ? (value === 'A' ? 11 : 10) : value * 1;
};

const determineWinner = () => {
    setTimeout(() => {
        if (computerPoints === playerPoints) {
            alert('Draw');
        } else if (playerPoints > 21 || (computerPoints <= 21 && computerPoints > playerPoints)) {
            alert('Computer wins');
        } else {
            alert('CONGRATULATIONS! You win');
        }
    }, 500);
};

const turnComputer = (minPoints) => {
    do {
        const card = takeCard();
        computerPoints += valueCard(card);
        updateScore(computerScoreElement, computerPoints);

        const imgCard = document.createElement('img');
        imgCard.src = `assets/cards/${card}.png`;
        imgCard.classList.add('card-img');
        computerCards.appendChild(imgCard);

        if (minPoints > 21) {
            break;
        }
    } while (computerPoints < minPoints && minPoints <= 21);

    determineWinner();
};

const updateScore = (element, points) => {
    element.textContent = `Score: ${points}`;
};

// Events
createDeck();

btnRequest.addEventListener('click', () => {
    const card = takeCard();

    playerPoints += valueCard(card);
    updateScore(playerScoreElement, playerPoints);

    const imgCard = document.createElement('img');
    imgCard.src = `assets/cards/${card}.png`;
    imgCard.classList.add('card-img');
    playerCards.appendChild(imgCard);

    if (playerPoints > 21) {
        btnRequest.disabled = true;
        btnStop.disabled = true;
        turnComputer(playerPoints);
    } else if (playerPoints === 21) {
        determineWinner();
        btnRequest.disabled = true;
        btnStop.disabled = true;
    }
});

btnStop.addEventListener('click', () => {
    btnRequest.disabled = true;
    btnStop.disabled = true;
    turnComputer(playerPoints);
});

btnNewGame.addEventListener('click', () => {
    deck = [];
    playerPoints = 0;
    computerPoints = 0;
    playerScoreElement.textContent = 'Score: 0';
    computerScoreElement.textContent = 'Score: 0';
    playerCards.innerHTML = '';
    computerCards.innerHTML = '';
    btnRequest.disabled = false;
    btnStop.disabled = false;
    createDeck();
});
