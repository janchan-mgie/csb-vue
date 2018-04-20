<template>
  <div>
  <p>top menu</p>
  asd
  </div>
</template>

<script>
import { links } from "../configs/topMenu";
export default {
  name: "top-menu",
  data() {
    return {
      menus: links()
    };
  },
  computed: {
    site() {
      return this.$app[0].site;
    }
  },
  created() {},
  methods: {
    setLang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  color: red;
}
</style>
