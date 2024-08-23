import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 按需导入 element-plus
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 按需导入 element-plus
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
// 添加别名
  resolve:{
    alias:[
      {
        find:"@",
        replacement:"/src",
      }
    ]
  }
})
