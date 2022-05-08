<template>
  <div id="app">
    <!-- <ImageLoad src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
    placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" :duration="5000"/> -->

    <SideAside />
  </div>
</template>

<script>
import SideAside from "@/components/SideAside/index.vue";
export default {
  components: {
    SideAside
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 600px;
  height: 100vh;
  position: relative;
}
</style>
