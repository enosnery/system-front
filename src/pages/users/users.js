import Vue from 'vue'
import App from './Users.vue'
import VueSession from 'vue-session'

Vue.config.productionTip = false;
Vue.use(VueSession);

new Vue({
  render: m => m(App),
}).$mount('#app');
