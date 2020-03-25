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
    fetch('https://sv443.net/jokeapi/category/any?blacklistFlags=nsfwreligiouspolitical').then(response => {
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

  function faireBlague1partie(xBulle1 = 50, yBulle1 = 50, x1 = 100, y1 = 200) {
    FaireBlagues();
    var img = document.createElement("img");
    img.src = "bulleBd.jpg";

    if (joke != null) {

      var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, xBulle1, yBulle1);

      ctx.font = "30px Arial";
      wrapText(ctx, joke, x1, y1, maxWidth, lineHeight);

    }

  }

  function faireBlague2parties(xBulle2_1 = 10, yBulle2_1 = 10, xBulle2_2 = 800, yBulle2_2 = 10, x1 = 100, y1 = 200, x2 = 900, y2 = 200)
  {
    FaireBlagues();
    var img = document.createElement("img");
    img.src = "bulleBd.jpg";
    if ((setup != null) && (delivery != null)) {


      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, 1600, 800);
      ctx.drawImage(img, xBulle2_1, yBulle2_1);
      ctx.drawImage(img, xBulle2_2, yBulle2_2);

      ctx.font = "30px Arial";
      wrapText(ctx, setup, x1, y1, maxWidth, lineHeight);
      wrapText(ctx, delivery, x2, y2, maxWidth, lineHeight);

    }

  }