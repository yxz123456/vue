<template>
    <div class="page-changeCity">
        <el-row>
            <province/>
        </el-row>
        <el-row>
            <city title='热门城市' :list='hotCity'/>
        </el-row>
        <el-row>
            <city title='最近访问' :list='rencentCity'/>
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>

<script>
import city from '@/components/changeCity/city.vue'
import province from '@/components/changeCity/province.vue'
import category from '@/components/changeCity/category.vue'
export default {
  data () {
      return {
          hotCity:['北京','上海','广州','深圳','成都','武汉'],
          rencentCity:['北京','上海','广州','深圳','成都','武汉']
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
