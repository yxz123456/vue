<template>
    <div class="content">
        <router-link :to="{name:'academic'}">学术研究</router-link>
        <router-link :to="{name:'download'}">资源下载</router-link>
        <router-link :to="{name:'personal'}">个人中心</router-link>
        <router-view/>
    </div>
</template>

<script>

export default {
  
}
</script>

<style scoped>
    .content > a{
        padding:5px 10px;
        cursor: pointer;
        margin-right: 20px;
    }
    .content > .active{
        background: rgb(15, 48, 70);
        color:aliceblue;
        border-radius: 5px;
    }
  
</style>
