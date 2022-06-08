import { createRouter, createWebHistory } from "vue-router"
import Home from "@/components/Home.vue"
import Join from "@/components/Join.vue"
import Login from "@/components/Login.vue"
import About from "@/components/About.vue"
import NotFound from "@/components/NotFound.vue"

const routes=[

    //alias 기존주소에 별칭 부여, redirect 다른 페이지로 이동
    {path:"/", name:"Home", redirect:'/main'},
    {path:"/portfolio", component:Home, alias:'/main'},
    {path:"/join", name:"Join", component:Join},
    {path:"/login", name:"Login", component:Login},
    {path:"/about", name:"About", component:About},
    {path:"/:catchAll(.*)+", component:NotFound},
]

const router =createRouter({
    history:createWebHistory(),routes,
})

export default router


