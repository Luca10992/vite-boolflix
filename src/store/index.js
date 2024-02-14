import { reactive } from "vue";

export const store = reactive({
  moviesUri: "https://api.themoviedb.org/3/search/movie",
  seriesUri: " https://api.themoviedb.org/3/search/tv",
  apiKey: "?api_key=6408f124b16723174543f6ecc003e7e1",
  itLanguage: "&language=it-IT",
  movieResearch: [],
  seriesResearch: [],
});
