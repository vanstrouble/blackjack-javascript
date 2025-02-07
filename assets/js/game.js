let deck = [];
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
    console.log(deck.slice(-5));
    return deck;

}

createDeck();

const takeCard = () => {
    if (deck.length === 0) {
        throw 'No cards left';
    }

    const card = deck.pop();
    console.log(card);
    console.log(deck.slice(-5));
    return card;
};

takeCard();

const valueCard = (card) => {
    const value = card.substring(0, card.length - 1);
    console.log(value);
    return isNaN(value) ? (value === 'A' ? 11 : 10) : value * 1;
};

console.log(valueCard('H'));
