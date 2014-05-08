$(document).ready(function() {
  // Create two variable with the names of the months and days in an array
  var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
  var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  // Create a newDate() object
  var newDate = new Date();

  var alarmDate = new Date();

  // Alarm variables
  var alarmHours = $('#hoursInput').val();
  var alarmMinutes = $('#minutesInput').val();
  var alarmSeconds = $('#secondsInput').val();

  function pad(n) {
    return (n < 10) ? ("0" + n) : n;
  }

  // Extract the current date from Date object
  newDate.setDate(newDate.getDate());
  // Output the day, date, month and year   
  $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

  $('#setAlarm').on('click', function() {
    alarmHours = $('#hoursInput').val();
    alarmMinutes = $('#minutesInput').val();
    alarmSeconds = $('#secondsInput').val();
  });

  $('#clearAlarm').on('click', function() {
    $('#hoursInput').val('00');
    $('#minutesInput').val('00');
    $('#secondsInput').val('00');
    $('#alarm-ring')[0].pause();
    $('#alarm-ring')[0].currentTime = 0;
    $('#clearAlarm').removeClass('activated');
  });

  function leadingZero(inputSelector){
    $(inputSelector).val(($(inputSelector).val() < 10 ? "0" : "" ) + $(inputSelector).val());
  }

  setInterval( function() {
    // Create a newDate() object and extract the hours of the current time on the visitor's
    var hours = new Date().getHours();
    // Add a leading zero to the hours value
    $("#hours").html(( hours < 10 ? "0" : "" ) + hours);

    // Create a newDate() object and extract the minutes of the current time on the visitor's
    var minutes = new Date().getMinutes();
    // Add a leading zero to the minutes value
    $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);

    // Create a newDate() object and extract the seconds of the current time on the visitor's
    var seconds = new Date().getSeconds();
    // Add a leading zero to seconds value
    $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);

    // Check to see if alarm matches clock
    if (alarmHours == hours && alarmMinutes == minutes && alarmSeconds == seconds) {
      $('#clearAlarm').addClass('activated');
      $('#alarm-ring')[0].play();
      window.alert("WAKEY WAKEY");
    }

  },1000);

  $('#hoursInput').on('change', function() {
    leadingZero('#hoursInput');
  });

  $('#minutesInput').on('change', function() {
    leadingZero('#minutesInput');
  });

  $('#secondsInput').on('change', function() {
    leadingZero('#secondsInput');
  });



});



