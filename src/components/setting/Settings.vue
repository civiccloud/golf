<template>
  <div class="hello" style="text-align:center;padding:0 15px ">
    <group>
      <cell title="手机号码设置" value="1000.00元" primary="content" is-link :link={path:shr}>
        <span class="icon iconfont icon-qianbao" slot="icon" style="margin-right:5px;"></span>
      </cell>
      <cell title="收货地址管理" value="88888人" primary="content" is-link :link={path:shr1}>
        <span class="icon iconfont icon-huiyuan" slot="icon" style="margin-right:5px;"></span>
      </cell>
      <cell title="修改登录密码" value="" primary="content" is-link :link={path:shr2}>
        <span class="icon iconfont icon-dingdan" slot="icon" style="margin-right:5px;"></span>
      </cell>
      <cell title="昵称修改" value="" primary="content" is-link :link={path:shr3}>
        <span class="icon iconfont icon-help" slot="icon" style="margin-right:5px;"></span>
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell  } from 'vux'
export default {
  name: 'hello',
  data () {
    return {
      shr:'solfware/phone',
      shr1:'solfware/address',
      shr2:'solfware/passmod',
      shr3:'solfware/nickname'
    }
  },
  components: { Group, Cell },
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
