/**
 * Gets the numeric value of a card.
 * @param {string} card - The card to evaluate
 * @param {Record<string, number>} valueMap - Map of card values
 * @returns {number} The numeric value of the card
 */
export const valueCard = (card, valueMap) => valueMap[card];
