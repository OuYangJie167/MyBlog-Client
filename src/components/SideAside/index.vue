<template>
    <div class="side-aside-container">
        <template v-if="data">
            <Avatar :url="data.avatar" :size="125" />
            <h1 class="title">{{data.siteTitle}}</h1>
        </template>
       
        <Menu />
        <Contact v-if="data"/>
        <p v-if="data" class="footer">
            {{data.icp}}
        </p>
    </div>
</template>

<script>
import Menu from "./Menu/index.vue";
import Contact from "./Contact/index.vue";
import Avatar from "@/components/Avatar/index.vue";
import { mapState } from "vuex";
export default {
    components: {
        Menu,
        Contact,
        Avatar
    },
    computed: mapState("setting", ["data"])
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.side-aside-container { 
    width: 300px;
    height: 100%;
    text-align: center;
    background-color: @dark;
    .title {
        color: #fff;
    } 
    .footer {
        color: @lightWords;
    }   
}
</style>