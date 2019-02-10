<template>
  <div class="page-changeCity">
    <el-row>
      <province/>
    </el-row>
    <el-row>
      <city title="热门城市" :list="hotCity"/>
    </el-row>
    <el-row>
      <city title="最近访问" :list="rencentCity"/>
    </el-row>
    <el-row>
      <category/>
    </el-row>
  </div>
</template>

<script>
import city from '@/components/changeCity/city.vue'
import province from '@/components/changeCity/province.vue'
import category from '@/components/changeCity/category.vue'
import api from '@/api/index.js'
export default {
  created () {
    api.getHotCity()
      .then(res => {
        this.hotCity = res.data.data
      })
    api.getRencentInfo()
      .then(res => {
        this.rencentCity = res.data.data
      })
  },
  data () {
    return {
      hotCity: [],
      rencentCity: []
    }
  },
  components: {
    province,
    city,
    category
  }
}
</script>

<style lang='scss'>
</style>
