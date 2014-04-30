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
  var foodColor = '#FCD80A';
  var direction = 'right';
  var food;
  var foodBool = 'false';
  var score = 0;
  var prevScore = 0;
  // prevDirection used for quick movement --> random death fix.
  var prevDirection = 'right';

  // Initialize ColorPicker
  $('#colorPickerHolder').ColorPicker({
    flat: true,
    color : '#00D3DE',
    onChange: function (hsb, hex, rgb) {
      snakeColor = '#'+hex;
      $('#score').css('color', '#'+hex);
    },

    onSubmit: function (hsb, hex, rgb) {
      foodColor = '#'+hex;
    },
  });


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

    // Resize canvas
    //resizeCanvas();
    // Reset direction to right
    prevScore = score;
    score = 0;

    // Start Screen
    paintBackground();
    startScreen();

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

    // Check if food and snakeArray[i] share coordinates
    for (var i = snakeArray.length - 1; i >= 0; i--) {
      if (food.x == snakeArray[i].x && food.y == snakeArray[i].y) {
        // Recursively calls createFood until !(food.x == snakeArray[i].x && food.y == snakeArray[i].y)
        createFood();
      };
    };
  }

  // logic for drawing created snake
  function drawSnake() {

    paintBackground();
    drawCell(food.x, food.y, foodColor);
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
      
    }

    // unshift method adds tail to beginning of array (tail --> head)
    snakeArray.unshift(tail);

    for (var i = 0; i < snakeArray.length; i++) {
      // take each cell in array
      var cell = snakeArray[i];
      drawCell(cell.x, cell.y, snakeColor);
    }
    prevDirection = direction;
  }

  function drawCell(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x*cw, y*cw, cw, cw);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x*cw, y*cw, cw, cw);
  }

  // checks to see if new head will collide with any cell in snakeArray
  function checkCollision(x, y, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].x == x && array[i].y == y) {
        return true;
      }
    }
    return false;
  }

  /*function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }*/

  // Function for keydown events
  $(document).keydown(function(e) {
    var key = e.which;
    if (key == '37' && prevDirection != 'right') direction = 'left';
    else if (key == '38' && prevDirection != 'down') direction = 'up';
    else if (key == '39' && prevDirection != 'left') direction = 'right';
    else if (key == '40' && prevDirection != 'up') direction = "down";

  })

  init();

})