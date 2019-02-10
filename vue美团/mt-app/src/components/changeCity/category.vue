<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item,index) in val" :key="index">
        <a :href="'#city-' + item">{{item}}</a>
      </dd>
    </dl>
    <dl class="m-categroy-section" v-for="(item,index) in cityList" :key="index">
      <dt :id="'city-'+index">{{index}}</dt>
      <dd>
        <span v-for="(city,i) in item" :key="i" @click='changecity(city)'>{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  created () {
    api.getCityList().then(res => {
      console.log(res)
      let data = res.data.data
      let obj = {}
      data.forEach((item, index) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = []
        }
        obj[item.firstChar.toUpperCase()].push(item)
      })
      this.cityList = obj
    })
  },
  data () {
    return {
      val: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      cityList: null
    }
  },
  methods: {
    changecity (city) {
      // 改变当前城市数据
      this.$store.dispatch('setPosition', city)
      // 跳转到首页
      this.$router.push({name: 'index'})
    }
  }
}
</script>

<style lang='scss'>
@import "@/assets/css/changecity/category.scss";
</style>
