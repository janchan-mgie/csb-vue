import Vue from "vue";
import App from "./App";
import { createRouter } from "./router";
import { createStore } from "./store";
import { sync } from "vuex-router-sync";

import { createLocale } from "./plugins/i18n";

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp(ssrContext) {
  // create store and router instances
  const store = createStore();
  const router = createRouter();
  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router);

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    ssrContext,
    render: h => h(App)
  });

  // router.beforeEach((to, from, next) => {
  //   checkLogin(app.$children[0], to, from, next)
  // })

  // set i18n configurable, to add setter before i18n plugin
  Object.defineProperty(Vue.prototype, "$18n", {
    get: function get() {},
    set: function set(i18n) {
      this._i18n = i18n;
    },
    configurable: true
  });
  // inject i18n to all child components
  Vue.prototype.$18n = createLocale();

  Vue.prototype.$app = app._renderProxy.$children;
  Vue.prototype.$app2 = app.$children;

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store };
}
