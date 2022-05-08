<template>
    <div class="side-aside-container">
        <Avatar url="http://mdrs.yuanjin.tech/img/20201130153821.png" />
        <Menu />
        <Contact />
    </div>
</template>

<script>
import Menu from "./Menu/index.vue";
import Contact from "./Contact/index.vue";
import Avatar from "@/components/Avatar/index.vue";
export default {
    components: {
        Menu,
        Contact,
        Avatar
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.side-aside-container { 
    width: 300px;
    height: 100%;
    background-color: @dark;    
}
</style>