<template>
  <div class="home">
      <div style="padding: 15px;">
      <h2>球伴</h2>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    import {
        ButtonTab,
        ButtonTabItem,
        Divider
    } from 'vux'

    export default {
        components: {
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
                titles: '首页'
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