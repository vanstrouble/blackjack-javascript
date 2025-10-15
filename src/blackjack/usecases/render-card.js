/**
 * Renders a card image to the specified parent element.
 * @param {HTMLElement} parent - The parent element to append the card to
 * @param {string} card - The card to render
 */
export const renderCard = (parent, card) => {
    const img = document.createElement('img');
    img.src = `/assets/cards/${card}.png`;
    img.classList.add('card-img');
    parent.appendChild(img);
};
