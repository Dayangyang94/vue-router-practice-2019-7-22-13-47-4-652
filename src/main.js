import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import state from './store/index'
import axios from "axios"
import router from './router/index'
Vue.config.productionTip = false
Vue.use(router)
Vue.use(Vuex)
const vueStore=new Vuex.Store(state)
new Vue({
router,
store:vueStore,
render: h => h(App),
}).$mount('#app')
