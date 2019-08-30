import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import Routes from './routes'
// src/plugins/vuetify.js

import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.use(Vuetify)

export default new Vuetify({})

Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  routes: Routes
})

new Vue({
  store,

  render: function (h) {
    return h(App)
  },
  router: router,
  vuetify: new Vuetify(),
}).$mount('#app')