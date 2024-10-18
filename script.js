// Define html elements
const board = document.getElementById("game-board");
// Define Snake and snake starting position in center and game vars
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = generateRandomFoodPosition();
let direction = "right";

// Draw game map, snake, food
function draw() {
  board.innerHTML = "";
  drawSnake();
  drawSnakeFood();
}

// Draw snake
function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement("div", "snake");
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  });
}

//Creating Snake and for creating food cube
function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

//Set the position of the Snake or the food
function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

draw();

//Draw Snake food
function drawSnakeFood() {
  const snakeFoodElement = createGameElement("div", "food");
  setPosition(snakeFoodElement, food);
  board.appendChild(snakeFoodElement);
}

//Generate Food

function generateRandomFoodPosition() {
  const x = Math.floor(Math.random() * gridSize + 1);
  const y = Math.floor(Math.random() * gridSize + 1);
  return { x, y };
}

//Move the snake

function move() {
  const head = { ...snake[0] };
  switch (direction) {
    case "up":
      head.y--;
      break;
    case "down":
      head.y++;
      break;
    case "left":
      head.x--;
      break;
    case "right":
      head.x++;
      break;
    default:
      break;
  }
  snake.unshift(head)
}
move();
