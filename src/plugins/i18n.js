import Vue from "vue";
import VueI18n from "vue-i18n";

import * as hk from "../locales/zh-hk.json";
import * as cn from "../locales/zh-cn.json";
import * as en from "../locales/en.json";

Vue.use(VueI18n);

export function createLocale() {
  return new VueI18n({
    locale: "",
    fallbackLocale: "hk",
    messages: {
      hk: hk.default,
      cn: cn.default,
      en: en.default
    }
  });
}
