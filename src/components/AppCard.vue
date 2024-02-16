<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
      spin: false,
    };
  },

  props: { list: Object },
  methods: {
    buildImagePath(list) {
      return new URL(`${store.imageUri}w342${list.poster}`, import.meta.url)
        .href;
    },

    voteRound(list) {
      const vote = Math.round(list.vote / 2);
      return vote;
    },

    langUpper(list) {
      const lang = list.language.toUpperCase();
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
  <div class="poster-box">
    <img
      class="poster"
      :src="list.poster == null ? '/public/error.jpg' : buildImagePath(list)"
      alt=""
    />
  </div>
  <ul>
    <li class="title">
      <p>Titolo:</p>
      {{ list.title }}
    </li>
    <li class="original-title">
      <p>Titolo originale:</p>
      {{ list.original_title }}
    </li>
    <li class="vote d-flex gap-1">
      <p>Valutazione:</p>
      <font-awesome-icon
        class="star"
        v-for="i in 5"
        :icon="i <= voteRound(list) ? 'fa-solid fa-star' : 'fa-regular fa-star'"
      />
    </li>
    <li class="lang d-flex gap-1">
      <p>Lingua originale:</p>
      {{ langUpper(list) }}
    </li>
    <li class="flag"><img :src="getFlag(list.language)" /></li>
    <li>
      <p>Descrizione:</p>
      <div>{{ list.description }}</div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.poster-box {
  width: 100%;

  .poster {
    width: 100%;
  }
}

ul {
  width: 100%;
  height: 400px;
  padding: 1rem;
  color: white;
  display: none;

  li {
    margin: 1rem 0;
    p {
      font-weight: bold;
      font-size: 1rem;
      margin: 0;
      color: red;
    }
  }
}

.star {
  color: gold;
}
</style>
