import { fetchMovies, updateResultsList } from './movies';

fetchMovies('lost'); // Default load

const form = document.querySelector('#search-form');
form.addEventListener('submit', updateResultsList);

