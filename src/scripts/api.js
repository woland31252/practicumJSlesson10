// import axios from 'axios';
// const instance = axios.create({
//   baseURL: 'https://api.thecatapi.com/v1/breeds',
// });
// axios.defaults.headers.common['x-api-key'] =
//   'live_eFQNzE6t9Yns8DpBqOnhUKvvvHPrVTd4nqMp4HJQUHmfMUGURXupaEMIop0eMOzH';
const url = `https://api.thecatapi.com/v1`;
const key = {
  headers: {
    'x-api-key':
      'live_eFQNzE6t9Yns8DpBqOnhUKvvvHPrVTd4nqMp4HJQUHmfMUGURXupaEMIop0eMOzH',
  },
};

function fetchBreeds() {
  const breeds = `${url}/breeds`
  return fetch(breeds, key)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status)
      } return response.json()
    });
}

function fetchCatByBreed(breedId) {
const breed = `${url}/images/search?breed_ids=${breedId}&${key}`;
return fetch(breed).then(response => {
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
});
}
export { fetchBreeds, fetchCatByBreed };
