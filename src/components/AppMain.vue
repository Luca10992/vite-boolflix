<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    voteFixed(movie) {
      const vote = movie.vote.toFixed(1);
      return vote;
    },

    langUpper(movie) {
      const lang = movie.language.toUpperCase();
      return lang;
    },

    getFlag(lang) {
      if (lang == "it") {
        return new URL("/public/it.png", import.meta.url).href;
      }
      if (lang == "en") {
        return new URL("/public/en.png", import.meta.url).href;
      }
      if (lang == "de") {
        return new URL("/public/de.png", import.meta.url).href;
      }
      if (lang == "es") {
        return new URL("/public/es.png", import.meta.url).href;
      }
      if (lang == "fr") {
        return new URL("/public/fr.png", import.meta.url).href;
      } else {
        return new URL("/public/world.png", import.meta.url).href;
      }
    },
  },
};
</script>

<template>
  <main>
    <div class="container m-3">
      <div class="result-box">
        <ul v-for="movie in store.resultResearch">
          <li class="title">{{ "Titolo: " + movie.title }}</li>
          <li class="original-title">
            {{ "Titolo originale: " + movie.original_title }}
          </li>
          <li class="lang">
            {{ "Lingua originale: " + langUpper(movie) }}
          </li>
          <li class="flag"><img :src="getFlag(movie.language)" /></li>
          <li class="vote">{{ "Voto: " + voteFixed(movie) }}</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
