<template>
  <div id="app" class="app-container">
    <Layout>
      <template #left> 
        <SideAside />
      </template> 
      <template #default>
        <RouterView />
        <ToTop />
      </template>
    </Layout>
  </div>  
</template>

<script>
import SideAside from '@/components/SideAside/index.vue';
import Layout from "@/components/Layout/index.vue";
import ToTop from "@/components/ToTop/index.vue";
export default {
    components: { 
      SideAside,
      Layout,
      ToTop 
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
}
</style>