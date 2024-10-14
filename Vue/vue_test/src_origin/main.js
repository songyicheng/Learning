// 引入的是残缺版Vue(缺少模板编译器)
// 完整版 import Vue from 'vue/dist/vue'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')