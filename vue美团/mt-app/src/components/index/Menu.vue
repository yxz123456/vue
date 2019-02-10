<template>
    <div class="m-menu">
        <dl class='nav'  @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <dd v-for='(item,index) in menuList' :key='index' @mouseenter="menuEnter(item)">
                <i :class='item.type'></i>
                {{item.name}}
                <span class="arrow"></span>
            </dd>
        </dl>
        <div class="detail" @mouseleave="detailLeave" v-show='detailList' @mousemove="detailEnter">
            <template v-for='(item,index) in detailList'>
                <h4 :key="index+'-'+item">{{item.title}}</h4>
                <span v-for='(v,i) in item.items' :key="i">{{v}}</span>
            </template>
        </div>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  created () {
    api.getNavInfo()
      .then((res) => {
        this.menuList = res.data.data
        console.log(res)
      })
  },
  data () {
    return {
      timer: null,
      detailList: null,
      menuList: []
    }
  },
  methods: {
    menuEnter (item) {
      this.detailList = item.items
    },
    menuLeave () {
      this.timer = setTimeout(() => {
        this.detailList = null
      }, 1000)
    },
    detailLeave () {
      this.detailList = null
    },
    detailEnter () {
      clearTimeout(this.timer)
    }
  }
}
</script>
