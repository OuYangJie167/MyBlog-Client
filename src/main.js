import Vue from 'vue'
import App from './App.vue'
// 全局样式
import "./styles/global.less";
// 路由
import router from "@/router/index.js";
// 弹出信息
import showMessage from "./utils/showMessage/index.js";
Vue.prototype.$showMessage = showMessage;

import "./api/banner.js";
import "./Mock";

import vLoading from "./directives/loading.js";
Vue.directive("loading", vLoading);

import * as getBlog from "./api/blog.js";
getBlog.postComment({
    nickname: "昵称",
    content: "评论内容，纯文本",
    blogId: "123",
  })
  .then((r) => {
    console.log(r);
  });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
