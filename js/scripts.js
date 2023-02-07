//IIFE
let pokemonRepository = function () {
  let pokemonList = [];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

//addListItem function inside IIFE to create button for each pokemon

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list")
    let listItem = document.createElement('li')
    let button = document.createElement('button')
    button.innerText = pokemon.name;
    button.classList.add("pokemon-button")
    listItem.appendChild(button);
    pokemonList.appendChild(listItem)
    //event listener where upon button click, Pokemon name is logged in console
    button.addEventListener('click', function(Event) {
      console.log(pokemon.name);
    });
  }
//adding all functions to be available outside IIFE

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
//    showDetails: showDetails
  }

}();

let pokemonList = pokemonRepository.getAll();

//adding Pokemon to IIFE pokemonList
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

//retrieving all pokemon in repository and performing addListItem function forEach pokemon
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
