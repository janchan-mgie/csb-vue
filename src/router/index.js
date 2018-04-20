import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export function createRouter() {
  return new VueRouter({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: "/",
        name: "home",
        component: () => import("../pages/Home")
      },
      {
        path: "/about",
        name: "about",
        component: () => import("pages/about")
      },
      {
        path: "/editor",
        name: "editor",
        component: () => import("pages/editor")
      },
      {
        path: "/temp",
        name: "temp",
        component: () => import("pages/temp")
      },
      {
        path: "*",
        name: "404",
        component: () => import("pages/notfound")
      }
    ]
  });
}
