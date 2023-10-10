
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '600px',
  position: 'center-top',
  distance: '80px',
  fontSize: '36px',
});

const select = document.querySelector('.breed-select');
const catinfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');


loader.classList.toggle('is-hidden');

let arrBreedsId = [];
fetchBreeds()
  .then(data => {
    data.forEach(element => {
      arrBreedsId.push({ text: element.name, value: element.id });
    });
  })
    .then(onSelect)
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

function onSelect() {
  new SlimSelect({
    select: select,
    data: arrBreedsId,
    settings: {
      placeholderText: 'Select any breed',
      selected: true,
    },
  });
}

function toggleClassList() {
  loader.classList.add('is-hidden');
  catinfo.classList.remove('is-hidden');
}

function onError() {
  loader.classList.add('is-hidden');
  Notiflix.Notify.failure(
    'Oops! Something went wrong! Try reloading the page!'
  );
}