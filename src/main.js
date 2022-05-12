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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
