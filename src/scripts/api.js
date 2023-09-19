const url = `https://api.thecatapi.com/v1/breeds`;
const key = {
    headers: {
      'x-api-key': 'live_eFQNzE6t9Yns8DpBqOnhUKvvvHPrVTd4nqMp4HJQUHmfMUGURXupaEMIop0eMOzH'
    }
};
function fetchCats() {
    return fetch(url, key).then((response) => console.log(response))
}
fetchCats();