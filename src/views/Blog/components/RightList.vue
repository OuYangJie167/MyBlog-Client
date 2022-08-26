<template>
    <ul class="right-list-container">
        <li v-for="(item, i) in list" :key="i">
            <h3 @click="handleClick(item)" :class="{select: item.isSelect}">
                {{ item.name }} 
                <span class="subtitle">{{ item.articleCount }}</span>
            </h3>
            <RightList :list="item.children" @select="handleClick" />
        </li>
    </ul>
</template>

<script>
export default {
    name: "RightList",
    props: {
        list: {
            type: Array,
            data: () => []
        }
    },
    methods: {
        handleClick(item) {
            this.$emit("select", item);
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.right-list-container {
    .right-list-container {
        margin-left: 1em;
    }
    li {
        min-height: 40px;
        line-height: 40px;
        cursor: pointer; 
        .select {
            color: @warn;
        }
    }

    .subtitle {
        font-size: 1rem;
        font-weight: lighter;

        margin-left: 10px;
    }
} 
</style>