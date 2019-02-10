<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            {{$store.state.position.name}}
            <router-link class='changeCity' :to="{name:'changeCity'}">切换城市</router-link>
            [
            <a href="#">孝感</a>
            <a href="#">仙桃</a>
            <a href="#">黄石</a>
            ]
        </div>
        <div class="m-user">
            <router-link class='login' :to="{name:'login'}">立即登录</router-link>
            <router-link class='register' :to="{name:'register'}">注册</router-link>
        </div>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  created () {
    api.getCurPosition()
      .then(res => {
        console.log('weizhi-------', res)
      })
  }
}
</script>

<style scoped>
    .position > a{
        color: rgba(6, 2, 8, 0.801);
    }
    .position > a:hover{
        color:#31BBAC;
    }
</style>
