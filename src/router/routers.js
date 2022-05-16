import Home from "@/views/Home/index.vue";
import Blog from "@/views/Blog/index.vue";
import About from "@/views/About/index.vue";
import Project from "@/views/Project/index.vue";
import Message from "@/views/Message/index.vue";
import BlogDetail from "@/views/Blog/Detail.vue";

export default [
    { name: "Home", path: "/", component: Home },
    { name: "Blog", path: "/blog", component: Blog },
    { name: "BlogDetail", path: "/blog/:id", component: BlogDetail },
    { name: "CategoryBlog", path: "/Blog/cate/:categoryId", component: Blog },
    { name: "About", path: "/about", component: About },
    { name: "Project", path: "/project", component: Project },
    { name: "Message", path: "/message", component: Message }
];