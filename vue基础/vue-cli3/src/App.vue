<template>
  <div id="app">
    <div id="nav">
      <!-- router-link和a标签作用差不多，但是点击跳转到当前路径下的a标签时，会刷新，router-link不会 -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->

      <!-- to属性可以数据绑定 -->
      <router-link :to="homeLink">Home</router-link>
      <!-- 使用路由名 -->
      <router-link :to="{name:'about'}">About</router-link>
    </div>
    <!-- 显示路由下面的组件 -->
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return {
      homeLink:"/"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
