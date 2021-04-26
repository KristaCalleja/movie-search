import { fetchMovies } from './movies';

fetchMovies('lost'); // on 1st page load

const form = document.querySelector('#search-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
});

