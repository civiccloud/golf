import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import Upgrade from './components/Upgrade'
import Help from './components/Help'
import Share from './components/Share'
import Setting from './components/Setting'
import News from './components/home/News'
import Partner from './components/home/Partner'
import Narena from './components/home/Narena'
import Shop from './components/home/Shop'

Vue.use(VueRouter)
Vue.config.debug = true;

const routes = [
   { path: '/', component: Home,
        children: [
            {path: '/components/home/News',component: News},
            {path: '/components/home/Partner',component: Partner},
            {path: '/components/home/Narena',component: Narena},
            {path: '/components/home/Shop',component: Shop},
        ]
    },
    { path: '/components/upgrade', component: Upgrade },
    { path: '/components/help', component: Help },
    { path: '/components/share', component: Share },
    { path: '/components/setting', component: Setting }
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