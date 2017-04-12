<template>
  <div style="padding: 0 15px;" >
    <router-view></router-view>
    <!-- 点击之后消失 -->
    <div v-show="shows()">
      <!-- 轮播图 -->
      <swiper loop auto :list="demo07_list" :index="demo07_index" @on-index-change="demo07_onIndexChange"></swiper>
      <!-- 新闻动态 -->
      <divider>最新动态</divider>
      <panel :footer="footer" :list="list" type="1"></panel>
      <!-- 最新商品 -->
      <divider>最新商品</divider>
      <scroller lock-y :scrollbar-x='false'>
        <div class="box1">
          <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
        </div>
      </scroller>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, Divider, Panel, Grid, GridItem, Scroller } from 'vux'
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
    GridItem,
    Scroller
  },
  props: {
    footer:'',
  },
  data () {
    return {
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
    //显示当前的列表的序号
    demo07_onIndexChange (index) {
      this.demo07_index = index;
      console.log(this.demo07_index);
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
    if(key_name !='13333333333'){
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
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
</style>