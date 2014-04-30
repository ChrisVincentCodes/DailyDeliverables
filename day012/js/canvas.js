$(document).ready(function(){

  window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();

  function canvasDimensions() {
    canvasWidth = $(window).width;
    canvasHeight = $(window).height;
  };

  canvasDimensions();

  $(window).resize(function() {
    canvasDimensions();
  })

  function animateCanvas() {
    var canvas = $("#canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0,0,canvasWidth,canvasHeight);

    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.strokeStyle = 'rgba(0,153,255,0.4)';
    ctx.save();
    ctx.translate(150,150);
  };
  
});


// Line code
/*context.beginPath(); // Start the path
context.moveTo(40, 40); // Set the path origin
context.lineTo(340, 40); // Set the path destination
context.closePath(); // Close the path
context.stroke(); // Outline the path*/