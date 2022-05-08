<template>
  <div class="empty-container">
      <Icon type="empty" />
      无数据
  </div>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
export default {
    components: {
        Icon
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container {
    .self-center();
    display: flex;
    flex-direction: column;

    color: @gray;

    .icon-container {
        font-size: 6rem;
    }
}
</style>