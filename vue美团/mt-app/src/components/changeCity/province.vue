<template>
  <div class="province">
    <span class="name">按省份选择：</span>
    <my-select
      :list="provinceList"
      :value="province"
      title="省份"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change_value='changeProvinceValue'
    />
    <my-select
      :list="cityList"
      :value="city"
      title="城市"
      :showWrapperActive="cityActive"
      :disabled="disabled"
      @change_active="changeCityActive"
      @change_value='changeCityValue'
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="(item,index) in searchList"
        :key="index"
        :value="item"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import mySelect from '@/components/changeCity/select.vue'
import api from '@/api/index.js'
export default {
  created () {
    api.getProvinceInfo()
      .then((res) => {
        this.provinceList = res.data.data.map((item) => {
          item.name = item.provinceName
          return item
        })
        console.log(res)
      })
  },
  data () {
    return {
      province: '省份',
      provinceList: ['湖北', '湖南', '浙江', '广东', '福建'],
      city: '城市',
      cityList: [],
      provinceActive: false,
      cityActive: false,
      searchList: ['孝感', '武汉', '宜昌', '襄阳'],
      searchWord: '',
      loading: false,
      disabled: true
    }
  },
  components: {
    mySelect
  },
  methods: {
    changeProvinceActive (flag) {
      this.provinceActive = flag
      if (flag) {
        this.cityActive = false
      }
    },
    changeCityActive (flag) {
      this.cityActive = flag
      if (flag) {
        this.provinceActive = false
      }
    },
    remoteMethod (val) {
      // 请求

    },
    changeCityValue (item) {
      this.city = item.name
      // 改变当前城市数据
      this.$store.dispatch('setPosition', item)
      // 跳转到首页
      this.$router.push({name: 'index'})
    },
    changeProvinceValue (item) {
      this.province = item.provinceName
      this.cityList = item.cityInfoList
      this.disabled = false
    }
  }
}
</script>

<style lang='scss'>
@import "@/assets/css/changecity/iselect.scss";
</style>
