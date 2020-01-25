import { create } from "axios";

const baseURL = "https://pokeapi.co/api/v2";

const axios = create({ baseURL });
const pokemonLimit = 100;

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
  const options = [
    getRandomInt(pokemonLimit),
    getRandomInt(pokemonLimit),
    getRandomInt(pokemonLimit),
    getRandomInt(pokemonLimit)
  ];
  const answer = options[getRandomInt(options.length)];

  return { options, answer };
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
