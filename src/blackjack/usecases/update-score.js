/**
 * Updates the score display element.
 * @param {HTMLElement} element - The element to update
 * @param {number} points - The score to display
 */
export const updateScore = (element, points) => {
    element.textContent = `Score: ${points}`;
};
