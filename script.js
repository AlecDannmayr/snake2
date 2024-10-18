// Define html elements
const board = document.getElementById("game-board");
const instructionText = document.getElementById("instruction-text");
const logo = document.getElementById("logo");
// Define Snake and snake starting position in center and game vars
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = generateRandomFoodPosition();
let direction = "right";
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;

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

// draw();

//Draw Snake food
function drawSnakeFood() {
  const snakeFoodElement = createGameElement("div", "food");
  setPosition(snakeFoodElement, food);
  board.appendChild(snakeFoodElement);
}

//Generate Food

function generateRandomFoodPosition() {
  const generateRandomNumber = (axis) => {
    return Math.floor(Math.random() * gridSize + 1);
  };
  const x = generateRandomNumber();
  const y = generateRandomNumber();
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
  }

  snake.unshift(head);

  if (head.y === food.y && head.x === food.x) {
    food = generateRandomFoodPosition();
    clearInterval();
    gameInterval = setInterval(() => {
      move();
      draw();
    }, gameSpeedDelay);
  } else {
    snake.pop();
  }
}

// setInterval(() => {
//   move();
//   draw();
// }, 200);

//Start game function

function startGame() {
  gameStarted = true;
  instructionText.style.display = "none";
  logo.style.display = "none";
  gameInterval = setInterval(() => {
    move();
    // checkCollision();
    draw();
  }, gameSpeedDelay);
}

// Key press event listener for space typed

function handleKeyPress(evt) {
  if (
    (!gameStarted && evt.code === "space") ||
    (!gameStarted && evt.key === " ")
  ) {
    startGame();
  } else {
    switch (evt.key) {
      case "ArrowUp":
        direction = "up";
        break;
      case "ArrowDown":
        direction = "down";
        break;
      case "ArrowLeft":
        direction = "left";
        break;
      case "ArrowRight":
        direction = "right";
        break;
    }
  }
}


document.addEventListener("keydown", handleKeyPress)