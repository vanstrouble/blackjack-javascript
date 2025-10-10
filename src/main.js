(() => {
    'use strict';

    let deck = [];
    let playerPoints = 0;
    let computerPoints = 0;
    let valueMap = Object.create(null);

    const btnRequest = document.querySelector('#btn-request');
    const btnStop = document.querySelector('#btn-stop');
    const btnNewGame = document.querySelector('#btn-new-game');

    const playerCards = document.querySelector('#player-cards');
    const computerCards = document.querySelector('#computer-cards');
    const scoreElements = document.querySelectorAll('.score .badge');
    const playerScoreElement = scoreElements[0];
    const computerScoreElement = scoreElements[1];

    const createDeck = () => {
        const suits = ['C', 'D', 'H', 'S'];
        const specialCards = ['A', 'J', 'Q', 'K'];
        deck = suits.flatMap(suit =>
            [...Array(9).keys()].map(i => (i + 2) + suit).concat(specialCards.map(card => card + suit))
        );
        for (let i = deck.length - 1; i > 0; i--) {
            const j = (Math.random() * (i + 1)) | 0;
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        valueMap = Object.create(null);
        for (const card of deck) {
            const raw = card.slice(0, -1);
            valueMap[card] = isNaN(raw) ? (raw === 'A' ? 11 : 10) : Number(raw);
        }
        return deck;
    };

    const takeCard = () => {
        if (deck.length === 0) {
            throw 'No cards left';
        }
        const card = deck.pop();
        return card;
    };

    const valueCard = (card) => valueMap[card];

    const renderCard = (parent, card) => {
        const img = document.createElement('img');
        img.src = `assets/cards/${card}.png`;
        img.classList.add('card-img');
        parent.appendChild(img);
    };

    const setActionsEnabled = (enabled) => {
        btnRequest.disabled = !enabled;
        btnStop.disabled = !enabled;
    };

    const determineWinner = () => {
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

    const turnComputer = (minPoints) => {
        do {
            const card = takeCard();
            computerPoints += valueCard(card);
            updateScore(computerScoreElement, computerPoints);
            renderCard(computerCards, card);
            if (minPoints > 21) break;
        } while (computerPoints < minPoints && minPoints <= 21);
        determineWinner();
    };

    const updateScore = (element, points) => {
        element.textContent = `Score: ${points}`;
    };

    createDeck();

    btnRequest.addEventListener('click', () => {
        const card = takeCard();
        playerPoints += valueCard(card);
        updateScore(playerScoreElement, playerPoints);
        renderCard(playerCards, card);

        if (playerPoints > 21) {
            setActionsEnabled(false);
            turnComputer(playerPoints);
        } else if (playerPoints === 21) {
            setActionsEnabled(false);
            determineWinner();
        }
    });

    btnStop.addEventListener('click', () => {
        setActionsEnabled(false);
        turnComputer(playerPoints);
    });

    btnNewGame.addEventListener('click', () => {
        deck = [];
        playerPoints = 0;
        computerPoints = 0;
        playerScoreElement.textContent = 'Score: 0';
        computerScoreElement.textContent = 'Score: 0';
        playerCards.innerHTML = '';
        computerCards.innerHTML = '';
        setActionsEnabled(true);
        createDeck();
    });

})();
