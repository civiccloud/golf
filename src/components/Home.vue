<template>
  <div style="padding: 0 15px;" >
    <!-- 顶部栏目 -->
    <tab :line-width=2 active-color='#fc378c'>
      <tab-item class="vux-center" :selected="demo === item" v-for="(item, index) in list2" :key="index" @on-item-click="changs(index)"><router-link :key="index" :to="{ path: item.routers }">{{item.title}}</router-link></tab-item>
    </tab>
    <router-view></router-view>
    <!-- 上下滚动广告 -->
    <div v-show="shows()" style="text-align:center">
      <swiper auto height="50px" direction="vertical" :interval=3000 class="text-scroll" :show-dots="false" style="color:#FC378C">
        <swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务</p></swiper-item>
        <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包</p></swiper-item>
        <swiper-item><p>零哥章魚 完成传奇世界H5-王者归来任务</p></swiper-item>
        <swiper-item><p>做迎而為 兑换【饿了么】畅享美食红包</p></swiper-item>
        <swiper-item><p>只知道不知道 兑换【饿了么】畅享美食红包</p></swiper-item>
        <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包</p></swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
const list = () => [
                    {"title":"新闻","routers":"/components/subtopic/news"},
                    {"title":"球馆","routers":"/components/subtopic/narena"},
                    {"title":"球伴","routers":"/components/subtopic/partner"},
                    {"title":"商城","routers":"/components/subtopic/shop"}
                    ]
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      list2: list(),
      index: 0,
      demo:'新闻'
    }
  },
  methods: {
    addTab () {
      if (this.list2.length < 5) {
        this.list2 = list().slice(0, this.list2.length + 1)
      }
    },
    removeTab () {
      if (this.list2.length > 1) {
        this.list2 = list().slice(0, this.list2.length - 1)
      }
    },
    next () {
      if (this.index === this.list2.length - 1) {
        this.index = 0
      } else {
        ++this.index
      }
    },
    prev () {
      if (this.index === 0) {
        this.index = this.list2.length - 1
      } else {
        --this.index
      }
    },
    //点击事件的触发打印出当前的路由路劲
    changs(index){
      console.log(this.list2[index].routers);
    },
    shows () {
      if (this.$route.path==="/") {
          return true;
      }
    },
      getBarWidth: function (index) {
        return (index + 1) * 22 + 'px'
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
.vux-tab-item a {
  display:block;
  width:100%;
  height:100%;
  text-decoration:none;
  font-size:1.5em;
  color: #000000;
}
</style>