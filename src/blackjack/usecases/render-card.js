export const renderCard = (parent, card) => {
    const img = document.createElement('img');
    img.src = `/assets/cards/${card}.png`;
    img.classList.add('card-img');
    parent.appendChild(img);
};
