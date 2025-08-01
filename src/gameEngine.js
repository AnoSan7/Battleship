import { createGameBoard } from "./ui.js";
import {Ship, GameBoard, Player} from "./classes.js";

class Engine {
    constructor() {
        this.player1=new Player('Player 1');
        this.player2=new Player('Player 2');
        this.shipSizes= [5, 4, 3, 3, 2];
        this.computerArray= Array.from({ length: 10 }, () => Array(10).fill(null));
        this.placeComp();
        // this.player2Board = createGameBoard();
    }

    placeComp() {
        for(let i = 0; i < this.shipSizes.length; i++) {
            let placed = false;
            while (!placed) {
                const x = Math.floor(Math.random() * 10);
                const y = Math.floor(Math.random() * 10);
                const leng = this.shipSizes[i];
                if (this.isValidComp(x, y, leng)) {
                    for (let j = 0; j < leng; j++) {
                        this.computerArray[x][y + j] = 'S';
                    }
                    placed = true;
                }
            }
        }
    }

    isValidComp(x, y, leng) {
        if (y + leng > 10) {
            return false;
        }
        for (let i = 0; i < leng; i++) {
            if (this.computerArray[x][y + i] !== null) {
                return false;
            }
        }
        return true;
    }

    startIt(boardArray) {
        document.body.innerHTML='';
        const container = document.createElement('div');
        container.classList.add('game-container');
        // const board1= createGameBoard(this);
        const board1 = document.createElement('div');
        board1.classList.add('init-board');
        // const board2 = createGameBoard();
        const board2 = document.createElement('div');
        board2.classList.add('init-board');
        for(let i=0; i<10;i++){
            const row=document.createElement('div');
            row.classList.add('row');
            for(let j=0; j<10; j++){
                const cell=document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.x=i;
                cell.dataset.y=j;
                if(boardArray[i][j] === 'S') {
                    cell.textContent = 'S';
                    cell.classList.add('ship');
                }
                row.appendChild(cell);
            }
            board1.appendChild(row);
        }
        for(let i=0; i<10;i++){
            const row=document.createElement('div');
            row.classList.add('row');
            for(let j=0; j<10; j++){
                const cell=document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.x=i;
                cell.dataset.y=j;
                row.appendChild(cell);
            }
            board2.appendChild(row);
        }
        container.appendChild(board1);
        container.appendChild(board2);
        document.body.appendChild(container);
    }
    placeShip(x,y,leng){
        const ship = new Ship(leng, 1);
        this.player1.gameBoard.placeShip(ship, x, y);
    }
}
export default Engine;
