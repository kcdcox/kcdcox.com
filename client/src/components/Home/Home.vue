<template>
  <div class="home">
    <FirstLook />
    <HomeGrid/>
  </div>
</template>

<script>
import FirstLook from "./FirstLook.vue";
import HomeGrid from "./HomeGrid.vue";
export default {
  name: "Home",
  components: {
    FirstLook,
    HomeGrid
  }
};
</script>

<style>
.home{
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
}
</style>
