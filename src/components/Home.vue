<template>
  <div style="padding: 0 15px;" >
    <router-view></router-view>
    <!-- 上下滚动广告 -->
    <div v-show="shows()">
    <!-- 轮播图 -->
    <swiper loop auto :list="demo07_list" :index="demo07_index" @on-index-change="demo07_onIndexChange"></swiper>
    <!-- 顶部栏目 -->
    <!-- <tab :line-width=2 active-color='#fc378c'>
      <tab-item class="vux-center" :selected="demo === item" v-for="(item, index) in list2" :key="index" @on-item-click="changs(index)"><router-link :key="index" :to="{ path: item.routers }">{{item.title}}</router-link></tab-item>
    </tab> -->
    <divider>最新动态</divider>
    <panel :footer="footer" :list="list" type="1"></panel>
    <!-- 滚动广告 -->
      <!-- <swiper auto height="50px" direction="vertical" :interval=3000 class="text-scroll" :show-dots="false" style="color:#FC378C">
        <swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务</p></swiper-item>
        <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包</p></swiper-item>
        <swiper-item><p>零哥章魚 完成传奇世界H5-王者归来任务</p></swiper-item>
        <swiper-item><p>做迎而為 兑换【饿了么】畅享美食红包</p></swiper-item>
        <swiper-item><p>只知道不知道 兑换【饿了么】畅享美食红包</p></swiper-item>
        <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包</p></swiper-item>
      </swiper> -->
      <divider>最新商品</divider>
      <grid>
      <!-- 商品展示 -->
        <grid-item label="Grid" v-for="i in 3" :key="i">
          <img slot="icon" src="/static/assets/demo/grid_icon.png">
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, Divider, Panel, Grid, GridItem } from 'vux'
const list = () => [
                    {"title":"新闻","routers":"/components/subtopic/news"},
                    {"title":"球馆","routers":"/components/subtopic/narena"},
                    // {"title":"球伴","routers":"/components/subtopic/partner"},
                    // {"title":"商城","routers":"/components/subtopic/shop"}
                    ]
//轮播图的显示数组
const baseList = [
  {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵花'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/3.jpg',
    title: '送你一次旅行'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/3.jpg',
    title: '送你一次旅行'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/3.jpg',
    title: '送你一次旅行'
  }
]
//控制列表的显示个数
const only2List = baseList.slice(0, 5)
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Divider,
    Panel,
    Grid, 
    GridItem
  },
  props: {
    footer:'',
  },
  data () {
    return {
      list2: list(),
      index: 0,
      demo:'新闻',
      demo07_list: only2List,
      demo07_index: 0,
      list: [{
            src: 'http://placeholder.qiniudn.com/100x100/3cc51f/ffffff',
            title: '3杆洞挑战赛57年来首次取消',
            desc: '北京时间4月6日消息。由于雷电影响，美国大师赛赛前的传统热身项目',
            url: '/component/cell'
          }, {
            src: 'http://placeholder.qiniudn.com/100x100/3cc51f/ffffff',
            title: '震惊！达斯汀大师赛前日意外摔伤 ',
            desc: '北京时间4月6日消息。2017年美国大师赛开赛前日传来重磅新闻',
            url: {
              path: '/component/radio',
              replace: false
            }
          }, {
            src: 'http://placeholder.qiniudn.com/100x100/3cc51f/ffffff',
            title: '震惊！达斯汀大师赛前日意外摔伤 ',
            desc: '北京时间4月6日消息。2017年美国大师赛开赛前日传来重磅新闻',
            url: {
              path: '/component/radio',
              replace: false
            }
          }
      ]
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
    //显示当前的列表的序号
    demo07_onIndexChange (index) {
      this.demo07_index = index;
      console.log(this.demo07_index);
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
      //console.log(this.list2[index].routers);
    },
    shows () {
      if (this.$route.path==="/") {
          return true;
      }
    },
      getBarWidth: function (index) {
        return (index + 1) * 22 + 'px'
    }
  },
  //页面加载时的事件
  mounted () {
    var key_name = sessionStorage.getItem('key_name');
    sessionStorage.setItem('key_pass','admin');
    if(key_name !='admin'){
      this.$router.push({ path: '/components/login' });
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