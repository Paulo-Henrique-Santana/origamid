fetch('https://pokeapi.co/api/v2/pokemon/1')
.then(response => response.json())
.then(pokemon => {
  console.log(pokemon)
});

const url = 'https://cors-anywhere.herokuapp.com/https://www.google.com';

fetch(url)
.then(response => response.text())
.then(text => console.log(text));
// .then(json => console.log(json));