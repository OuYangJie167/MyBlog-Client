<template>
  <div class="home-container">
    <button class="btn" @click="handleClick">点我</button>
    <div ref="container"></div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$showMessage("成功", "success", this.$refs.container);
    }
  }
}
</script>

<style scoped lang="less">
  .home-container { 
    div {
      width: 600px;
      height: 400px;

      margin: 120px auto;
      border: 1px solid;
    }
  }
</style>