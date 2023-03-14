import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jquery from 'jquery'
Vue.prototype.$ = jquery
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    console.log(to.path);

    if ( to.path === '/' ) {
      next({
        path: '/topo',
        query: {redirect: to.fullpath} 
      })
    }
    else {
      next();
    }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
