import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './api.js';

const select = document.querySelector('.breed-select');
const catinfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

loader.classList.toggle('is-hidden');

let breedsId = [];
fetchBreeds()
  .then(data => {
    data.forEach(element => {
      breedsId.push({ text: element.name, value: element.id });
      new SlimSelect ({
        select: select,
        data: breedsId,
      })
    });
  })
  .catch(onError);

// function updateBreedList(markup) {
//   select.innerHTML = markup;
//   loader.classList.toggle('is-hidden');
// }

// function createMarkup({ markup }) {
//   return `<option id="${markup.id }">${markup.name}</option>`;
// }

select.addEventListener('change', onChangeBreed);

function onChangeBreed(event) {
  const breedId = event.currentTarget.value;
  fetchCatByBreed(breedId)
    .then(data => console.log(data))
    // .then(updateBreedList)
    .catch(onError);
}

// function updateBreedCard({ url, breed }) {}

function onError() {
  error.classList.toggle('is-hidden');
}
