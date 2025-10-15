/**
 * Determines and displays the winner of the game.
 * @param {number} computerPoints - Computer's total points
 * @param {number} playerPoints - Player's total points
 */
export const determineWinner = (computerPoints, playerPoints) => {
    if (typeof computerPoints !== 'number' || isNaN(computerPoints) || computerPoints < 0) {
        throw new Error('Computer points must be a non-negative number');
    }
    if (typeof playerPoints !== 'number' || isNaN(playerPoints) || playerPoints < 0) {
        throw new Error('Player points must be a non-negative number');
    }

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
