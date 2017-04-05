<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<template>
  <div id="app">
    <x-header :left-options="{showBack: true}" :title="title"></x-header>
    <router-view></router-view>
    <tabbar :show-dots="false">
      <tabbar-item v-for="(item, index) in list2" :key="index" v-bind:link='item.routers'>
        <img slot="icon" v-bind:src='item.url'>
        <span slot="label">{{item.title}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
    import {
        Tabbar,
        TabbarItem,
        Group,
        Cell,
        XHeader
    } from 'vux' /*下方的tab选项*/
    const list = () => [
                        {"title":"首页","url":"../../static/assets/demo/icon_nav_button.png","routers":"/"},
                        {"title":"新手帮助","url":"../../static/assets/demo/icon_nav_msg.png","routers":"/components/help"},
                        {"title":"会员升级","url":"../../static/assets/demo/icon_nav_article.png","routers":"/components/upgrade"},
                        {"title":"推广中心","url":"../../static/assets/demo/icon_nav_cell.png","routers":"/components/share"},
                        {"title":"个人设置","url":"../../static/assets/demo/icon_nav_article.png","routers":"/components/setting"}
                        ]
    export default {
        components: {
            Tabbar,
            TabbarItem,
            Group,
            Cell,
            XHeader,
        },
        data() {
            return {
                list2: list()
            }
        },
        methods: {
            consoleIndex() {
                console.log('click demo01', this.demo01)
            }
        },
        //顶部导航文字的修改
        computed: {
            title () {
                var _this=this;
                for (var i = 0; i<this.list2.length; i++) {
                    if (_this.$route.path===this.list2[i].routers) {
                        return this.list2[i].title;
                    }
                }
                return this.componentName
            }
        }
    }
</script>
<style scoped>
    @import 'https://at.alicdn.com/t/font_zhjinimixq63l3di.css';
    /*加载外部的阿里巴巴字体图标库样式*/
    h1,h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
        text-decoration: none;
    }
</style>