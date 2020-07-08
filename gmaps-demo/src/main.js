import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import GmapCluster from 'vue2-google-maps/src/components/cluster'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDN8NUmCxWipGsgkvbysKX1OhG_ieeZT_4'
  }
})
Vue.component('GmapCluster', GmapCluster)

Vue.config.productionTip = false

export const eb = new Vue({})

new Vue({
  render: h => h(App),
}).$mount('#app')
