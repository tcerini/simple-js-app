//Pokemon list in array
let pokemonList = [
  { name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison']},
  { name: 'Mr. Mime', height: 1.3, type: ['psychic', 'fairy']},
  { name: 'Sandshrew', height: 0.6, type: ['ground']},
  { name: 'Haunter', height: 1.6, type: ['ghost', 'poison']},
  { name: 'Tentacruel', height: 1.6, type: ['water', 'poison']},
  { name: 'Arbok', height: 3.5, type: ['poison']},
]

//Writing all items from pokemonList array with callout text for largest pokemon
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 3.4) {
    document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ")" + " - Wow. That's Big!<br>")
  }
  else {
    document.write( pokemonList[i].name + " (Height: " + pokemonList[i].height + ")<br>")
  }
}

//forEach loop to iterate over pokemon array
pokemonList.forEach(function(pokemon) {
  console.log(pokemon.name + ' is ' + pokemon.height + 'm tall' + ' and is a ' + pokemon.type + ' type Pokemon');
});
