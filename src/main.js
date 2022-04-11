import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import '@/assets/scss/normalize.scss'
import '@/assets/scss/reset.scss'
import '@/assets/scss/helper.scss'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueAxios,axios)
new Vue({
  render: h => h(App),
}).$mount('#app')
