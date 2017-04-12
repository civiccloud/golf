<template>
  <div class="hello" style="text-align:center;padding:0 15px ">
 <h2 style="text-align:center">密码修改</h2>
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
      <input type="submit" value="注册" class="weui-btn weui-btn_primary">
    </div>
    </form>
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="验证码发送成功" :position="position">Basic Usage</toast>
  </div>
</template>

<script>
import { Group, XInput, Toast, XButton  } from 'vux'
export default {
  name: 'hello',
  data () {
    return {
      msg: '分享推广',
      value: 'https://vux.li',
      fgColor: '#000000'
    }
  },
  components: { Group, XInput, Toast, XButton },
  mounted () {
    //每秒定时器刷新二维码事件
    setInterval(() => {
      this.value = `https://vux.li?t=${Math.random()}`
      this.fgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }, 1000)
  }
}
</script>
<style scoped>
h1, h2 {
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
}

.iconfont{
  font-size:25px;
}
.weui-cell {
    padding: 0 15px;
}
</style>
