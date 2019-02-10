<template>
  <div class='m-product-categroy'>
    <dl class='classic'>
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for='(item,index) in dataList' :key='index' >
        <my-select :name='item.title' :list='item.subList'/>
      </dd>
    </dl>
    <dl class='classic'>
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for='(item,index) in dataList' :key='index' >
        <my-select :name='item.title' :list='item.subList'/>
      </dd>
    </dl>
  </div>
</template>

<script>
import mySelect from '@/components/products/select.vue'
import api from '@/api/index.js'
export default {
  created () {
    api.getClassifyInfo()
      .then(res => {
        this.dataList = res.data.data
        console.log('classfiy', res)
      })
  },
  components: {
    mySelect
  },
  data () {
    return {
      dataList: []
    }
  }
}
</script>

<style scoped>
</style>
