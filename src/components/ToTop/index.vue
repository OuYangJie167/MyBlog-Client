<template>
    <div v-show="show" @click="handleClick" class="toTop-container">
        Top
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    created() {
        this.$bus.$on("mainScroll", this.handleScroll);
    },
    destroyed() {
        this.$bus.$off("mainScroll", this.handleScroll);
    },
    methods: {
        handleScroll(dom) {
            if(!dom) {
                this.show = false;
                return;
            }

            this.show = dom.scrollTop >= 500;
        },
        handleClick() {
            this.$bus.$emit("setMainScroll", 0);
        }
    }
}
</script>

<style scoped lang="less"> 
@import "~@/styles/var.less";
.toTop-container {
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;

    cursor: pointer;
    color: #fff;
    background-color: @primary;

    position: fixed;
    right: 50px;
    bottom: 50px;
}
</style>