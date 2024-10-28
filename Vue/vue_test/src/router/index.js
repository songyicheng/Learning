import VueRouter from "vue-router"
import About from "@/pages/About.vue"
import Hello from "@/pages/Hello.vue"
import Message from "@/pages/Message.vue"
import News from "@/pages/News.vue"

export default new VueRouter({
    routes: [
        {   
            name:'abc',
            path: '/about',
            component: About
        },
        {
            path: '/hello',
            component: Hello,
            children:[
                {
                    path:'news',
                    component: News,
                },
                {
                    path:'message',
                    component: Message,
                    props:{
                        a:1,
                        b:'hello'
                    }
                },
            ]
        },
    ]
})