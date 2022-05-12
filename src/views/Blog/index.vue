<template>
  <div class="blog-container">
      文章
      <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./components/RightList.vue";
export default {
  components: {
    RightList
  },
  data() {
    return {
      list: [
        {name: "1", isSelect: true},
        {name: "2", isSelect: false},
        {name: "3", isSelect: false, children:[
          {name: "1", isSelect: false},
          {name: "2", isSelect: false},
          {name: "3", isSelect: false},
          {name: "4", isSelect: false},
          {name: "5", isSelect: false},
        ]},
        {name: "4", isSelect: false},
        {name: "5", isSelect: false},
      ]
    }
  },
  methods: {
    handleSelect(item) {
      console.log(item);
    }
  }
}
</script>

<style>

</style>