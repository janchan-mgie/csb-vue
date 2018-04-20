<template>
  <div id="app">
  	<top-menu ref="topMenu"></top-menu>
    <img width="15%" src="./assets/logo.png">
	  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      site: "Vue-trial"
    };
  },
  components: {
    "top-menu": () => import("./components/TopMenu")
  },
  created() {
    this.$i18n.locale = "hk";
  },
  mounted() {
    console.log(this.$app.$refs);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
