function loadFile() {

    var xhr = new XMLHttpRequest();

    // On souhaite juste récupérer le contenu du fichier, la méthode GET suffit amplement :
    xhr.open('GET', 'https://random.dog/woof.json');

    xhr.addEventListener('readystatechange', function() { // On gère ici une requête asynchrone

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) { // Si le fichier est chargé sans erreur

            var data = xhr.responseText;
            var parsedObject = JSON.parse(data);
            drawImage(parsedObject.url);


        }else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status != 200) {

            alert('Une erreur est survenue ! !\n\nCode :' + xhr.status + '\nTexte : ' + xhr.statusText);
        }

    });

    xhr.send(null); // La requête est prête, on envoie tout !

}

function loadJoke() {

    var xhr = new XMLHttpRequest();

    // On souhaite juste récupérer le contenu du fichier, la méthode GET suffit amplement :
    xhr.open('GET', 'https://sv443.net/jokeapi/category/any');

    xhr.addEventListener('readystatechange', function() { // On gère ici une requête asynchrone

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) { // Si le fichier est chargé sans erreur

            var data = xhr.responseText;
            var parsedObject = JSON.parse(data);
            console.log(parsedObject);
            afficherBlague(100,200,500,200,parsedObject);


        }else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status != 200) {

            alert('Une erreur est survenue ! !\n\nCode :' + xhr.status + '\nTexte : ' + xhr.statusText);
        }

    });

    xhr.send(null); // La requête est prête, on envoie tout !

}
