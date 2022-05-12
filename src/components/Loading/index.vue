<template>
    <img :src="url" alt class="loading-container" />
</template>

<script>
import url from "@/assets/loading.svg";
export default {
    data() {
        return {
            url
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.loading-container {
    .self-center();
}
</style>