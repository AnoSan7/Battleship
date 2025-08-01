class Ship{
    constructor(length,width){
        this.length = length;
        this.width = width;
        this.hits = 0;
        this.isSunk = false;
    }
    hit(){
        this.hits++;
        if(this.hits >= this.length){
            this.isSunk = true;
        }
    }
}
class GameBoard{
    constructor(){
        this.ships = [];
        this.hits = [];
        this.misses = [];
    }
    placeShip(ship, x, y){
        this.ships.push({ship, x, y});
    }
}
class Player{
    constructor(name){
        this.name = name;
        this.gameBoard = new GameBoard();
    }
}

export { Ship, GameBoard, Player };