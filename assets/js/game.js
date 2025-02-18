let deck = [];
let playerPoints = 0;
let computerPoints = 0;

// HTML refrences
const btnRequest = document.querySelector('#btn-request');
const btnStop = document.querySelector('#btn-stop');

const playerCards = document.querySelector('#player-cards');
const computerCards = document.querySelector('#computer-cards');
const scoreElements = document.querySelectorAll('.score .badge');
const playerScoreElement = scoreElements[0];
const computerScoreElement = scoreElements[1];


const createDeck = () => {
    const suits = ['C', 'D', 'H', 'S'];
    const specialCards = ['A', 'J', 'Q', 'K'];
    for (let i=2; i<=10; i++) {
        for (let suit of suits) {
            deck.push(i + suit);
        }
    }

    for (let specialCard of specialCards) {
        for (let suit of suits) {
            deck.push(specialCard + suit);
        }
    }

    deck = _.shuffle(deck);
    return deck;
}

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

    setTimeout(() => {
        if (computerPoints === playerPoints) {
            console.warn('Draw');
        } else if (playerPoints > 21) {
            console.warn('Computer wins');
        } else if (computerPoints > 21) {
            console.warn('You win');
        } else {
            console.warn('Computer wins');
        }
    }, 100);
};

const updateScore = (element, points) => {
    element.textContent = `Score: ${points}`;
};

// Event
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
        console.warn('You lose');
        btnRequest.disabled = true;
        btnStop.disabled = true;
        turnComputer(playerPoints);
    } else if (playerPoints === 21) {
        console.warn('CONGRATULATIONS! You win');
        btnRequest.disabled = true;
        btnStop.disabled = true;
    }
});

btnStop.addEventListener('click', () => {
    btnRequest.disabled = true;
    btnStop.disabled = true;
    turnComputer(playerPoints);
});
