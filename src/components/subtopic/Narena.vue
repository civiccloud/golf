<template>
  <div class="home">    
    <div style="margin: 10px 0;overflow: hidden;" v-for="item in list">
      <masker style="border-radius: 2px;">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-time">2016-03-18</span>
        </div>
      </masker>
    </div>
    <div style="margin: 10px 0;overflow: hidden;">
      <masker style="border-radius: 2px;" color="F9C90C" :opacity="0.8">
        <div class="m-img" style="background-image:url(http://dwz.cn/5Hv4Yy)"></div>
        <div slot="content" class="m-title">
          地形特点是山区或浅山丘陵地区
          <br/>
          <span class="m-time">2016-03-18</span>
        </div>
      </masker>
    </div>
  </div>
</template>

<script>
    import {
        Masker,
        ButtonTab,
        ButtonTabItem,
        Divider
    } from 'vux'

    export default {
        components: {
            Masker,
            ButtonTab,
            ButtonTabItem,
            Divider
        },
        methods: {
            consoleIndex() {
                console.log('click demo01', this.demo01)
            }
        },
        data() {
            return {
                titles: '首页',
                list: [{
                    title: '地势平坦，开阔，树木稀少',
                    img: 'http://dwz.cn/5Hv26y'
                }, {
                    title: '环境优雅 & 空气清新',
                    img: 'http://dwz.cn/5Hv3Hi'
                }, {
                    title: '广袤的草地、开阔的视野和起伏不平的地形',
                    img: 'http://dwz.cn/5Hv7mM'
                }, {
                    title: '广袤的草地、开阔的视野和起伏不平的地形',
                    img: 'http://dwz.cn/5Hv3Hi'
                }, {
                    title: '广袤的草地、开阔的视野和起伏不平的地形',
                    img: 'http://dwz.cn/5Hv7mM'
                }
                ]
            }
        }
    }
</script>
<style scoped>
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
</style>