import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './api.js';
import 'slim-select/dist/slimselect.css';

const select = document.querySelector('.breed-select');
const catinfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');



loader.classList.toggle('is-hidden');

let arrBreedsId = [];
fetchBreeds()
  .then(data => {
    data.forEach(element => {
      arrBreedsId.push({ text: element.name, value: element.id });
    });
    new SlimSelect({
      select: select,
      data: arrBreedsId,
    });
  })
  .catch(onError);


select.addEventListener('change', onChangeBreed);

function onChangeBreed(event) {
  loader.classList.remove('is-hidden');
  const breedId = event.currentTarget.value;
  fetchCatByBreed(breedId)
    .then(data => {
      const { url, breeds } = data[0];
      catinfo.innerHTML = `<div class = img-box><img class = "breed-img"src = "${url}" alt = "${breeds[0].name}" width = "100%"/></div><div class = breed-box><h1 class="breed-name">${breeds[0].name}</h1><p class="brred-description">${breeds[0].description}</p><h2 class="temperament-item">Temperament:</h2><p class="breed-temperament">${breeds[0].temperament}</p></div>`;
    })
    .then(toggleClassList)
    .catch(onError);
}
function toggleClassList() {
loader.classList.add('is-hidden');
catinfo.classList.remove('is-hidden');
}


function onError() {
  error.classList.remove('is-hidden');
}
