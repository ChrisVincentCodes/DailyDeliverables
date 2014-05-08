$(document).ready(function(){
  // imageLoader is input#imageLoader
  var imageLoader = document.getElementById('imageLoader');
  imageLoader.addEventListener('change', handleImage, false);

  // Store reference to canvas element as canvas variable
  var canvas = document.getElementById('imageCanvas');
  // Give canvas context functionality
  var ctx = canvas.getContext('2d');

  // Initialize canvas with picture
  function init() {
    var img = new Image();

    // When img loads
    img.onload = function(){
      // Reset canvas dimensions to image dimensions
      canvas.width = img.width;
      canvas.height = img.height;
      // Draw image on canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img,0,0);
    };
    img.src = 'http://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Colorado_River_edit.jpg/1024px-Colorado_River_edit.jpg';
  }

  init();
  

  // For image manipulation
  //var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  var imageFilter;

  // apply a filter to the image data contained in the canvas object
  function filterCanvas(filter) {
    if (canvas.width > 0 && canvas.height > 0) {
      /*window.alert("applying Filter");*/
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      window.alert("getting imagedata");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      filter(imageData);
      ctx.putImageData(imageData, 0, 0);
    }
  }

  function setFilter(f) {
    imageFilter = f;
    /*update();*/
  }

  /*function toggleFilter(f) {
    if (imageFilter !=) {};
  }*/

  // grayscale filter using an arithmetic average of the color 
  // components
  grayscale = function (pixels, args) {
    var d = pixels.data;
    for (var i = 0; i < d.length; i += 4) {
      var r = d[i];
      var g = d[i + 1];
      var b = d[i + 2];
      d[i] = d[i + 1] = d[i + 2] = (r+g+b)/3;
    }
    return pixels;
  };

  // RESIZES CANVAS ON IMAGE LOAD
  function handleImage(e){
    // New FileReader (Reads input files)
    var reader = new FileReader();
    // When reader loads
    reader.onload = function(event){
      // New Image object
      var img = new Image();
      // When img loads
      img.onload = function(){
        // Reset canvas dimensions to image dimensions
        canvas.width = img.width;
        canvas.height = img.height;
        // Draw image on canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img,0,0);
      }
      // Set the file path specifies as the image source
      img.src = event.target.result;
    }
    // Tells the FileReader to read the target file as a URL to local data
    reader.readAsDataURL(e.target.files[0]);
    $('#attribution').hide();     
  }

  $(canvas).on('click', function() {

    setFilter(grayscale);
    filterCanvas(grayscale);
  });
});