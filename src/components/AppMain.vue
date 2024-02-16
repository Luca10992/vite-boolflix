<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppCard },
};
</script>

<template>
  <main>
    <div class="container p-5">
      <p>Film</p>
      <div class="result-box">
        <div class="movie result" v-for="movie in store.moviesResearch">
          <AppCard :list="movie"></AppCard>
        </div>
      </div>
      <p>Serie Tv</p>
      <div class="result-box">
        <div class="serie result" v-for="serie in store.seriesResearch">
          <AppCard :list="serie"></AppCard>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
p {
  font-size: 2rem;
  color: white;
  font-family: "Ruda", sans-serif;
  font-weight: bolder;
  margin: 2rem 0;
}

.result-box {
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.result {
  width: calc(100% / 4 - 20px);
  background-color: black;
  overflow: auto;

  &:hover .poster-box {
    display: none;
  }

  &:hover ul {
    display: block;
  }
}
</style>
