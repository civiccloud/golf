<template>
  <div class="hello">
    <blur :blur-amount="1000" :url="userimg" v-bind:height="100">
      <p class="center"><img :src="userimg"></p>
    </blur>
  <card>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span class="icon iconfont icon-daifukuan"></span>
          <br/>
          待付款
        </div>
        <div class="vux-1px-r">
          <span class="icon iconfont icon-daifahuo"></span>
          <br/>
          待发货
        </div>
        <div class="vux-1px-r">
          <span class="icon iconfont icon-icon_daishouhuo"></span>
          <br/>
          待收货
        </div>
        <div class="vux-1px-r">
          <span class="icon iconfont icon-yiwancheng"></span>
          <br/>
          已完成
        </div>
        <div>
          <span class="icon iconfont icon-cshy-rmb2"></span>
          <br/>
          退款/售后
        </div>
      </div>
    </card>
    <group>
      <cell title="我的钱包" value="1000.00元" primary="content" is-link icon>
        <span class="icon iconfont icon-qianbao" slot="icon" style="margin-right:5px;"></span>
      </cell>
      <cell title="我的球友" value="88888人" primary="content" is-link icon>
        <span class="icon iconfont icon-huiyuan" slot="icon" style="margin-right:5px;"></span>
      </cell>
      <cell title="我的订单" value="" primary="content" is-link >
        <span class="icon iconfont icon-dingdan" slot="icon" style="margin-right:5px;"></span>
      </cell>
    </group>
  </div>
</template>

<script>
import { Blur, Card, Group, Cell } from 'vux'
const list =() => [
    {"username":"张三","type":"一级会员","url":"../../static/assets/demo/icon_nav_article.png"}
  ]
export default {
  name: 'hello',
  data () {
    return {
      msg: '个人设置',
      list2:list(),
      userimg: ''
    }
  },
  components:{
    Blur, 
    Card,
    Group, 
    Cell
  },
  methods:{
    //发起请求
    submitForm () {
      
    }
  },
  //页面加载完成后的事件
  mounted(){
    var _this=this;
    this.$ajax({
      type: 'get',
      url: 'http://www.wolongang.cn/weixin.php',
    })
    .then(function(res){
      //调试对象地址
      //console.log(res.data.url)
      for (var key in res.data) {
        console.log(res.data[key]);
      }
      _this.userimg=res.data.url;
    })
    .catch(function(err){
      console.log(err)
    })
  }
}
</script>
<style scoped lang="less">
@import '~vux/src/styles/1px.less';
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
.center {
  padding-left: 15px;
  margin: 15px 0;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 70px;
  height:70px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.card-demo-flex span {
  color: #f74c31;
}
.weui_cell {
    padding: 0 15px;
}
.iconfont{
  font-size:30px;
}
.weui-cell {
    padding: 0 15px;
}
</style>
