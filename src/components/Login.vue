<template>
  <div>
  <h4 style="text-align:center">欢迎登录</h4>
  <!-- 轮播图 -->
  <swiper loop auto :list="demo07_list" :index="demo07_index" @on-index-change="demo07_onIndexChange"></swiper>
    <span>注意资料是否准确，注册成功，无法更改。</span>
  <form @submit.prevent="submit">
    <group>
      <x-input title="姓&nbsp;名:" name="username" placeholder="请输入姓名" is-type="china-name" v-model="username"></x-input>
      <x-input title="手机号:" name="mobile" placeholder="请输入手机号码" v-model="mobile" keyboard="number" is-type="china-mobile" :max="11"></x-input>
      <x-input title="验证码:" class="weui-vcode" name="vercode" placeholder="请输入验证码" v-model="vercode">
        <x-button slot="right" type="primary" mini @click.native="showPosition()">发送验证码</x-button>
      </x-input>
      <x-input title="密&nbsp;码:" name="password" placeholder="请输入密码" type="password" v-model="password"></x-input>
      <x-input title="地&nbsp;址:" name="address" placeholder="请输入收货地址"  v-model="address"></x-input>
    </group>
    <div style="padding:15px;">
      <input type="submit" value="提交" class="weui-btn weui-btn_primary">
    </div>
    </form>
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="验证码发送成功" :position="position">Basic Usage</toast>
  </div>
</template>

<script>
import { Swiper, Group, XButton, XInput, Toast } from 'vux'

const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}]

const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]

const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  title: `(可点击)${item.title}`
}))

const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))

const only2List = baseList.slice(0, 3)

export default {
  components: {
    Swiper,
    Group,
    XButton,
    XInput,
    Toast
  },
  methods: {
    //表单提交的操作
    submit (){
      //检验用户是否存在
      if (this.password ===sessionStorage.getItem('key_pass')) {
        sessionStorage.setItem('key_name',this.username);
        this.$router.push({ path: '/' });
        this.showPositionValue = true
      }else{
        alert('密码不正确');
      }
    },
    //显示当前的列表的序号
    demo07_onIndexChange (index) {
      this.demo07_index = index;
      console.log(this.demo07_index);
    },
    showPosition (position) {
      this.showPositionValue = true
    }
  },
  data () {
    return {
      username:'',
      password:'',
      vercode :'',
      address :'',
      mobile  :'',
      position:'',
      key_name:'',
      showPositionValue: false,
      demo07_list: only2List,
      demo07_index: 0
    }
  },
  //页面加载后草里的事件
  mounted () {
    //每秒定时器刷新二维码事件
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
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
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
.submit{

}
</style>