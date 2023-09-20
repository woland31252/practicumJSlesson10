// import axios from 'axios';
// const instance = axios.create({
//   baseURL: 'https://api.thecatapi.com/v1/breeds',
// });
// axios.defaults.headers.common['x-api-key'] =
//   'live_eFQNzE6t9Yns8DpBqOnhUKvvvHPrVTd4nqMp4HJQUHmfMUGURXupaEMIop0eMOzH';
const url = `https://api.thecatapi.com/v1/breeds`;
const key = {
  headers: {
    'x-api-key':
      'live_eFQNzE6t9Yns8DpBqOnhUKvvvHPrVTd4nqMp4HJQUHmfMUGURXupaEMIop0eMOzH',
  },
};
function fetchCats() {
  return fetch(url, key).then((response) =>response.json())
    .then((data) => console.log(data));
}
export default fetchCats;
