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
    <div class="container">
      <div class="result-box">
        <div class="movie result" v-for="movie in store.moviesResearch">
          <AppCard :list="movie"></AppCard>
        </div>
        <span :class="store.searchbar == '' ? '' : 'd-none'">
          <font-awesome-icon icon="fa-solid fa-b" fade />
        </span>
      </div>
      <div class="result-box">
        <div class="serie result" v-for="serie in store.seriesResearch">
          <AppCard :list="serie"></AppCard>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.container {
  padding: 7rem 3rem 4rem 3rem;
}

span {
  display: flex;
  padding: 122px 0;
  justify-content: center;
  align-items: center;
  font-size: 15rem;
  color: red;
  font-family: "Ruda", sans-serif;
  font-weight: bolder;
  opacity: 0.8;
  text-shadow: 0px 0px 3px red;
}

.result-box {
  width: 100%;
  display: flex;
  justify-content: center;
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
