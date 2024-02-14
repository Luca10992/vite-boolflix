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
          console.log(res);
          store.movieResearch = res.data.results;
          this.searchbar = "";
        });
    },

    fetchseries() {
      axios
        .get(
          `${store.seriesUri}${store.apiKey}&query=${this.searchbar}${store.itLanguage}`
        )
        .then((res) => {
          store.seriesResearch = res.data.results;
          this.searchbar = "";
        });
    },
  },
};
</script>

<template>
  <main>
    <div class="container m-3">
      <div class="search-bar d-flex gap-2">
        <input
          class="w-50"
          @keyup.enter="fetchmovies()"
          v-model="this.searchbar"
          type="text"
          placeholder="Inserisci titolo film/serie Tv"
        />
        <button @click="fetchmovies()" class="btn btn-primary">Cerca</button>
      </div>
      <div class="result-box">
        <ul v-for="movie in store.movieResearch">
          <li class="title">{{ movie.title }}</li>
          <li class="original-title">{{ movie.original_title }}</li>
          <li class="lang">{{ movie.original_language }}</li>
          <li class="vote">{{ movie.vote_average }}</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
