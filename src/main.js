import Vue from 'vue'
import App from './App.vue'
// 全局样式
import "./styles/global.less";
// 路由
import router from "@/router/index.js";
// 弹出信息
import showMessage from "./utils/showMessage/index.js";
Vue.prototype.$showMessage = showMessage;
// 导入事件总线
import"./eventBus.js";
import "./api/banner.js";
import "./Mock";

import store from "./store";
store.dispatch("setting/fetchSetting");

import vLoading from "./directives/loading.js";
import vLazy from "./directives/lazy.js";
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
