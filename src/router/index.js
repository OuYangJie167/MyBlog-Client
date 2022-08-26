import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routers.js";
import titleController from "../utils/titleController.js";
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: "history"
})
router.afterEach((to, from) => {
    if(to.meta.title) {
        titleController.setRouterTitle(to.meta.title);
    }
})
export default router;