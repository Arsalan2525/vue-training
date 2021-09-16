import { Carousel, Layout, Breadcrumb, Menu, Card } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(Carousel)
Vue.use(Layout)
Vue.use(Breadcrumb)
Vue.use(Menu)
Vue.use(Card)
// Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
