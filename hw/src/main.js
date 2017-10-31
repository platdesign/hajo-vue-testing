// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './services/router'
import AppView from './views/app';


Vue.config.productionTip = false



router.addRoutes([

  {
    path: '/',
    component: AppView
  }

]);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
