const APILINK =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6291dd0bd66ab44303417c7b2924d145&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=6291dd0bd66ab44303417c7b2924d145&query=";

const main = document.querySelector("main");
const form = document.querySelector("form");
const search = document.querySelector("input");

const returnMovie = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      main.innerHTML = data.results
        .map((data) => {
          return `<div class="movie-container">
        <img
          src="${IMG_PATH}${data.poster_path}"
          alt="Movie Poster"
        />
        <h3>${data.title}</h3>
      </div>`;
        })
        .join("");
    });
};
returnMovie(APILINK);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (search.value) {
    returnMovie(SEARCHAPI + search.value);
    search.value = "";
  } else {
    return;
  }
});
