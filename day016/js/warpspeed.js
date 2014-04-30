$(document).ready( function() {

  var mouse = {
    x:0,
    y:0
  }

  
  
  var starArray = [];

  var count = 0;

  function makeNewPosition(){
    
    // Get viewport dimensions
    var h = $(window).height();
    var w = $(window).width();
    
    var nh = Math.floor(Math.random() * h-30);
    var nw = Math.floor(Math.random() * w-30);
    
    return [nh,nw];       
  };

  // from Jennifer Dewalt!
  function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  };

  function makeStar(e){
    if (count < 200) {
      id = 's' + count;
      $('#mainContainer').append('<div class="star" id="' + id + '"></div>');
      $('#' + id).css({position: 'absolute', top: e.pageY, left: e.pageX, background: randomColor()});
      starArray.push($('#' + id));
      count += 1;
    }

    /*for (var i = starArray.length - 1; i >= 0; i--) {
      starArray[i].css({position: 'absolute', top: e.pageY + 15*i, left: e.pageX + 15*i});
    };*/

  };

  function animateStar(){
    
    //var oldq = [mouse.x, mouse.y];
    //var speed = calcSpeed([oldq.top, oldq.left], newq);
    for (var i = starArray.length - 1; i >= 0; i--) {
      var newq = makeNewPosition();
      starArray[i].animate({ top: newq[0], left: newq[1] });
    };
    /*, speed*/
    //$('#' + sid).animate({ top: 5 , left: 5 }/*, speed*/);
    //$('#' + sid).animate({ top: 50, left: 50 }, speed);
    
  };

  /*function isGone(star){
    if (star.x > w || star.x < 0 || star.y > h || star.y<0) {
      return true;
    }
    else {
      return false;
    }
  };*/

  /*function calcSpeed(prevq, nextq) {
    
    var x = Math.abs(prevq[1] - nextq[1]);
    var y = Math.abs(prevq[0] - nextq[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

  };*/

  $(document).on('mousemove', function(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
     
    makeStar(e);
    animateStar();
    //$('#'+ id).animate({ top: 5, left: 5});
  });

  document.addEventListener('touchmove', function(e) {
    e.preventDefault();

    mouse.x = e.pageX;
    mouse.y = e.pageY;

    makeStar(e);
    animateStar();
  }, false);

  //makeStar();

  $('body').on('click', function(e) {
    //$('.star').animate({ top: 5, left: 5});
    animateStar();
  });

});