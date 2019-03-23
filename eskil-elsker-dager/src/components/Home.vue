<template>
  <b-container fluid>
    <div class="hello">
      <h1 v-on:click="whatDay()">Hvilken dag er det idag?</h1>
      <img width="auto" height="400" :src="getDay()" alt="picture not found">
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "HOME",
      day: ""
    };
  },
  mounted() {
    this.whatDay();
  },
  methods: {
    whatDay() {
      var myDate = new Date();
      if      (myDate.getDay() === 1) this.day = "/static/img/mandag.jpg";
      else if (myDate.getDay() === 2) this.day = "/static/img/tirsdag.jpg";
      else if (myDate.getDay() === 3) this.day = "/static/img/wed.gif";
      else if (myDate.getDay() === 4) this.day = "/static/img/torsdag.jpg";
      else if (myDate.getDay() === 5) this.day = "/static/img/fredag.gif";
      else if (myDate.getDay() === 6) this.day = "https://media.giphy.com/media/l3vRafNoQAX2d9HX2/giphy.gif";
      else if (myDate.getDay() === 7) this.day = "https://media.giphy.com/media/xT9IgOdxEm8gYoJblC/giphy.gif";
    },
    getDay() {
      return this.day;
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

* {
  overflow: hidden;
}

div {
  position: relative;
  text-align: center;
}
</style>
