$(document).ready(function(){
	$('.shybox').mouseenter( function() {
		animateDiv();
	});
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 100;
    var w = $(window).width() - 100;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.shybox').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.shybox').animate({ top: newq[0], left: newq[1] }, speed);
    
};

function calcSpeed(prevq, nextq) {
    
    var x = Math.abs(prevq[1] - nextq[1]);
    var y = Math.abs(prevq[0] - nextq[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}