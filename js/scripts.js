//IIFE
let pokemonRepository = function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

//loadList function retrieving JSON response to load all pokemon (151)
  function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
  }

//loadDetails function
  function loadDetails (item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

//adding function to show pokemon detials in console log
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
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
      showDetails(pokemon);
    });
  }

//adding all functions to be available outside IIFE
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  }

}();

let pokemonList = pokemonRepository.getAll();

//retrieving all pokemon in repository and performing addListItem function forEach pokemon
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});


// //adding Pokemon to IIFE pokemonList
// pokemonRepository.add(
// { name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison']});
// pokemonRepository.add(
// { name: 'Mr. Mime', height: 1.3, type: ['psychic', 'fairy']});
// pokemonRepository.add(
// { name: 'Sandshrew', height: 0.6, type: ['ground']});
// pokemonRepository.add(
// { name: 'Haunter', height: 1.6, type: ['ghost', 'poison']});
// pokemonRepository.add(
// { name: 'Tentacruel', height: 1.6, type: ['water', 'poison']});
// pokemonRepository.add(
// { name: 'Arbok', height: 3.5, type: ['poison']});
