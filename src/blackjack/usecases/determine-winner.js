export const determineWinner = (computerPoints, playerPoints) => {
    setTimeout(() => {
        if (computerPoints === playerPoints) {
            alert('Draw');
        } else if (playerPoints > 21 || (computerPoints <= 21 && computerPoints > playerPoints)) {
            alert('Computer wins');
        } else {
            alert('CONGRATULATIONS! You win');
        }
    }, 500);
};
