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

    console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;

}

createDeck();
