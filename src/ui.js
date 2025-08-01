import{Ship, GameBoard, Player} from './classes.js';
// import Engine from './gameEngine.js';
// const engine= new Engine();

function createGameBoard(engine){
    const ships=[5, 4, 3, 3, 2];
    let curr=0;
    const boardArray=Array.from({ length: 10 }, () => Array(10).fill(null));
    const placedShips=[];
    function isValid(x,y,leng){
        if(y+leng>10){
            return false;
        }
        for(let i=0; i<leng; i++){
            if(boardArray[x][y+i]!==null){
                return false;
            }
        }
        return true;
    }
    function place(x,y,leng){
        for(let i=0;i<leng;i++){
            boardArray[x][y+i]='S';
        }
        placedShips.push({x,y,leng});
        if(engine){
            engine.placeShip(x, y, leng);
        }
    }
    const initialiseBoard=document.createElement('div');
    initialiseBoard.classList.add('initialise-board');
    for(let i=0; i<10; i++){
        const row=document.createElement('div');
        row.classList.add('row');
        for(let j=0; j<10; j++){
            const cell=document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x=i;
            cell.dataset.y=j;
            row.appendChild(cell);
            cell.addEventListener('click', () => {
                if(curr>=ships.length){
                    return;
                }
                const leng=ships[curr];
                if(isValid(i,j,leng)){
                    place(i,j,leng);
                    for(let k=0; k<leng; k++){
                        const targetCell=document.querySelector(`.cell[data-x="${i}"][data-y="${j+k}"]`);
                        if(targetCell){
                            targetCell.textContent = 'S';
                            targetCell.classList.add('ship');
                        }
                    }
                    curr++;
                }
            });
        }
        initialiseBoard.appendChild(row);
    }
    const startButton=document.createElement('button');
    startButton.textContent='Start Game';
    startButton.classList.add('start-button');
    startButton.addEventListener('click', () => {
        if(curr < ships.length) {
            alert('Please place all ships before starting the game.');
            return;
        }
        engine.startIt(boardArray);
    });
    initialiseBoard.appendChild(startButton);
    return initialiseBoard;
}
// function initialise(){
//     document.body.innerHTML = '';
//     const gameBoard=createGameBoard();
//     document.body.appendChild(gameBoard);
//     const startButton=document.createElement('button');
//     startButton.textContent='Start Game';
//     startButton.classList.add('start-button');
//     startButton.addEventListener('click', () => {
//         engine.startIt();
//     });
//     document.body.appendChild(startButton);
// }
// initialise();
export { createGameBoard };