function drawImage(url){

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.onload = function(){

    console.log(img.width);
    console.log(img.height);
    canvas.height = img.height;
    canvas.width = img.width;

    ctx.globalAlpha = 0.8;
    ctx.drawImage(img, 0, 0);
    ctx.globalAlpha = 1;
    afficherBlague();
  };
  img.src = url;
}
