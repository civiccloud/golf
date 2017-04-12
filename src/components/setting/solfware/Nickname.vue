<template>
  <div>
    <h2 style="text-align:center">昵称修改</h2>
    <form @submit.prevent="submit">
    <group>
      <x-input title="昵称:" name="nickname" placeholder="请输入新的昵称"></x-input>
    </group>
    <div style="padding:15px;">
      <input type="submit" value="登录" class="weui-btn weui-btn_primary">
    </div>
    </form>
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="验证码发送成功" :position="position">Basic Usage</toast>
  </div>
</template>

<script>
import { Group, XInput, Toast  } from 'vux'
export default {
  name: 'hello',
  data () {
    return {
      showPositionValue: false,
    }
  },
  components: { Group, XInput, Toast },
  mounted () {
    //每秒定时器刷新二维码事件
    setInterval(() => {
      this.value = `https://vux.li?t=${Math.random()}`
      this.fgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }, 1000)
  },
  methods:{
    submit(){
      console.log('chenggong');
    }
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
