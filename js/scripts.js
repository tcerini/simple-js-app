//IIFE
let pokemonRepository = function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'
  let modalContainer = document.querySelector('#modal-container');

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
    let pokemonList = document.querySelector(".pokemon-list")
    let listItem = document.createElement('li')
    let button = document.createElement('button')
    listItem.classList.add("group-list-item")
    button.innerText = pokemon.name;
    button.innerText = button.innerText.charAt(0).toUpperCase() + button.innerText.slice(1);
    button.classList.add("btn-secondary")
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#exampleModal');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem)
    //event listener where upon button click, showDetails performed on pokemon
    button.addEventListener('click', function(Event) {
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
    let modalBody = document.querySelector(".modal-body");
    let modalTitle = document.querySelector(".modal-title");

    modalTitle.innerHTML = '';
    modalBody.innerHTML = '';
    //

    //define elements to be added to modal for pokemon
    //Pokemon name
    let pokemonName = document.createElement ('p');
    pokemonName.classList.add("pokemon-name");
    pokemonName.innerText = ('Name: ' + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1));

    let pokemonImage = $('<img class="modal-img" style="width:50%">');
    pokemonImage.attr("src", pokemon.imageUrl);
    let pokemonHeight = $("<p>" + "Height : " + pokemon.height + "</p>");

    //append elements to modal
    modalTitle.append(pokemonName);
    modalBody.append(pokemonImage);
    modalBody.append(pokemonHeight);
  }

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  //esc button option to exit when modal is visible
  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  //exit modal when clicking modal container but not inside modal
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

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

let pokemonList = pokemonRepository.getAll();

//retrieving all pokemon in repository and performing addListItem function forEach pokemon
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
