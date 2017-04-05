<template>
  <div>
    <!-- 轮播图 -->
    <swiper loop auto :list="demo07_list" :index="demo07_index" @on-index-change="demo07_onIndexChange"></swiper>
    <!-- 商品类型 -->
    <tab :line-width=2 active-color='#fc378c'>
        <tab-item class="vux-center" :selected="demo === item" v-for="(item, index) in list2" :key="index" @on-item-click="changs(index)"><router-link :key="index" :to="{ path: item.routers }">{{item.title}}</router-link></tab-item>
      </tab>
    <router-view></router-view>
    <!-- 地址选择 -->
    <group>
       <x-address @on-hide="logHide" @on-show="logShow" :title="title" v-model="value" :list="addressData" placeholder="请选择地址"></x-address>
    </group>
    <div>会员优惠信息展示</div>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, GroupTitle, SwiperItem, XButton, Divider, Group, XAddress, ChinaAddressData } from 'vux'
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
const list = () => [
                    {"title":"会员","routers":"/components/goods/agents"},
                    {"title":"球馆","routers":"/components/goods/arena"},
                    {"title":"代理","routers":"/components/goods/members"}
                    ]
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider,
    Group,
    XAddress,
    ChinaAddressData
  },
  ready () {
  },
  methods: {
    //显示当前的列表的序号
    demo07_onIndexChange (index) {
      this.demo07_index = index
    },
    changeData () {
      this.value2 = ['430000', '430400', '430407']
    },
    getName (value) {
      return value2name(value, ChinaAddressData)
    },
    logHide (str) {
      console.log('on-hide', str)
    },
    logShow (str) {
      console.log('on-show')
    }
  },
  data () {
    return {
      demo07_list: only2List,
      demo07_index: 0,
      title: '请选择地址',
      addressData: ChinaAddressData,
      value: [],
      list2:list(),
      demo:''
    }
  }
}
</script>
<style scoped>
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
  margin:0;
}
.black {
  background-color: #000;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.vux-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
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