// Get a reference to the element.
var canvas = document.getElementById('myCanvas');
var img = document.getElementById("img");
var result = document.getElementById("result");
img.crossOrigin = 'anonymous';
img.src = "image/color.jpg";

var ctx = canvas.getContext("2d");

window.onload = function() {
    ctx.drawImage(img, 0, 0);
}

// click function
img.addEventListener('click', function(e){
    // chrome
    if(e.offsetX) {
      x = e.offsetX;
      y = e.offsetY; 
    }
    // firefox
    else if(e.layerX) {
      x = e.layerX;
      y = e.layerY;
    }
    var imgd = ctx.getImageData(x, y,1,1);
    var pix = imgd.data;
    result.innerHTML = '<span>HEX: '+rgbToHex(pix[0],pix[1],pix[2])+'</span>'+
    '<br/><span>RGB:  '+
     pix[0]+','+
     pix[1]+','+
     pix[2]+'</span>';
   

  },false);

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }