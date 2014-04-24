;$(document).ready(function(){

	var contextClass = (window.AudioContext || 
	  window.webkitAudioContext || 
	  window.mozAudioContext || 
	  window.oAudioContext || 
	  window.msAudioContext);

	if (contextClass) {
	  // Web Audio API is available.
	  var context = new contextClass();

	  // Initialize oscillator
	  var oscillator = context.createOscillator();
	  oscillator.isPlaying = false;

	  function oscillatorInit(){
	  	oscillator = context.createOscillator();
	  	oscillator.frequency.value = 440;
	  	oscillator.type = "sine";
	  	oscillator.connect(gainNode);
	  	oscillator.noteOn(0);
	  	oscillator.isPlaying = true;
	  }

	  function oscillatorKill(){
	  	oscillator.disconnect();
	  	oscillator.isPlaying = false;
	  }

	  // Change frequency type with function.
	  $('#oscillatorFrequency').change(function(){
	  	oscillator.detune.value = $(this).val();
	  });
	  // Change wave type with function.
	  $('input[name=oT]').change(function(){
	  	oscillator.type = $(this).val();
	  });

	  // Create the gain node.
	  var gainNode = context.createGain();
	  gainNode.gain.value = 0.1;
	  gainNode.connect(context.destination);

	  $('#toggle').click(function () {
		    (oscillator.isPlaying ? oscillatorKill() : oscillatorInit());

	  });

	} else {
	  // Web Audio API is not available. Ask the user to use a supported browser.

	}

});