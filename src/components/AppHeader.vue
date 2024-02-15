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
          store.resultResearch = res.data.results.map((movie) => {
            return {
              title: movie.title,
              original_title: movie.original_title,
              language: movie.original_language,
              vote: movie.vote_average,
              poster: movie.poster_path,
            };
          });
          this.searchbar = "";
        });
    },

    fetchseries() {
      axios
        .get(
          `${store.seriesUri}${store.apiKey}&query=${this.searchbar}${store.itLanguage}`
        )
        .then((res) => {
          store.resultResearch = res.data.results.map((serie) => {
            return {
              title: serie.name,
              original_title: serie.original_name,
              language: serie.original_language,
              vote: serie.vote_average,
              poster: serie.poster_path,
            };
          });
          this.searchbar = "";
        });
    },

    searchTitle() {
      this.fetchmovies();
      this.fetchseries();
    },
  },
};
</script>

<template>
  <header>
    <div class="header-container m-3">
      <div class="search-bar d-flex gap-2">
        <input
          class="w-25"
          @keyup.enter="searchTitle()"
          v-model="this.searchbar"
          type="text"
          placeholder="Inserisci titolo film/serie Tv"
        />
        <button @click="searchTitle()" class="btn btn-primary">Cerca</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
