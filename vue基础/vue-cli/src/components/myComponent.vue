<template>
    <div class="wrapper">
        <div>我是{{name}}</div>
    </div>
</template>

<script>
    export default {
        name: "myComponent",
        data(){
          return {
            name:"myComponent"
          }
        }
    }
</script>

<style scoped>
    .wrapper{
      width: 100px;
      height: 100px;
      background-color: #007DDC;
    }
</style>
