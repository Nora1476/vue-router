import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Main from "@/components/Main.vue";
import Join from "@/components/Join.vue";
import List from "@/components/List.vue";
import Login from "@/components/Login.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
  //alias 기존주소에 별칭 부여, redirect 다른 페이지로 이동
  //{path:"/portfolio", component:Home, alias:'/main',redirect:'/main'},
  { path: "/", name: "Home", component: Home },
  { path: "/main", name: "Main", component: Main, alias:'/main' },
  { path: "/join", name: "Join", component: Join,  props: true },
  { path: "/list", name: "List", component: List,  },
  { path: "/login", name: "Login", component: Login,  props: true },
  { path: "/:catchAll(.*)+", component: NotFound },
];

const router = createRouter({
  // createWebHistory url에 변화없이 사용
  // createWebHashHistory #를 넣는 주소가 됨
  history: createWebHistory(),
  routes,
});

export default router;
