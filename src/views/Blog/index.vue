<template>
  <Layout>
    <BlogList />
    <template #right>
      <BlogCategory />
    </template> 
  </Layout>
</template>

<script>
import Layout from "@/components/Layout/index.vue";
import BlogList from "./components/BlogList.vue";
import BlogCategory from "./components/BlogCategory.vue";
export default {
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
}
</script>

<style scoped>

</style>