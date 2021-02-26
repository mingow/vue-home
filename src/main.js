import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Meta from "vue-meta";
import VueRouter from 'vue-router';
import dotCalc from './pages/dotCalc/index'
 

Vue.config.productionTip = false
Vue.use(Meta);
Vue.use(VueRouter)

const routes = [
  { path: '/dotCalc', component: dotCalc },
]
 
const router = new VueRouter({
  mode:'history',
  routes 
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
