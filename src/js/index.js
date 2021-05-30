
import API from "./apiService"
import formSearch from "./formSearch.hbs"
import imagesHbs from "./imagesHbs.hbs"
import galleryHbs from "./galleryHbs"

let pageNomber = 0;
const searchInputElem = document.querySelector(".search");
searchInputElem.insertAdjacentHTML("afterbegin", formSearch());
searchInputElem.insertAdjacentHTML("afterend", galleryHbs());

const searchRezultElem = document.querySelector(".gallery");
const form = document.querySelector("#search-form")
const elem = document.querySelector('[name="query"]');
// const debounce = require('lodash.debounce');
 console.log(elem);
form.addEventListener("submit", search);
const buttonElem = document.querySelector(".load-more");

let searchText = "";
function search(event) {
  pageNomber = 1;
  event.preventDefault();
  searchText = elem.value.trim();
  if (searchText === '') {
    searchRezultElem.innerHTML = '';
    return;
  }
  API.fetchimages(searchText, pageNomber).then(images => {
    searchRezultElem.innerHTML = '';
    searchRezultElem.insertAdjacentHTML("beforeend", imagesHbs(images.hits));
  })
buttonElem.addEventListener("click", loadMore);
}
function loadMore(event) {
  pageNomber += 1;
  event.preventDefault();
  API.fetchimages(searchText, pageNomber).then(images => {
    searchRezultElem.insertAdjacentHTML("beforeend", imagesHbs(images.hits));
    searchRezultElem.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
  })
}