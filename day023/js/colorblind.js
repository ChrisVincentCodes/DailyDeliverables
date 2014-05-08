$(document).ready(function(){
  // imageLoader is input#imageLoader
  var imageLoader = document.getElementById('imageLoader');
  imageLoader.addEventListener('change', handleImage, false);

  // Store reference to canvas element as canvas variable
  var canvas = document.getElementById('imageCanvas');
  // Give canvas context functionality
  var ctx = canvas.getContext('2d');

  // For image manipulation
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

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
        ctx.drawImage(img,0,0);
      }
      // Set the file path specifies as the image source
      img.src = event.target.result;
    }
    // Tells the FileReader to read the target file as a URL to local data
    reader.readAsDataURL(e.target.files[0]);     
  }
});