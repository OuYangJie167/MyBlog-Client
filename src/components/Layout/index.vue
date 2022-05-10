<template>
    <div class="layout-container">
        <header class="right">
            <slot name="left"></slot>
        </header>
        <main class="main" id="main">
            <slot></slot>
        </main>
        <footer class="right">
            <slot name="right"></slot>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.layout-container {
    width: 100%;
    height: 100%;
    display: flex;

    .left, .right {
        flex: 0 0 auto;
        overflow: hidden;
    }

    .main {
        flex: 1 1 auto;
    }
}
</style>