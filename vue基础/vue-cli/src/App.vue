<template>
  <div id="app">
    <img src="./assets/logo.png">
    <my-component></my-component>
  </div>
</template>

<script>

import MyComponent from "./components/myComponent";

export default {
  name: 'App',
  components: {
    MyComponent,

  }
}
</script>

<!--入口文件css权重高于组件-->
<style>

</style>
