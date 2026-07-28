const cells = document.querySelectorAll('.cell');
const currentPlayerDisplay = document.getElementById('current-player');
const resetBtn = document.getElementById('reset-btn');
const winnerMessage = document.getElementById('winner-message');
const winnerText = document.getElementById('winner-text');
const playAgainBtn = document.getElementById('play-again-btn');
const scoreXDisplay = document.getElementById('score-x');
const scoreODisplay = document.getElementById('score-o');
const scoreDrawDisplay = document.getElementById('score-draw');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

let scores = {
    X: 0,
    O: 0,
    draw: 0
};

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(event) {
    const cell = event.target;
    const index = parseInt(cell.getAttribute('data-index'));

    if (gameBoard[index] !== '' || !gameActive) {
        return;
    }

    updateCell(cell, index);
    checkResult();
}

function updateCell(cell, index) {
    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add('taken', currentPlayer.toLowerCase());
}

function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    currentPlayerDisplay.textContent = currentPlayer;
}

function checkResult() {
    let roundWon = false;
    let winningCombination = null;

    for (let i = 0; i < winningConditions.length; i++) {
        const condition = winningConditions[i];
        const a = gameBoard[condition[0]];
        const b = gameBoard[condition[1]];
        const c = gameBoard[condition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }

        if (a === b && b === c) {
            roundWon = true;
            winningCombination = condition;
            break;
        }
    }

    if (roundWon) {
        announceWinner(currentPlayer, winningCombination);
        scores[currentPlayer]++;
        updateScoreDisplay();
        gameActive = false;
        return;
    }

    const draw = !gameBoard.includes('');
    if (draw) {
        announceDraw();
        scores.draw++;
        updateScoreDisplay();
        gameActive = false;
        return;
    }

    changePlayer();
}

function announceWinner(player, winningCombination) {
    winnerText.textContent = `¡Jugador ${player} Gana! 🎉`;
    winnerMessage.classList.add('show');
    
    winningCombination.forEach(index => {
        cells[index].classList.add('winning');
    });
}

function announceDraw() {
    winnerText.textContent = '¡Empate! 🤝';
    winnerMessage.classList.add('show');
}

function updateScoreDisplay() {
    scoreXDisplay.textContent = scores.X;
    scoreODisplay.textContent = scores.O;
    scoreDrawDisplay.textContent = scores.draw;
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    currentPlayerDisplay.textContent = currentPlayer;
    winnerMessage.classList.remove('show');

    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('taken', 'x', 'o', 'winning');
    });
}

// Event Listeners
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetBtn.addEventListener('click', resetGame);
playAgainBtn.addEventListener('click', resetGame);

// Soporte para teclado (numpad)
document.addEventListener('keydown', (event) => {
    if (!gameActive) return;
    
    const key = parseInt(event.key);
    if (key >= 1 && key <= 9) {
        const index = key - 1;
        const cell = cells[index];
        
        if (gameBoard[index] === '') {
            updateCell(cell, index);
            checkResult();
        }
    }
});

console.log('🎮 Tic Tac Toe listo!');
console.log('Puedes usar las teclas 1-9 del teclado para jugar');
