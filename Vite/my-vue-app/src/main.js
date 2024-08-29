import { createApp } from 'vue'
import "@/assets/less/index.less"
import App from './App.vue'
import router from "./router"
// 完整引入 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入 pinia
import {createPinia} from 'pinia'

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(ElementPlus);
app.use(router).mount('#app');
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }