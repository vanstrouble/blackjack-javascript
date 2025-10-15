/**
 * Creates and shuffles a deck of playing cards; returns the deck and a map of card values.
 * @returns {{deck: string[], valueMap: Record<string, number>}}
 */
export const createDeck = () => {
    const suits = ['C', 'D', 'H', 'S'];
    const specialCards = ['A', 'J', 'Q', 'K'];
    const deck = suits.flatMap(suit =>
        [...Array(9).keys()].map(i => (i + 2) + suit).concat(specialCards.map(card => card + suit))
    );
    for (let i = deck.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    const valueMap = Object.create(null);
    for (const card of deck) {
        const raw = card.slice(0, -1);
        valueMap[card] = isNaN(raw) ? (raw === 'A' ? 11 : 10) : Number(raw);
    }
    return { deck, valueMap };
};
