/**
 * Renders a card image to the specified parent element.
 * @param {HTMLElement} parent - The parent element to append the card to
 * @param {string} card - The card to render
 */
export const renderCard = (parent, card) => {
    if (!parent || !(parent instanceof HTMLElement)) {
        throw new Error('Parent must be a valid HTMLElement');
    }
    if (typeof card !== 'string' || card.trim() === '') {
        throw new Error('Card must be a non-empty string');
    }
    const img = document.createElement('img');
    img.src = `/assets/cards/${card}.png`;
    img.classList.add('card-img');
    parent.appendChild(img);
};
