<template>
  <div id="app">
    <!-- <Avatar url="http://mdrs.yuanjin.tech/img/20201130153821.png" /> -->
    <ImageLoad src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
    placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" :duration="5000"/>
  </div>
</template>

<script>
  import ImageLoad from "@/components/ImageLoad/index.vue";
  export default {
    components: {
      ImageLoad
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
  height: 400px;
  position: relative;
  margin: 120px auto;
  border: 1px solid;
}
</style>
