import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import Upgrade from './components/Upgrade'
import Help from './components/Help'
import Share from './components/Share'
import Setting from './components/Setting'
import News from './components/subtopic/News'
import Partner from './components/subtopic/Partner'
import Narena from './components/subtopic/Narena'
import Shop from './components/subtopic/Shop'
import Agents from './components/goods/Agents'
import Arena from './components/goods/Arena'
import Members from './components/goods/Members'
import axios from 'axios'

Vue.use(VueRouter)
Vue.config.debug = true;
Vue.prototype.$ajax = axios;

const routes = [
   { path: '/', component: Home,
        children: [
            {path: '/components/subtopic/News',component: News},
            {path: '/components/subtopic/Partner',component: Partner},
            {path: '/components/subtopic/Narena',component: Narena},
            {path: '/components/subtopic/Shop',component: Shop}
        ]
    },
    { path: '/components/upgrade', component: Upgrade },
    { path: '/components/help', component: Help },
    { path: '/components/share', component: Share },
    { path: '/components/setting', component: Setting },
    { path: '/components/goods/Agents',component: Agents },
    { path: '/components/goods/Arena',component: Arena },
    { path: '/components/goods/Members',component: Members },
    { path: '/components/Register',component: Register },
    { path: '/components/Login',component: Login }
]
const router = new VueRouter({
    mode: 'history',
    routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box')