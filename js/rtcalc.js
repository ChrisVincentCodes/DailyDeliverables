var x=true;

function hideTable() {
		document.getElementById('manual_input').style.display="block";
		document.getElementById('material_select').style.display="none";

		x=true;
}

function showTable() {
		document.getElementById('manual_input').style.display="none";
		document.getElementById('material_select').style.display="block";
		x=false;		
}


function calculate() {
	var length = +document.getElementById('length').value;
	var width = +document.getElementById('width').value;
	var height = +document.getElementById('height').value;

	if (x) {
		var wallAbs = +document.getElementById('wallAbs').value;
		var floorAbs = +document.getElementById('floorAbs').value;
		var ceilingAbs = +document.getElementById('ceilingAbs').value;
	}

	else if (!x) {
		var wallAbs = +document.getElementById('wallMats').value;
		var floorAbs = +document.getElementById('floorMats').value;
		var ceilingAbs = +document.getElementById('ceilingMats').value;
	}

	var volume = length*width*height;
	var sabines = length*width*(floorAbs+ceilingAbs) + 2*height*wallAbs*(length+width);

	if (document.getElementById('metric').checked) {
		var reverbTime = 0.161*volume/sabines;
	};

	if (document.getElementById('imperial').checked) {
		var reverbTime = 0.049*volume/sabines;
	};	


	document.getElementById('reverbTime').value = reverbTime;

}