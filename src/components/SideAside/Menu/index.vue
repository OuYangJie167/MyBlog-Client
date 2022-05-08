<template>
    <div class="menu-container">
        <a :href="item.link" v-for="item in menus" :key="item.link" :class="{select: isSelect(item)}">
            <Icon :type="item.icon" />
            {{ item.title }}
        </a>
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
                    link: "/",
                    icon: "home",
                    title: "首页"
                },
                {
                    link: "/blog",
                    icon: "blog",
                    title: "文章",
                    startWith: true
                },
                {
                    link: "/about",
                    icon: "about",
                    title: "关于我"
                },
                {
                    link: "/project",
                    icon: "code",
                    title: "项目&效果"
                },
                {
                    link: "/message",
                    icon: "chat",
                    title: "留言板"
                }
            ]
        }           
    },
    methods: {
        isSelect(item) {
            const link = item.link.toLowerCase();
            const pathName = location.pathname.toLowerCase();
            if(item.startWith) {
                return pathName.startsWith(link);
            } else {
                return pathName === link;
            }
        }
    }
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