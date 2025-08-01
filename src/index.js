import { createGameBoard } from "./ui";
import Engine from "./gameEngine.js";
import './style.css';
const engine = new Engine();
const placementBoard = createGameBoard(engine);
placementBoard.classList.add('placement-board');
document.body.appendChild(placementBoard);