<template>
  <div id="app">
    <img src="./assets/logo.png">
    <WeatherBlock></WeatherBlock>
    <router-view/>
  </div>
</template>

<script>
import WeatherBlock from "@/components/WeatherBlock";

export default {
  name: "App",
  components: {
    WeatherBlock
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
