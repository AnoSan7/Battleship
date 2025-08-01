import{Ship, GameBoard, Player} from './classes.js';
function createGameBoard(){
    const initialiseBoard=document.createElement('div');
    initialiseBoard.classList.add('initialise-board');
    for(let i=0; i<10; i++){
        const row=document.createElement('div');
        row.classList.add('row');
        for(let j=0; j<10; j++){
            const cell=document.createElement('div');
            cell.classList.add('cell');
            // cell.dataset.x=i;
            // cell.dataset.y=j;
            row.appendChild(cell);
            cell.addEventListener('click', () => {
                cell.classList.add('hit');
                cell.textContent = 'X';
            });
        }
        initialiseBoard.appendChild(row);
    }
    return initialiseBoard;
}
function initialise(){
    document.body.innerHTML = '';
    const gameBoard=createGameBoard();
    document.body.appendChild(gameBoard);
    const startButton=document.createElement('button');
    startButton.textContent='Start Game';
    startButton.classList.add('start-button');
    startButton.addEventListener('click', startGame);
    document.body.appendChild(startButton);
}
initialise();
function startGame(){
    const player1=new Player('Player 1');
    const player2=new Player('Player 2');
    const gameBoard1=createGameBoard();
    const gameBoard2=createGameBoard();
    document.body.innerHTML = '';
    const boards=document.createElement('div');
    boards.classList.add('boards');
    document.body.appendChild(boards);
    boards.appendChild(gameBoard1);
    boards.appendChild(gameBoard2);
    const newGameButton=document.createElement('button');
    newGameButton.textContent='New Game';
    newGameButton.classList.add('new-game-button');
    newGameButton.addEventListener('click', initialise);
    document.body.appendChild(newGameButton);
}