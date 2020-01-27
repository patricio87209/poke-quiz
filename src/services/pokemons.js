import { create } from "axios";

const baseURL = "https://pokeapi.co/api/v2";

const axios = create({ baseURL });
const pokemonLimit = 152;

export function getQuiz() {
  const { answer, options } = generateQuiz();
  return Promise.all(
    options.map(option => getPokemon(option))
  ).then(pokemons => ({ answer, options: pokemons }));
}

function getPokemon(id) {
  return axios
    .get(`/pokemon/${id}`)
    .then(response => response.data)
    .then(({ id, name, sprites: { front_default } }) => ({
      id,
      name,
      image: front_default
    }));
}

function generateQuiz() {
  let options = new Set()
  
  while(options.size < 4){
    options.add(getRandomInt(pokemonLimit));
  }
  
  // const options = [
  //   getRandomInt(pokemonLimit),
  //   getRandomInt(pokemonLimit),
  //   getRandomInt(pokemonLimit),
  //   getRandomInt(pokemonLimit)
  // ];
  options = Array.from(options)
  const answer = options[getRandomInt(options.length)];

  return { options, answer };
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
