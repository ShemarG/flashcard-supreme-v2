import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(BootstrapVue)
Vue.prototype.$http = Axios


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
