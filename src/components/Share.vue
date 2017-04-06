<template>
  <div class="hello" style="text-align:center;padding:0 15px 79px 15px">
    <h1>{{ msg }}</h1>
    <divider>类型=img</divider>
    <qrcode value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>
    <br>
    <divider>类型=canvas</divider>
    <qrcode value="https://vux.li?x-page=demo_qrcode"></qrcode>
    <br>
    <qrcode :value="value" :fg-color="fgColor"></qrcode>
    <br>
  </div>
</template>

<script>
import { Qrcode, Divider  } from 'vux'
export default {
  name: 'hello',
  data () {
    return {
      msg: '分享推广',
      value: 'https://vux.li',
      fgColor: '#000000'
    }
  },
  components: {
    Qrcode, 
    Divider
  },
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
.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
</style>
