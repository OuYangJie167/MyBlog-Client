<template>
  <div class="image-load-container">
      <img :src="placeholder" v-if="!everyThingDom" class="placeholder" alt="">
      <img :src="src" @load="hangleLoad" alt="" :style="{
          opacity: originOpacity,
          transition: `${duration}ms`
      }">
  </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            default: 500
        }
    },
    data() {
        return {
            originLoading: false, // 图片加载状态
            everyThingDom: false // 所有缓存结束后
        }
    },
    computed:{
        originOpacity() {
            return this.originLoading ? 1 : 0;
        }
    },
    methods: {
        hangleLoad() {
            this.originLoading = 1;
            setTimeout(()=> {
                this.everyThingDom = true;
            }, this.duration)
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-load-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
        .self-fill();
        object-fit: cover;
    }
    .placeholder {
      filter: blur(2rem);
    }
}
</style>