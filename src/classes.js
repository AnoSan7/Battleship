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
    receiveAttack(x, y){
        for(const {ship, x: shipX, y: shipY} of this.ships){
            if(shipX === x && shipY === y){
                ship.hit();
                this.hits.push({x, y});
                return true; // Hit
            }
        }
        this.misses.push({x, y});
        return false; // Miss
    }
    allShipsSunk(){
        return this.ships.every(({ship}) => ship.isSunk);
    }
}
class Player{
    constructor(name){
        this.name = name;
        this.gameBoard = new GameBoard();
    }
}

export { Ship, GameBoard, Player };