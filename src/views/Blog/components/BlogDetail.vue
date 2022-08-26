<template>
    <div class="blog-detail-container">
        <h1>{{ data.title }}</h1>
        <div class="aside">
            <span>日期：{{ formatDate(data.createDate) }}</span>
            <span>浏览：{{ data.scanNumber }}</span>
            <a>评论：{{ data.commentNumber }}</a>
            <RouterLink :to="{
                name: 'CategoryBlog',
                params: {
                    categoryId: data.category.id
                }
            }">分类：{{ data.category.name }}</RouterLink>
        </div>
        <div v-html="data.htmlContent" class="markdown-body"></div>
    </div>
</template>

<script>
import formatDate from '@/utils/formatDate';
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    methods: {
        formatDate
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.aside {
    color: @gray;
    span,
    a {
        cursor: pointer;
        margin-right: 10px; 
    }
}
</style>