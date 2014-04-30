$(document).ready(function() {
  var gradDate = new Date("May 18, 2014").getTime();
  var days, hours, minutes, seconds;
  var countdown = document.getElementById("countdown");

  //
  setInterval(function () {
    var currentDate = new Date().getTime();
    var secondsLeft = (gradDate - currentDate) / 1000;

    // Remainder of days is hours
    days = parseInt(secondsLeft / 86400);
    secondsLeft = secondsLeft % 86400;

    // Remainder of hours is minutes
    hours = parseInt(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    // Remainder of minutes is seconds
    minutes = parseInt(secondsLeft / 60);
    seconds = parseInt(secondsLeft % 60);

    countdown.innerHTML = days + " days<br>" + hours + " hours<br>" + minutes + " minutes<br>" + seconds + " seconds";
  }, 1000);

});