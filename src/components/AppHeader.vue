<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      searchbar: "",
    };
  },

  methods: {
    fetchmovies() {
      axios
        .get(
          `${store.moviesUri}${store.apiKey}&query=${this.searchbar}${store.itLanguage}`
        )
        .then((res) => {
          store.moviesResearch = res.data.results.map((movie) => {
            return {
              title: movie.title,
              original_title: movie.original_title,
              language: movie.original_language,
              vote: movie.vote_average,
              poster: movie.poster_path,
              description: movie.overview,
            };
          });
        });
    },

    fetchseries() {
      axios
        .get(
          `${store.seriesUri}${store.apiKey}&query=${this.searchbar}${store.itLanguage}`
        )
        .then((res) => {
          store.seriesResearch = res.data.results.map((serie) => {
            return {
              title: serie.name,
              original_title: serie.original_name,
              language: serie.original_language,
              vote: serie.vote_average,
              poster: serie.poster_path,
              description: serie.overview,
            };
          });
        });
    },

    searchTitle() {
      this.fetchmovies();
      this.fetchseries();
    },

    emptySearchBar() {
      this.searchbar = "";
    },
  },
};
</script>

<template>
  <header>
    <div class="header-container">
      <div>
        <h1>Boolflix</h1>
      </div>
      <div class="search-bar w-25 d-flex gap-2">
        <input
          class="w-100"
          @keyup="searchTitle()"
          @keyup.enter="emptySearchBar()"
          v-model="this.searchbar"
          type="text"
          placeholder="Inserisci titolo film/serie Tv"
        />
        <button @click="searchTitle()" class="btn">Cerca</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;
  padding: 1rem;

  .header-container {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: red;
      font-family: "Ruda", sans-serif;
      margin: 0;
      text-shadow: 0px 0px 3px red;
    }

    input {
      background-color: #474747;
      border: none;
      border-radius: 2px;
      color: #c1c1c1;
      opacity: 0.8;
      box-shadow: 0px 0px 4px 0px gray;

      &:hover {
        opacity: 1;
      }
    }

    .btn {
      background-color: red;
      color: white;
      border-radius: 2px;
      box-shadow: 0px 0px 4px 0px red;
    }
  }
}
</style>
