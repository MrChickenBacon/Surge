<template>
  <div>
    <img src="@/assets/Emil2.png">
    <h1>Hei?</h1>
    <button @click="$router.go(-1)">Back</button>
  </div>
</template>

<script>
export default {
  name: 'BjarnesOtherCorner'
}
</script>

<style scoped>
img {
  width: 50%;
  height: auto;
}
</style>
