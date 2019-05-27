import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './app.vue'
import Routes from './routes'

// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
    routes: Routes,
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
