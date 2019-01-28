<template>
  <div class="layout-default">
    <el-container>
      <el-header height='100%'>
        <my-header></my-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height='100%'>
        <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import myHeader from '@/components/header/index.vue'
import myFooter from '@/components/footer/index.vue'
export default {
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style lang='scss' scoped>
  @import '@/assets/css/public/layout.scss'

</style>
