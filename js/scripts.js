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

  //addListItem function inside IIFE to create button for each pokemon
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list')
    let listItem = document.createElement('li')
    let button = document.createElement('button')
    listItem.classList.add('list-group-item')
    button.innerText = pokemon.name;
    button.innerText = button.innerText.charAt(0).toUpperCase() + button.innerText.slice(1);
    button.classList.add('btn-warning')
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#exampleModal');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem)
    //event listener where upon button click, showDetails performed on pokemon
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  //adding function to show pokemon detials in console log
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {

    //new remove content
    let modalBody = document.querySelector('.modal-body');
    let modalTitle = document.querySelector('.modal-title');

    modalTitle.innerHTML = '';
    modalBody.innerHTML = '';
    //

    //define elements to be added to modal for pokemon
    //Pokemon name
    let pokemonName = document.createElement ('p');
    pokemonName.classList.add('pokemon-name');
    pokemonName.innerText = ('Name: ' + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1));

    let pokemonImage = document.createElement('img')
    pokemonImage.classList.add('pokemon-image')
    pokemonImage.src = pokemon.imageUrl

    let pokemonHeight = document.createElement('p');
    pokemonHeight.classList.add('pokemon-height')
    pokemonHeight.innerText = 'Height: ' + pokemon.height;

    //append elements to modal
    modalTitle.appendChild(pokemonName);
    modalBody.appendChild(pokemonImage);
    modalBody.appendChild(pokemonHeight);
  }

  //returning all functions to be available outside IIFE
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal
  }

}();

// eslint-disable-next-line no-unused-vars
let pokemonList = pokemonRepository.getAll();

//retrieving all pokemon in repository and performing addListItem function forEach pokemon
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
