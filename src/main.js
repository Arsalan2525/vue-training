import { Carousel, Layout, Breadcrumb, Menu, Card, Modal, InputNumber, Button, Table, Anchor, Icon, Divider , Tag} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCartPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.config.productionTip = false

Vue.use(Carousel)
Vue.use(Layout)
Vue.use(Breadcrumb)
Vue.use(Menu)
Vue.use(Card)
Vue.use(VueRouter)
Vue.use(Modal)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(Table)
Vue.use(Anchor)
Vue.use(Icon)
Vue.use(Divider)
Vue.use(Tag)

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
