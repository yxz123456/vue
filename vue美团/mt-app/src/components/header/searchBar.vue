<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span='3' class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png">
      </el-col>
      <el-col :span='15' class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class='hotPlace' v-show='isHotPlace'>
              <dt>热门搜索</dt>
              <dd v-for='(item,index) in hotPlaceList' :key="index">
                  <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
              </dd>
          </dl>
          <dl class='searchList' v-show='isSearchList'>
              <dd v-for='(item,index) in searchList' :key="index">
                  <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
              </dd>
          </dl>
        </div>
        <p class='suggest'>
            <a href="#" v-for='(item,index) in suggestList' :key="index">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList: ['故宫博物院', '第九届陶然亭冰雪嘉年华', '北京欢乐谷'],
      searchList: ['火锅', '火锅自助', '火锅外卖'],
      suggestList: ['故宫博物院', '第九届陶然亭冰雪嘉年华', '怀北国际滑雪场', '故宫珍宝馆', '北京欢乐谷']
    }
  },
  computed: {
    isHotPlace () {
      return this.isFocus && !this.searchWord
    },
    isSearchList () {
      return this.isFocus && this.searchWord
    }
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    }
  }

}
</script>

<style lang='scss' >
    @import "@/assets/css/public/header/search.scss"
</style>
