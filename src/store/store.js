import Vue from "vue";
import Vuex from "vuex";

import stock from "./modules/stock";
import portfolio from "./modules/portfolio";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: [stock, portfolio]
});
