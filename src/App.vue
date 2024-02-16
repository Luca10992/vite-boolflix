<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {};
  },

  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <body>
    <header>
      <AppHeader></AppHeader>
    </header>

    <main>
      <AppMain></AppMain>
    </main>

    <footer>
      <AppFooter></AppFooter>
    </footer>
  </body>
</template>

<style lang="scss">
@use "../src/styles/generals.scss";
</style>
