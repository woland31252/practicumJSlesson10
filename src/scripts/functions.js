import fetchBreeds from "./api.js";

const select = document.querySelector(".breed-select");
fetchBreeds().then(data => console.log(data));

function createBreedList(data) {
    data.reduce(marcup, elem )
}