export const takeCard = (deck) => {
    if (deck.length === 0) {
        throw 'No cards left';
    }
    const card = deck.pop();
    return card;
};
