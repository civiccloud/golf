import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import Upgrade from './components/Upgrade'
import Shop from './components/Shop'
import Setting from './components/Setting'
import Wallet from './components/setting/Wallet'
import Partner from './components/setting/Partner'
import Order from './components/setting/Order'
import Help from './components/setting/Help'
import Share from './components/setting/Share'
import Settings from './components/setting/Settings'
import Phone from './components/setting/solfware/Phone'
import Address from './components/setting/solfware/Address'
import Passmod from './components/setting/solfware/Passmod'
import Nickname from './components/setting/solfware/Nickname'
import News from './components/News'
import Join from './components/Join'
import Narena from './components/Narena'
import Agents from './components/goods/Agents'
import Arena from './components/goods/Arena'
import Members from './components/goods/Members'
import axios from 'axios'

Vue.use(VueRouter)
Vue.config.debug = true;
Vue.prototype.$ajax = axios;

const routes = [
    { path: '/', component: Home },
    { path: '/components/Join', component: Join },
    { path: '/components/Register',component: Register },
    { path: '/components/Login',component: Login },
    { path: '/components/Shop',component: Shop},
    { path: '/components/Partner',component: Partner},
    { path: '/components/setting', component: Setting },
    { path: '/components/setting/Wallet', component: Wallet },
    { path: '/components/setting/Partner', component: Partner },
    { path: '/components/setting/Order', component: Order },
    { path: '/components/setting/help', component: Help },
    { path: '/components/setting/share', component: Share },
    { path: '/components/setting/settings', component: Settings },
    { path: '/components/setting/solfware/Phone', component: Phone },
    { path: '/components/setting/solfware/Address', component: Address },
    { path: '/components/setting/solfware/Passmod', component: Passmod },
    { path: '/components/setting/solfware/Nickname', component: Nickname },
    { path: '/components/goods/Agents',component: Agents },
    { path: '/components/goods/Arena',component: Arena },
    { path: '/components/goods/Members',component: Members },
    { path: '/components/subtopic/News',component: News},
    { path: '/components/subtopic/Narena',component: Narena}
]
const router = new VueRouter({
    mode: 'history',
    routes
})

//监听路由的实时变化情况
// router.afterEach(function () {
//     console.log(window.location.href);
//     for (var i = 0; i<titlelist().length; i++) {
//         if (this.$route.path===this.titlelist[i].routers) {
//             document.title=this.titlelist[i].title;
//         }
//         console.log('1');
//     }
// });

FastClick.attach(document.body)

Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box')