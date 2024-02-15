<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    buildImagePath(movie) {
      return new URL(
        `${store.imageUri}original${movie.poster}`,
        import.meta.url
      ).href;
    },

    voteFixed(movie) {
      const vote = (movie.vote / 2).toFixed();
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
      <div class="result-box d-flex" v-for="movie in store.resultResearch">
        <div class="poster-box">
          <img class="poster" :src="buildImagePath(movie)" alt="" />
        </div>
        <ul>
          <li class="title">{{ "Titolo: " + movie.title }}</li>
          <li class="original-title">
            {{ "Titolo originale: " + movie.original_title }}
          </li>
          <li class="lang">
            {{ "Lingua originale: " + langUpper(movie) }}
          </li>
          <li class="flag"><img :src="getFlag(movie.language)" /></li>
          <li class="vote">
            Valutazione:
            <font-awesome-icon icon="fa-regular fa-star" />
            <font-awesome-icon icon="fa-regular fa-star" />
            <font-awesome-icon icon="fa-regular fa-star" />
            <font-awesome-icon icon="fa-regular fa-star" />
            <font-awesome-icon icon="fa-regular fa-star" />
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.result-box {
  width: 40%;
  border: 2px dashed #333;
  .poster-box {
    width: 40%;

    .poster {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }

  ul {
    width: 60%;
    padding: 1rem;

    li {
      margin-bottom: 1rem;
    }
  }
}
</style>
