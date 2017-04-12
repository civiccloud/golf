<template>
    <div class="home"> 
        <div style="margin:10px 10px 0">
            <!-- 定位信息 -->
            <span >上海市松江区</span><i class="icon iconfont icon-locationfill"></i>
            <!-- 地址选择 -->
            <select v-on:change='change'  v-model="selected" class="addre">
              <option v-for='one in year7' :value='one.value'>{{one.name}}</option>
            </select>
        </div>
        <!-- 球馆内容上下拉刷新 -->
        <scroller lock-x scrollbar-y use-pullup height="200px" @on-pullup-loading="loadMore" v-model="status" ref="scroller" :height="viewport" :scrollbar-y="false" :pullup-config="{content:'上拉刷新',downContent:'释放刷新',upContent:'上拉刷新',loadingContent:'加载中'}">
            <div class="box2">
                <div style="margin: 10px 0;overflow: hidden;" v-for="item in list">
                    <masker style="border-radius: 2px;">
                        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
                        <div slot="content" class="m-title">{{item.title}}
                            <br/>
                            <span class="m-time">2016-03-18</span>
                        </div>
                    </masker>
                </div>
            </div>
        </scroller>
    </div>
</template>

<script>
let years = []
  
import {Masker,ButtonTab,ButtonTabItem,Selector,Scroller,Group,XAddress,ChinaAddressData,GridItem,Spinner,Picker} from 'vux'
const baseList = [{
                    title: '地势平坦，开阔，树木稀少',img: 'http://dwz.cn/5Hv26y'}, {
                    title: '环境优雅 & 空气清新',img: 'http://dwz.cn/5Hv3Hi'}, {
                    title: '开阔的视野和起伏不平的地形1',img: 'http://dwz.cn/5Hv7mM'}, {
                    title: '开阔的视野和起伏不平的地形2',img: 'http://dwz.cn/5Hv3Hi'}, {
                    title: '开阔的视野和起伏不平的地形3',img: 'http://dwz.cn/5Hv7mM'}, {
                    title: '开阔的视野和起伏不平的地形4',img: 'http://dwz.cn/5Hv7mM'}, {
                    title: '开阔的视野和起伏不平的地形5',img: 'http://dwz.cn/5Hv3Hi'}, {
                    title: '开阔的视野和起伏不平的地形6',img: 'http://dwz.cn/5Hv7mM'}, {
                    title: '开阔的视野和起伏不平的地形7',img: 'http://dwz.cn/5Hv7mM'}, {
                    title: '开阔的视野和起伏不平的地形8',img: 'http://dwz.cn/5Hv3Hi'}, {
                    title: '开阔的视野和起伏不平的地形9',img: 'http://dwz.cn/5Hv7mM'}, {
                    title: '开阔的视野和起伏不平的地形10',img: 'http://dwz.cn/5Hv7mM'}, {
                    title: '开阔的视野和起伏不平的地形11',img: 'http://dwz.cn/5Hv3Hi'}, {
                    title: '开阔的视野和起伏不平的地形12',img: 'http://dwz.cn/5Hv7mM'}]

const only2List = baseList.slice(0, 5)
    export default {
        components: {Masker,ButtonTab,ButtonTabItem,Selector,Scroller,Group,XAddress,GridItem,ChinaAddressData,Spinner,Picker},
        data() {
            return {
                titles: '首页',
                list:only2List,
                pullupEnabled: true,
                status: {
                    pullupStatus: 'default',
                    pulldownStatus: 'default'
                },
                list2: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
                addressData: ChinaAddressData,
                title: '区域选择',
                years: [years],
                selected:'bj',
                year7: [
                {name: '北京市',value: 'bj'}, {name: '上海市',value: 'sh'}, {name: '广东省',value: 'gd'}, 
                {name: '广西省',value: 'gx'}, {name: '江西省',value: 'jx'}, {name: '浙江省',value: 'zz'},
                {name: '福建省',value: 'fj'}, {name: '陕西省',value: 'sx'}, {name: '江苏省',value: 'js'}, 
                {name: '云南省',value: 'yn'}, {name: '湖北省',value: 'hb'}, {name: '湖南省',value: 'hn'}],
            }
        },
        methods: {
            loadMore () {
                setTimeout(() => {
                    this.n += 2
                setTimeout(() => {
                    this.$refs.scroller.donePullup();
                    //控制列表的显示个数
                    var s=this.list.length;
                    var n=baseList.slice(0, s+2);
                    this.list=n;
                    }, 10)
                }, 2000)
            },
            logHide (str) {
                console.log('on-hide', str)
            },
            logShow (str) {
                console.log('on-show')
            },
            change(){
                console.log(this.selected);
            }
        },
        props: {
            height:{
                type: String,
            }
        }
    }
</script>
<style lass="less" scoped>
    h1,
    h2 {
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
        text-decoration: none;
    }
    .m-img {
      padding-bottom: 33%;
      display: block;
      position: relative;
      max-width: 100%;
      background-size: cover;
      background-position: center center;
      cursor: pointer;
      border-radius: 2px;
    }

    .m-title {
      color: #fff;
      text-align: center;
      text-shadow: 0 0 2px rgba(0, 0, 0, .5);
      font-weight: 500;
      font-size: 16px;
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      text-align: center;
      top: 50%;
      transform: translateY(-50%);
    }

    .m-time {
      font-size: 12px;
      padding-top: 4px;
      border-top: 1px solid #f0f0f0;
      display: inline-block;
      margin-top: 5px;
    }
.rotate {
  display: inline-block;
  transform: rotate(-180deg);
}
.pullup-arrow {
  transition: all linear 0.2s;
  color: #666;
  font-size: 25px;
}
.addre{
    position:absolute;
    right:10px;
}
</style>