let deck = [];
let playerPoints = 0;

// HTML refrences
const btnRequest = document.querySelector('#btn-request');
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

createDeck();

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

const updateScore = (element, points) => {
    element.textContent = `Score: ${points}`;
};

// Event
btnRequest.addEventListener('click', () => {
    const card = takeCard();
    console.log(card);
    playerPoints += valueCard(card);
    console.log(playerPoints);
    updateScore(playerScoreElement, playerPoints);
});
