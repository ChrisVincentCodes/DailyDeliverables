$(document).ready(function(){

	var contextClass = (window.AudioContext || 
	  window.webkitAudioContext || 
	  window.mozAudioContext || 
	  window.oAudioContext || 
	  window.msAudioContext);

	if (contextClass) {
	  // Web Audio API is available.
	  var context = new contextClass();

	  // Declare oscillator node.
	  var oscillator = context.createOscillator();
	  oscillator.isPlaying = false;

	 	// Declare gain node.
	  var gainNode = context.createGain();
	  gainNode.gain.value = 0.1;
	  gainNode.connect(context.destination);

	  // Declare analyzer node.
	  // var analyserNode = context.createAnalyzer();

	  // Get input paramaters; set oscillator properties to match.
	  function oscillatorCheckParams(){
	  	oscillator.type = $('input[name=oT]:checked').val();
	  	oscillator.detune.value = $('.oscillatorDetune').val();
	  	oscillator.frequency.value = $('.oscillatorFrequency').val();
	  	gainNode.gain.value = $('.gainControl').val();	
	  }

	  // Initialize oscillator.
	  function oscillatorInit(){
	  	oscillator = context.createOscillator();
	  	oscillator.connect(gainNode);
	  	oscillatorCheckParams();
	  	oscillator.noteOn(0);
	  	oscillator.isPlaying = true;
	  }

	  // Kill the oscillator.
	  function oscillatorKill(){
	  	oscillator.disconnect();
	  	oscillator.isPlaying = false;
	  }

	  // Initialize analyzer.
	  


	  // Reset all parameters.
	  $('#reset').click(function(){
	  	$('.oscillatorDetune').val(0);
	  	$('.oscillatorFrequency').val(440);
	  	$('input[name=oT]').prop('checked', function() {
	  		return this.getAttribute('checked') == 'checked';
	  	});
	  	$('.gainControl').val(0.1);
	  	oscillatorCheckParams();
	  });

	  // Detune oscillator with change function.
	  $('.oscillatorDetune').change(function(){
	  	oscillator.detune.value = $(this).val();
	  	$('.oscillatorDetune').val(oscillator.detune.value);
	  });

	  // Set oscillator frequency with change function
	  $('.oscillatorFrequency').change(function(){
	  	oscillator.frequency.value = $(this).val();
	  	// Set all frequency inputs to reflect frequency value
	  	$('.oscillatorFrequency').val(oscillator.frequency.value);
	  });

	  // Set oscillator wave type with change function.
	  $('input[name=oT]').change(function(){
	  	oscillator.type = $(this).val();
	  });

	  // Set gain with change function.
	  $('.gainControl').change(function(){
	  	gainNode.gain.value = $(this).val();
	  	$('.gainControl').val(Math.floor(gainNode.gain.value * 100) / 100);
	  });

	  // If oscillator is playing, kill the oscillator. Otherwise, start the oscillator.
	  $('#toggle').click(function () {
		    (oscillator.isPlaying ? oscillatorKill() : oscillatorInit());

	  });

	} else {
	  // Web Audio API is not available. Ask the user to use a supported browser.

	}

});