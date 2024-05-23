const cards = ['diamond', 'spade', 'heart', 'club'];

const playerCards = document.querySelector('.userCard');
const computerCards = document.querySelector('.compCard');

function play () {
    let dealtCards = []; 
    let currentCard; 
    
    while (currentCard !== 'spade') {
        let randomCardIndex = Math.floor(Math.random() * 4);
        currentCard = cards[randomCardIndex];
        dealtCards.push(currentCard);
    }
    
    dealtCards.push('WINNER', 'LOSER');
    
    for (let i = 0; i < dealtCards.length; i++) {
        if (i % 2 === 0) {
            playerCards.textContent += dealtCards[i] + ' ';
        } else {
            computerCards.textContent += dealtCards[i] + ' ';   
        }
    }
    
    endGame();
}

function endGame() {
    dealButton.disabled = true;
    const container = document.getElementById('resetButtonContainer2');
    resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Game';
    container.appendChild(resetButton);
    resetButton.addEventListener('click', restartGame);
}

function restartGame() {
    playerCards.textContent = '';
    computerCards.textContent = '';
    resetButton.parentNode.removeChild(resetButton);
    dealButton.disabled = false;
}

document.getElementById("dealButton").addEventListener('click', play);

 
