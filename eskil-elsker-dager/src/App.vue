<template>
  <div id="app">
    <Navbar></Navbar>
    <BitcoinPrice></BitcoinPrice>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import BitcoinPrice from "@/components/BitcoinPrice";


export default {
  name: "App",
  components: {
    Navbar,
    BitcoinPrice
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
  text-shadow: rgb(255, 115, 0) 2px 0 5px;
}
#wea {
  text-align: center;
}
body {
  background-image: linear-gradient(to bottom, rgb(23, 162, 184), rgb(132, 59, 180));
}

* {
            -webkit-animation: colorchange 30s infinite; /* Safari 4+ */
            -moz-animation: colorchange 30s infinite; /* Fx 5+ */
            -o-animation: colorchange 30s infinite; /* Opera 12+ */
            animation: colorchange 30s infinite; /* IE 10+, Fx 29+ */
        }

		@-webkit-keyframes colorchange {
        0%   {background-image: linear-gradient(to bottom, rgb(23, 162, 184), rgb(132, 59, 180));}
  		20%  {background-image: linear-gradient(to bottom, rgb(132, 59, 180), rgb(23, 162, 184))}
  		40%  {background-color:hotpink;}
  		60%  {background-color:rebeccapurple;}
  		80%  {background-color:limegreen;}
  		100% {background-color:cyan;}
        }
</style>
