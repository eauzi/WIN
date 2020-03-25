function drawImage(url){

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = new Image();
  img.onload = function(){

    ctx.drawImage(img, 0, 0);
    faireBlague1partie();
  };
  img.src = url;
}
