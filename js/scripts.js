//OLD CODE START
//Pokemon list in array
// let pokemonList = [
//   { name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison']},
//   { name: 'Mr. Mime', height: 1.3, type: ['psychic', 'fairy']},
//   { name: 'Sandshrew', height: 0.6, type: ['ground']},
//   { name: 'Haunter', height: 1.6, type: ['ghost', 'poison']},
//   { name: 'Tentacruel', height: 1.6, type: ['water', 'poison']},
//   { name: 'Arbok', height: 3.5, type: ['poison']},
// ]
//
// //Writing all items from pokemonList array with callout text for largest pokemon
// for (let i = 0; i < pokemonList.length; i++) {
//   if (pokemonList[i].height > 3.4) {
//     document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ")" + " - Wow. That's Big!<br>")
//   }
//   else {
//     document.write( pokemonList[i].name + " (Height: " + pokemonList[i].height + ")<br>")
//   }
// }
// OLD CODE END

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
  console.log(pokemon.name + ' is ' + pokemon.height + 'm tall' + ' and is a ' + pokemon.type + ' type Pokemon');
});
