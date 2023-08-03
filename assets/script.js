
function getPokemonData() {
  const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Pokémon not found!');
      }
      return response.json();
    })
    .then(data => {
      displayPokemonData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('pokemonInfo').innerHTML = 'Pokémon not found!';
    });
}

function displayPokemonData(data) {
  const pokemonInfoDiv = document.getElementById('pokemonInfo');
  const pokemonName = data.name.toUpperCase();
  const pokemonID = data.id;
  const pokemonTypes = data.types.map(type => type.type.name).join(', ');
  const pokemonAbility = data.abilities[0].ability.name;
  const pokemonPictureUrl = data.sprites.front_default;

  const infoHTML = `
    <h2>${pokemonName}</h2>
    <p>ID: ${pokemonID}</p>
    <p>Type: ${pokemonTypes}</p>
    <p>Ability: ${pokemonAbility}</p>
    <img src="${pokemonPictureUrl}" alt="${pokemonName} Picture">
  `;

  pokemonInfoDiv.innerHTML = infoHTML;
}