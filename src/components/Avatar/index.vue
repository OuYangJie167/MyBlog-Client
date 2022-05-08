<template>
<img :src="url" :style="{
    width: size + 'px'
}" alt="">
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 150
        }
    }
}
</script>

<style>

</style>