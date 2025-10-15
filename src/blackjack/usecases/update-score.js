/**
 * Updates the score display element.
 * @param {HTMLElement} element - The element to update
 * @param {number} points - The score to display
 */
export const updateScore = (element, points) => {
    if (!element || !(element instanceof HTMLElement)) {
        throw new Error('Element must be a valid HTMLElement');
    }
    if (typeof points !== 'number' || isNaN(points) || points < 0) {
        throw new Error('Points must be a non-negative number');
    }
    element.textContent = `Score: ${points}`;
};
