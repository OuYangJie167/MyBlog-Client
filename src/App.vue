<template>
  <div id="app" class="app-container">
    <!-- <ImageLoad src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
    placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" :duration="5000"/> -->
    <Layout>
      <template #left>
         <SideAside />
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout/index.vue";
import SideAside from "@/components/SideAside/index.vue";
export default {
  components: {
    SideAside,
    Layout
  }
}
</script>

<style lang="less">
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
}
</style>
