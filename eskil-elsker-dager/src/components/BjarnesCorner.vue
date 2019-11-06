<template>
  <div id="bjarne">
    <img id="pic" src="@/assets/emil.png">
    <h1>Hei?</h1>
    <button @click="$router.go(-1)">Back</button>
    <router-link to="/bjarne2" tag="button">Gå til en annen Testside</router-link>
  </div>
</template>

<script>
export default {
  name: 'BjarnesCorner'
}
</script>

<style scoped>

</style>
