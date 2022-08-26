<template>
  <div class="blog-toc-container">
    <h3>目录</h3>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import debounce from "@/utils/debounce.js";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      activeAnchor: "article-md-title-1",
    }
  },
  props: {
    toc: {
      type: Array,
    }
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 100);
    this.$bus.$on("mainScroll", this.setSelectDebounce)
  },
  destrited() {
    this.$bus.$off("mainScroll", this.setSelectDebounce)
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    setSelect(scrollDom) {
      if(!scrollDom) {
        return
      }
      this.activeAnchor = "";
      const range = 200;
      for(const dom of this.doms) {
        if(!dom){
          return
        }
        const top = dom.getBoundingClientRect().top;
        if(top >= 0 && top <= range) {
          this.activeAnchor = dom.id;
          return
        } else if(top > range) {
          return 
        } else {
          this.activeAnchor = dom.id;
        }

      }
    }
  },
  computed: {
    tocWithSelect() {
      const getTOC = (toc = [])=>{
        return toc.map(t => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children)
        }))
      }

      return getTOC(this.toc);
    },
    doms() {
      const doms = [];
      const addToDoms = (toc)=>{
        for(const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if(t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      }
      addToDoms(this.toc);
      return doms;
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.blog-toc-container {
  box-sizing: border-box;
  padding: 20px;
  overflow-x: hidden; 
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 2em;
    margin: 0;
  }
}
</style>