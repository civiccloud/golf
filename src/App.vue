<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<template>
  <div id="app">
   <!--  <x-header :left-options="{showBack: true}" :title="title"></x-header> -->
    <router-view style="margin-bottom:80px"></router-view>
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
        {"title":"首页","url":"/static/assets/demo/icon_nav_button.png","routers":"/"},
        {"title":"球馆加盟","url":"/static/assets/demo/icon_nav_msg.png","routers":"/components/join"},
        {"title":"乐众商城","url":"/static/assets/demo/icon_nav_cell.png","routers":"/components/shop"},
        {"title":"个人设置","url":"/static/assets/demo/icon_nav_article.png","routers":"/components/setting"}]  
    const titlelist=()=>[
        {"title":"首页","routers":"/"},
        {"title":"欢迎登录","routers":"/components/login"},
        {"title":"欢迎注册","routers":"/components/register"},
        {"title":"球馆加盟","routers":"/components/join"},
        {"title":"乐众商城","routers":"/components/shop"},
        {"title":"个人设置","routers":"/components/setting"},
        {"title":"新闻中心","routers":"/components/subtopic/news"},
        {"title":"球馆展示","routers":"/components/subtopic/narena"},
        {"title":"我的钱包","routers":"/components/setting/wallet"},
        {"title":"我的球友","routers":"/components/setting/partner"},
        {"title":"我的订单","routers":"/components/setting/order"},
        {"title":"新手帮助","routers":"/components/setting/help"},
        {"title":"推广中心","routers":"/components/setting/share"}]               
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
                list2: list(),
                title:'',
                titles:titlelist(),
                routes:''
            }
        },
        //普通事件
        methods: {
            fetchDate(){
                var _this=this;
                //console.log(this.$route.path);
                for (var i = 0; i<this.titles.length; i++) {
                if (_this.$route.path===this.titles[i].routers) {
                    document.title=this.titles[i].title;
                }
            }
            }
        },
        //页面加载事件
        mounted(){

        },
        //顶部导航文字的修改
        computed: {
            
        },
        //监听事件
        watch:{
            "$route": "fetchDate"
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