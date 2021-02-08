import Vue from 'vue'
import App from './App'
import { myrequest } from 'util/request.js'

const api = "http://localhost:8080"

Vue.prototype.$myrequest = myrequest

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
