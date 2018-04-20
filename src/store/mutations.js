import Vue from "vue";

export default {
  ADD_TAP_COUNT: state => {
    state.tapCount++;
  },
  //
  SET_LANG: (state, { lang }) => {
    if (state.langs.indexOf(lang) !== -1) {
      state.lang = lang;
    }
  },
  SET_ITEMS: (state, { items }) => {
    items.forEach(item => {
      if (item) {
        Vue.set(state.items, item.id, item);
      }
    });
  },
  SET_USER: (state, { id, user }) => {
    Vue.set(state.users, id, user || false);
  }
};
