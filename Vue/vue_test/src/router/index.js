import VueRouter from "vue-router"
import About from "@/pages/About.vue"
import Hello from "@/pages/Hello.vue"
import Message from "@/pages/Message.vue"
import News from "@/pages/News.vue"

const router = new VueRouter({
    mode:"history",
    routes: [
        {
            name: 'abc',
            path: '/about',
            component: About,
            meta: { isAuth: true,title:'关于' }
        },
        {
            path: '/hello',
            component: Hello,
            meta: { isAuth: true ,title:'主页'},
            children: [
                {
                    path: 'news',
                    component: News,
                    meta: { isAuth: true,title:'新闻' },
                },
                {
                    path: 'message',
                    component: Message,
                    props: {
                        a: 1,
                        b: 'hello'
                    },
                    meta: { isAuth: true,title:'消息' },
                },
            ]
        },
    ]
})

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
    console.log(to,from)
    if (to.meta.isAuth) { 
        next() }
})
// 全局后置路由守卫
router.afterEach((to,from)=>{
    console.log(to,from)
    document.title=to.meta.title||'vue-router'
})
export default router