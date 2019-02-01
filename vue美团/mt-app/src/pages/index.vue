<template>
    <div class="page-index">
        <el-row>
            <el-col :span='5'>
                <my-menu />
            </el-col>
            <el-col :span='19'>
                <my-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='24'>
                <my-container />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='24'>
                moive
            </el-col>
        </el-row>
    </div>
</template>

<script>
import myMenu from '@/components/index/Menu.vue'
import myLife from '@/components/index/life.vue'
import myContainer from '@/components/index/container.vue'
export default {
  components: {
    myMenu,
    myLife,
    myContainer
  }
}
</script>

<style lang='scss'>
@import '@/assets/css/index/index.scss';
@import '@/assets/css/index/artistic.scss'
</style>
