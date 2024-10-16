function fetchRandomPhoto() {
    fetch('https://randomuser.me/api/?gender=female')
        .then(response => response.json())
        .then(data => {
            const photoUrl = data.results[0].picture.large;
            document.getElementById('random-photo').src = photoUrl;
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
}

// Charger une photo au démarrage
fetchRandomPhoto();
