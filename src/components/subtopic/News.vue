<template>
  <div class="home">
      <div>
      <panel header="新闻推荐" :footer="footer" :list="list" :type="type"></panel>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    import {
        Panel,
        ButtonTab,
        ButtonTabItem,
        Divider
    } from 'vux'

    export default {
        components: {
            Panel,
            ButtonTab,
            ButtonTabItem,
            Divider
        },
        methods: {
            consoleIndex() {
                console.log('click demo01', this.demo01)
            },
            stcs(event) {
                console.log("测试");
            }
        },
        data() {
            return {
                list: [{
                        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                        title: '大师赛开赛前遇雷暴 3杆洞挑战赛57年来首次取消',
                        desc: '北京时间4月6日消息。由于雷电影响，美国大师赛赛前的传统热身项目',
                        url: '/component/cell'
                    }, {
                        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                        title: '震惊！达斯汀大师赛前日意外摔伤 可能宣布退赛',
                        desc: '北京时间4月6日消息。2017年美国大师赛开赛前日传来重磅新闻',
                        url: {
                            path: '/component/radio',
                            replace: false
                        }
                    }, {
                        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                        title: '大师赛开赛前遇雷暴 3杆洞挑战赛57年来首次取消',
                        desc: '北京时间4月6日消息。由于雷电影响，美国大师赛赛前的传统热身项目',
                        url: '/component/cell'
                    }, {
                        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                        title: '震惊！达斯汀大师赛前日意外摔伤 可能宣布退赛',
                        desc: '北京时间4月6日消息。2017年美国大师赛开赛前日传来重磅新闻',
                        url: {
                            path: '/component/radio',
                            replace: false
                        }
                    }
                ],
                footer: {
                    title: '查看更多',
                    url: 'http://vux.li'
                }
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
</style>