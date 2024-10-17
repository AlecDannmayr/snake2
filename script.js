// Define html elements
const board = document.getElementById("game-board");
// Define Snake and snake starting position in center
let snake = [{ x: 10, y: 10 }];


// Draw game map, snake, food
const drawMap = () => {
  board.innerHTML = "";
  drawSnake();
};

// Draw snake
const drawSnake = () => {
  snake.forEach((segment) => {
    const snakeElement = createGameElement("div", "snake");
  });
};

//Creating Snake and for creating food cube
const createGameElement = (tag, className) => {
const element = document.createElement(tag);
element.className = className;
}
