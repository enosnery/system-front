import Vue from 'vue'
import App from './Registry.vue'
import VueSession from 'vue-session'
Vue.use(VueSession)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
