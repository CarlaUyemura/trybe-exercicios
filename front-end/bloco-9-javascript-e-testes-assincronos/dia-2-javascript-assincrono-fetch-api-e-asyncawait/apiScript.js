// apiScript.js

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  const teste = fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => data.joke);
  return teste;
};

const colocaTexto = async () => {
  const piada = document.getElementById('jokeContainer');
  piada.innerHTML = await fetchJoke();
};

window.onload = () => colocaTexto();