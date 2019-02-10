<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="(item,index) in nav"
        :key="index"
        @click="changeActive(index)"
        :class="{'s-nav-active':item.active}"
      >{{item.name}}</li>
    </ul>
    <el-row>
      <my-item v-for="item in productList" :key='item.itemId' :meta='item'/>
    </el-row>
  </div>
</template>

<script>
import myItem from '@/components/products/item.vue'
import api from '@/api/index.js'
export default {
  created () {
    api.getProductInfo()
      .then(res => {
        this.productList = res.data.data
      })
  },
  components: {
    myItem
  },
  data () {
    return {
      nav: [
        { key: 's-default', name: '智能排序', active: true },
        { key: 's-price', name: '价格最低', active: false },
        { key: 's-sale', name: '人气最高', active: false },
        { key: 's-commit', name: '评分最高', active: false }
      ],
      productList: []
    }
  },
  methods: {
    changeActive (index) {
      this.nav.forEach((val, i) => {
        if (i == index) {
          val.active = true
        } else {
          val.active = false
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
