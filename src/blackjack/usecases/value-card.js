/**
 * Gets the numeric value of a card.
 * @param {string} card - The card to evaluate
 * @param {Record<string, number>} valueMap - Map of card values
 * @returns {number} The numeric value of the card
 */
export const valueCard = (card, valueMap) => {
    if (typeof card !== 'string' || card.trim() === '') {
        throw new Error('Card must be a non-empty string');
    }
    if (!valueMap || typeof valueMap !== 'object') {
        throw new Error('ValueMap must be an object');
    }
    if (!(card in valueMap)) {
        throw new Error(`Card "${card}" not found in valueMap`);
    }
    return valueMap[card];
};
