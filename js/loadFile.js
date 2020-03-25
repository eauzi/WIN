function loadFile(file) {

    var xhr = new XMLHttpRequest();

    // On souhaite juste récupérer le contenu du fichier, la méthode GET suffit amplement :
    xhr.open('GET', file);

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
