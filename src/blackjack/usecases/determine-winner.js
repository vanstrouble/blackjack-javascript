/**
 * Determines and displays the winner of the game.
 * @param {number} computerPoints - Computer's total points
 * @param {number} playerPoints - Player's total points
 */
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
