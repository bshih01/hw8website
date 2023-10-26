res = fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            const charactersDiv = document.getElementById('characters');

            data.results.forEach(character => {
                const characterCard = document.createElement('div');
                characterCard.className = 'character-card';

                const characterImage = document.createElement('img');
                characterImage.src = character.image;
                characterImage.alt = character.name;
                characterCard.appendChild(characterImage);

                const characterName = document.createElement('h2');
                characterName.textContent = character.name;
                characterCard.appendChild(characterName);

                charactersDiv.appendChild(characterCard);
            });
        })
        .catch(error => {
            console.error('There was an error fetching the data:', error);
        });
