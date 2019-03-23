<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <br>
    <router-link to="/bjarne" tag="button">Gå til Bjarne</router-link>
    <TextBlock></TextBlock>
  </div>
</template>

<script>
import TextBlock from "@/components/TextBlock";
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    TextBlock,
    Navbar
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
}
#quote {
  text-align: center;
}
#wea {
  text-align: center;
}
body {
  background-image: linear-gradient(to bottom, rgb(23, 162, 184), rgb(132, 59, 180));
}
</style>
