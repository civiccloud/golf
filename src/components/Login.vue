<template>
  <div>
    <h2 class="content">欢迎登录</h2>
    <form @submit.prevent="submit">
      <group>
        <x-input title="手机号:" name="mobile" placeholder="请输入手机号码" v-model="mobile" keyboard="number" is-type="china-mobile" :max="11"></x-input>
        <x-input title="密&nbsp;码:" name="password" placeholder="请输入密码" type="password" v-model="password"></x-input>
      </group>
      <div style="padding:15px;">
        <input type="submit" value="登录" class="weui-btn weui-btn_primary">
      </div>
    </form>
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="验证码发送成功" :position="position">Basic Usage</toast>
  </div>
</template>

<script>
import { GroupTitle, Toast, XButton, XInput, Group } from 'vux'

export default {
  components: {
    Toast,
    GroupTitle,
    XButton,
    XInput, 
    Group,
    Toast
  },
  ready () {

  },
  methods: {
    submit(){
      //检验用户是否存在
      if (this.password ===sessionStorage.getItem('key_pass')) {
        sessionStorage.setItem('key_name',this.mobile);
        this.$router.push({ path: '/' });
        this.showPositionValue = true
      }else{
        alert('密码不正确');
      }
    }
  },
  data () {
    return {
        showPositionValue:false,
    }
  }
}
</script>

<style scoped>


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
h2{
  text-align:center;
}
</style>