// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Antd from 'ant-design-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


import App from './App'
import 'ant-design-vue/dist/antd.css'
import router from './router'

Vue.use(Antd)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})