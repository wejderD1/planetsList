import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App.vue'
import Loader from '@/components/app/Loader.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.component('Loader', Loader)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
