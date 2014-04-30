$(document).ready(function() {
  
  // Getting that canvas
  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');

  // Using inline styling as dimensions
  var width = $('#canvas').width();
  var height = $('#canvas').height();

  // cell width variable for changing scale
  var cw = 10;

  // other variables
  var initialSnakeLength = 12;
  var snakeColor = '#00D3DE';
  var direction = 'right';
  var food;
  var foodBool = 'false';
  var score = 0;


  // clears and redraws background elements
  function paintBackground() {
    // fillStyle fills ctx with a color
    ctx.fillStyle = 'black';
    // fillRect draws a rectangle of dimensions (xi, yi, xmax, ymax) --> 0,0 is top left
    ctx.fillRect(0, 0, width, height);
    // strokeStyle accpets hex color string as input, colors stroke
    ctx.strokeStyle = snakeColor;
    // strokeRect strokes the rectangle (border) of dimensions (xi, yi, xmax, ymax) --> 0,0 is top left
    ctx.strokeRect(0, 0, width, height);
  };


  // SNAKE CODE
  // Declare array of snake body cells
  var snakeArray;

  function init(){
    // Reset direction to right
    score = 0;
    direction = 'right';
    createSnake();
    createFood();

    if (typeof gameLoop != 'undefined') clearInterval(gameLoop);
    gameLoop = setInterval(drawSnake, 60);
  }

  // function for creating snake given initialSnakeLength (maybe param in the future?)
  function createSnake() {
    // Defines initial snake length
    var length = initialSnakeLength;
    snakeArray = [];
    for (var i = length - 1; i >= 0; i--) {

      snakeArray.push({x:i, y:0});
    }
  }

  // function for creating food
  function createFood() {
    food = {
      x: Math.round(Math.random()*(width-cw)/cw),
      y: Math.round(Math.random()*(height-cw)/cw),
    };
  }

  // logic for drawing created snake
  function drawSnake() {

    paintBackground();
    drawCell(food.x, food.y);
    document.getElementById("score").innerHTML = score;


    var newx = snakeArray[0].x;
    var newy = snakeArray[0].y;

    // game logic
    if (direction == 'right') newx++;
    else if (direction == 'left') newx--;
    else if (direction == 'up') newy--;
    else if (direction == 'down') newy++;

    if (newx == -1 || newx == width/cw || newy == -1 || newy == height/cw
    || checkCollision(newx, newy, snakeArray) == true) {
      init();
      return;
    }

    if (newx == food.x && newy == food.y) {
      var tail = {
        x: newx,
        y: newy
      }
      createFood();
      score++;
    }
    else {
      // pops tail off of array
      var tail = snakeArray.pop();

      tail.x = newx; tail.y = newy;
      // unshift method adds tail to beginning of array (tail --> head)
    }


    snakeArray.unshift(tail);

    for (var i = 0; i < snakeArray.length; i++) {
      // take each cell in array
      var cell = snakeArray[i];
      drawCell(cell.x, cell.y);
    }
  }

  function drawCell(x, y) {
    ctx.fillStyle = snakeColor;
    ctx.fillRect(x*cw, y*cw, cw, cw);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x*cw, y*cw, cw, cw);
  }

  function checkCollision(x, y, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].x == x && array[i].y == y) {
        return true;
      }
    }
    return false;
  }

  // Function for keydown events
  $(document).keydown(function(e) {
    var key = e.which;
    if (key == '37' && direction != 'right') direction = 'left';
    else if (key == '38' && direction != 'down') direction = 'up';
    else if (key == '39' && direction != 'left') direction = 'right';
    else if (key == '40' && direction != 'up') direction = "down";

  })

  init();

})