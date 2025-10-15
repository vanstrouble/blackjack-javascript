/**
 * Takes a card from the deck.
 * @param {string[]} deck - The deck of cards
 * @returns {string} The card taken from the deck
 */
export const takeCard = (deck) => {
    if (deck.length === 0) {
        throw new Error('No cards left in deck');
    }
    return deck.pop();
};
