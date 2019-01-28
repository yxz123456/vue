<template>
  <div id="app">
    <div class="header">
      <div class="logo">
          <img src="./assets/images/logo.png" alt="">
        </div>
        <ul class="nav">
          <router-link tag="li" to="/home" exact>首页</router-link> 
          <router-link tag="li" to="/learn">课程学习</router-link>
          <router-link tag="li" to="/student">学生</router-link> 
          <router-link tag="li" to="/about">关于</router-link>
          <router-link tag="li" to="/community">社区</router-link> 
        </ul>
    </div>
    <div class="center">
        <router-view/>
        <!-- router-view复用 -->
        <!-- <router-view name='academic'></router-view> -->
    </div>
    <div class="footer"></div>
    
  </div>
</template>


<style>
  #app{
    display: flex;
    flex-direction:column;
  }
  .header{
    width: 100vw;
    height: 100px;
    background:rgb(34, 139, 201);
    color: aliceblue;
  }
  .header{
    display: flex;
    flex-direction:row;
    line-height: 100px;
    
  }
  .logo{
    display:flex;
    justify-content: space-around;
    align-items: center;
    padding:0 150px;
  }
  .nav{
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    padding:0 0 0 250px;
  }
  .nav li{
    height: 100px;
    margin-right:50px;
    cursor: pointer;
  }
  .center{
    flex:1;
    height: auto;
    padding: 50px 100px;
  }
  .footer{
    position: fixed;
    bottom: 0;
    height: 80px;
    width: 100vw;
    background:rgb(34, 139, 201);
  }
 

 .active{
    border-bottom:2px solid rgb(15, 48, 70);
  }
</style>
