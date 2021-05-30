const BASE_URL = "https://pixabay.com/api";
const KEY = "21855327-aca65fff95f12487eb72f2b8c";

 function fetchimages(searchQuery, nomberPage) {
    return fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${nomberPage}&per_page=12&key=${KEY}`).then(response => {
        return response.json();    
    })
}

 export default { fetchimages };