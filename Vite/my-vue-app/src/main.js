import { createApp } from 'vue'
import "@/assets/less/index.less"
import App from './App.vue'
import router from "./router"
// 完整引入 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入 pinia
import { createPinia } from 'pinia'
// 引入 mockjs
import "@/api/mock.js"

import api from "@/api/api"
import { useAllDataStore } from './stores'
function isRoute(to) {
  let res = router.getRoutes();
  let resFil = res.filter((item) => item.path === to.path);
  return resFil.length > 0;
}
router.beforeEach((to, from) => {
  if (to.path !== '/login' && !store.state.token) {
    return { name: "login" };
  } 
  if(!isRoute(to)){
    return {name:'404'};
  }
});
const pinia = createPinia();
const app = createApp(App);

app.config.globalProperties.$api = api;
app.use(pinia);
const store = useAllDataStore();
store.addMenu(router, "refresh")
app.use(ElementPlus);
app.use(router).mount('#app');
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}