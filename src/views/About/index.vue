<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe class="about-content" v-if="src" :src="src" @load="srcLoaded = true"  frameborder="0"></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      srcLoaded: false,
    };
  },
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
  computed: mapState("about", { src: "data", loading: "loading",}),
}
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.about-content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: block;
}

</style>