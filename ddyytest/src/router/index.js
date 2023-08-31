import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue';
import About from '../views/AboutView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: About },
//   { path: '/guidance', component: Guidance }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// router.beforeEach((to, from, next) => {
//   if (to.path === from.path && to.path !== '/') {  // 判断目标路径是否相同
//     return next(false)  // 阻止路由跳转
//   }

//   next()  // 允许路由跳转
// })
// const routerRePush = VueRouter.prototype.push
// VueRouter.prototype.push = function (location) {
//   return routerRePush.call(this, location).catch(error => error)
// }


export default router
