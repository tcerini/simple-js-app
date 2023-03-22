// eslint-disable-next-line quotes, no-unused-vars
let pokemonRepository=function(){let e=[];function t(t){e.push(t)}function n(){return e}function o(e){return fetch(e.detailsUrl).then(function(e){return e.json()}).then(function(t){e.imageUrl=t.sprites.front_default,e.height=t.height,e.types=t.types}).catch(function(e){console.error(e)})}function i(e){o(e).then(function(){a(e)})}function a(e){let t=document.querySelector(".modal-body"),n=document.querySelector(".modal-title");n.innerHTML="",t.innerHTML="";let o=document.createElement("p");o.classList.add("pokemon-name"),o.innerText="Name: "+e.name.charAt(0).toUpperCase()+e.name.slice(1);let i=document.createElement("img");i.classList.add("pokemon-image"),i.src=e.imageUrl;let a=document.createElement("p");a.classList.add("pokemon-height"),a.innerText="Height: "+e.height,n.appendChild(o),t.appendChild(i),t.appendChild(a)}return{add:t,getAll:n,addListItem:function e(t){let n=document.querySelector(".pokemon-list"),o=document.createElement("li"),a=document.createElement("button");o.classList.add("list-group-item"),a.innerText=t.name,a.innerText=a.innerText.charAt(0).toUpperCase()+a.innerText.slice(1),a.classList.add("btn-warning"),a.setAttribute("data-toggle","modal"),a.setAttribute("data-target","#exampleModal"),o.appendChild(a),n.appendChild(o),a.addEventListener("click",function(){i(t)})},loadList:function e(){return fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151").then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){t({name:e.name,detailsUrl:e.url})})}).catch(function(e){console.error(e)})},loadDetails:o,showDetails:i,showModal:a}}(),pokemonList=pokemonRepository.getAll();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});