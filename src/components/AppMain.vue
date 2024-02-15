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
        return new URL("https://flagsapi.com/IT/shiny/32.png", import.meta.url)
          .href;
      }
      if (lang == "EN") {
        return new URL("https://flagsapi.com/EN/shiny/32.png", import.meta.url)
          .href;
      }
      if (lang == "de") {
        return new URL("https://flagsapi.com/DE/shiny/32.png", import.meta.url)
          .href;
      }
      if (lang == "fr") {
        return new URL("https://flagsapi.com/FR/shiny/32.png", import.meta.url)
          .href;
      } else {
        return new URL("https://flagsapi.com/EU/shiny/32.png", import.meta.url)
          .href;
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
