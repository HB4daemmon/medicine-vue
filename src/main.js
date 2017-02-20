// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import MintUI from 'mint-ui'
// import 'assets/mint-ui/style.css'
import VueResource from 'vue-resource'

Vue.use(VueResource)
// Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  created: function () {
    window.Vue = this
  },
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
