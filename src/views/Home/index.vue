<template>
  <div v-loading="isLoading" class="home-container" ref="container" @wheel="handleWheel"> 
      <ul class="carousel-container" :style="{
        marginTop
      }" @transitionend="transitionEnd">
        <li v-for="item in banners" :key="item.id">
          <CarouselItem :carousel="item" />
        </li>
      </ul>
      <div class="icon icon-up" @click="switchTo(index - 1)" v-show="index >= 1">
        <Icon type="arrowUp" />
      </div>
       <div class="icon icon-down" @click="switchTo(index + 1)" v-show="index < banners.length - 1">
        <Icon type="arrowDown" />
      </div>

      <ul class="indicator">
        <li v-for="(item, i) in banners" :key="item.id" :class="{
          active: i === index
        }" @click="switchTo(i)"></li>
      </ul>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner.js";
import Icon from "@/components/Icon/index.vue";
import CarouselItem from "./CarouselItem.vue";
export default {
  components: {
    CarouselItem,
    Icon
  },
  data() {
    return {
      banners: [],
      index: 0,
      isLoading: true,
      containerHeight: this.$refs.container,
      switching: false
    }
  },
  async created() {
    this.banners = await getBanners();
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if(this.switching) {
        return
      }
      if(e.deltaY === -100 && this.index > 0) {
        this.index --;
        this.switching = true;
      } else if(e.deltaY === 100 && this.index < this.banners.length - 1){
        this.index ++;
        this.switching = true;
      }
    },
    transitionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    }
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  position: relative;
  width: 100%;
  height: 100%;
  @spacing: 15px;
  .carousel-container {
    position: absolute;
    width: 100%;
    height: 100%; 
    transition: all 1s;
    li {
      width: 100%;
      height: 100%;
    }
  }  

  .icon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: @gray;

    font-size: 2.8rem;
    cursor: pointer;

    &.icon-up {
      top: @spacing;
      animation: jump-up 1.5s infinite;
    }
    &.icon-down {
      bottom: @spacing;
      animation: jump-down 1.5s infinite;
    }
    @jump: 10px;
    @keyframes jump-up {
      0%{
        transform: translate(-50%, @jump);
      }
      50%{
        transform: translate(-50%, -@jump);
      }
      100%{
        transform: translate(-50%, @jump);
      }
    }
    @keyframes jump-down {
      0%{
        transform: translate(-50%, -@jump);
      }
      50%{
        transform: translate(-50%, @jump);
      }
      100%{
        transform: translate(-50%, -@jump);
      }
    }
  }

  .indicator {
    .self-center();
    left: auto;
    right: @spacing;

    li {
      width: @spacing - 5px;
      height: @spacing - 5px;

      cursor: pointer;
      border-radius: 50%;

      margin: 10px 0;
      border: 1px solid #FFF;

      &.active {
        background-color: #FFF;
      }
    }
  }
}
</style>