<template>
  <b-container fluid>
    <div class="hello">
      <h1 v-on:click="whatDay()">Hvilken dag er det idag?</h1>
      <img width="auto" height="540" :src="getDay()" alt="altText">
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to something...",
      day: "",
      place: "http://www.vg.no"
    };
  },
  mounted() {
    this.whatDay();
  },
  methods: {
    whatDay() {
      var myDate = new Date();

      if (myDate.getDay() === 1) this.day = "mandag.jpg";
      else if (myDate.getDay() === 2) this.day = "tirsdag.jpg";
      else if (myDate.getDay() === 4)
        this.day =
          "/static/img/emil.042478a.png";
      else if (myDate.getDay() === 3)
        this.day =
          "https://media3.giphy.com/media/3o7aD7KLo6jJF4VBhS/giphy.gif";
      else if (myDate.getDay() === 5) this.day = "fredag.jpg";
      else if (myDate.getDay() === 6) this.day = "lørdag.jpg";
      else if (myDate.getDay() === 7) this.day = "søndag.jpg";
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
