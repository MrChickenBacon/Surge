<template>
  <div>
    <p v-on:click="findDay()">.</p>
  </div>
</template>

<script>
export default {
  name: "TextBlock",
  methods: {
    findDay() {
      var myDate = new Date();
      console.log(myDate);
    }
  },
  mounted() {
  }
};
</script>

<style scoped>
p {
  font-weight: bold;
}
</style>
