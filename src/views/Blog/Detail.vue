<template>
    <Layout>
        <div ref="mainContainer" class="main-container" v-loading="isLoading">
            <BlogDetail :data="data" v-if="data" />
            <BlogComment />
        </div>
        <template #right> 
            <div class="right-content" v-loading="isLoading">
                <BlogTOC :toc="data.toc" v-if="data" />
            </div>
        </template>        
    </Layout>
</template>

<script>
import { getBlog }  from "@/api/blog.js";
import fetchData from "@/mixins/fetchData.js";
import mainScroll from "@/mixins/mainScroll.js";
import Layout from "@/components/Layout/index.vue";
import BlogTOC from "./components/BlogTOC.vue";
import BlogDetail from "./components/BlogDetail.vue";
import BlogComment from "./components/BlogComment.vue";
import titleController from "@/utils/titleController.js";
export default {
    mixins: [fetchData(null), mainScroll("mainContainer")],
    components: {
        Layout,
        BlogTOC,
        BlogDetail,
        BlogComment,
    },
    methods: {
        async fetchData() {
            const resp = await getBlog(this.$route.params.id);
            if (!resp) {
                // 文章不存在
                this.$router.push("/404");
                return;
            }
            titleController.setRouterTitle(resp.title);
            return resp;
        },
    },
    updated() {
        const hash = location.hash;
        location.hash = "";
        setTimeout(()=> {
            location.hash = hash;
        }, 100)
    }
}
</script>

<style scoped lang="less">
.main-container {
    position: relative;
    overflow-y: scroll;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;

    scroll-behavior: smooth;
}
.right-content {
    position: relative;
    width: 300px;
    height: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
}
</style>