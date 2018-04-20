import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

// import config from '../configs'

Vue.use(Vuex);
//
export function createStore() {
  return new Vuex.Store({
    state: {
      // config: config,
      tapCount: 0,
      login: false,
      token: null
    },
    actions,
    mutations,
    getters
  });
}
