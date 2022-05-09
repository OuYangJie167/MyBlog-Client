<template>
    <div class="menu-container">
        <RouterLink 
        :exact="item.exact" 
        :to="{name: item.name}" 
        v-for="item in menus" 
        :key="item.link"
        active-class="select"
        exact-active-class="">
            <Icon :type="item.icon" />
            {{ item.title }}
        </RouterLink>
    </div>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
export default {
    components: {
        Icon
    },
    data() {
        return {
            menus: [
                {
                    name: "Home",
                    icon: "home",
                    title: "首页",
                    exact: true
                },
                {
                    name: "Blog",
                    icon: "blog",
                    title: "文章",
                    exact: false
                },
                {
                    name: "About",
                    icon: "about",
                    title: "关于我",
                    exact: true
                },
                {
                    name: "Project",
                    icon: "code",
                    title: "项目&效果",   
                    exact: true
                },
                {
                    name: "Message",
                    icon: "chat",
                    title: "留言板",
                    exact: true
                }
            ]
        }           
    },
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
    width: 100%;
    color: #fff;
    a {
        display: block;
        width: 100%;
        padding: 15px 50px;
        box-sizing: border-box;
        text-align: left;
        &.select {
            background-color: darken(#fff, 50%);
        } 
        &.select:hover {
            color: inherit;
        }
        
        .icon-container {
            margin-right: 4px;
        }
    }
}
</style>