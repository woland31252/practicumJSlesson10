import fetchBreeds from "./api.js";

const select = document.querySelector(".breed-select");
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

loader.classList.toggle("is-hidden");

fetchBreeds()
  .then(data => {
    if (data.length === 0) throw new Error('No data');
    return data.reduce((markup, elem) => createMarkup(elem) + markup, '');
  })
  .then(updateBreedList)
  .catch(onError);


function updateBreedList(markup) {
    select.innerHTML = markup;
    loader.classList.toggle('is-hidden');
}

function createMarkup({ id, name }) {
    return `<option id="${id}">${name}</option>`;
}

function onError() {
    error.classList.toggle('is-hidden');
}