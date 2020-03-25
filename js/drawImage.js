function drawImage(url){

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var img = new Image();
  ctx.clearRect(0, 0, 1800, 1800);
  img.onload = function(){



    canvas.height = img.height;
    canvas.width = img.width;
    ctx.globalAlpha = 0.5;

    ctx.drawImage(img, 0, 0);
    ctx.globalAlpha = 1;

    loadJoke();
  };
  img.src = url;
}
