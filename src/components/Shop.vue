<template>
  <div class="home" style="text-align:center">
        <h2>商城</h2>
        <grid>
        <grid-item label="Grid" v-for="i in 9">
            <img slot="icon" src="/static/assets/demo/grid_icon.png">
        </grid-item>
        </grid>
    <router-view></router-view>
  </div>
</template>

<script>
    import { Grid, GridItem } from 'vux'

    export default {
        components: { Grid, GridItem },
        methods: {
            consoleIndex() {
                
            }
        },
        data() {
            return {
                title: '首页'
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