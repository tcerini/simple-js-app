//IIFE
let pokemonRepository = function () {
  let pokemonList = [];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
};
}();

let pokemonList = pokemonRepository.getAll();

//adding Pokemon to IFFE pokemonList
pokemonRepository.add(
{ name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison']});
pokemonRepository.add(
{ name: 'Mr. Mime', height: 1.3, type: ['psychic', 'fairy']});
pokemonRepository.add(
{ name: 'Sandshrew', height: 0.6, type: ['ground']});
pokemonRepository.add(
{ name: 'Haunter', height: 1.6, type: ['ghost', 'poison']});
pokemonRepository.add(
{ name: 'Tentacruel', height: 1.6, type: ['water', 'poison']});
pokemonRepository.add(
{ name: 'Arbok', height: 3.5, type: ['poison']});

//forEach loop to iterate over pokemon array
pokemonList.forEach(function(pokemon) {
  document.write( pokemon.name + ' is ' + pokemon.height + 'm tall' + ' and is a ' + pokemon.type + ' type Pokemon<br>');
});
