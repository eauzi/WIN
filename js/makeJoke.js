var joke;
var setup;
var delivery;
var maxWidth = 400;
var lineHeight = 24;

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(' ');
  var line = '';

  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    }
    else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}




function FaireBlagues() {
  fetch('https://sv443.net/jokeapi/category/any').then(response => {
    return response.json()
  })
    .then(data => {
      // Work with JSON data here

      if (data.type == "single") {
        joke = data.joke;
      }
      else {
        setup = data.setup;
        delivery = data.delivery;
      }


    })
    .catch(err => {
      // Do something for an error here
    })

}

function afficherBlague(x1 = 100, y1 = 200, x2 = 500, y2 = 200, obj) {
  console.log(obj);
  if (obj.joke != null) {

    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');


    ctx.font = "italic small-caps bold 40px arial";
    wrapText(ctx, obj.joke, x1, y1, maxWidth, lineHeight);

  }
  if ((obj.setup != null) && (obj.delivery != null)) {


    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    ctx.font = "italic small-caps bold 40px arial";
    wrapText(ctx, obj.setup, x1, y1, maxWidth, lineHeight);
    wrapText(ctx, obj.delivery, x2, y2, maxWidth, lineHeight);

  }

}
