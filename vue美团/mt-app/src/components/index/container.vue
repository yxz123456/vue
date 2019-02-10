<template>
  <div class="m-istyle">
    <dl @mouseover='over'>
      <dt>有格调</dt>
      <dd :class="{active : kind == 'all'}" data-type='all'>全部</dd>
      <dd :class="{active : kind == 'food'}" data-type='food'>约会聚餐</dd>
      <dd :class="{active : kind == 'spa'}" data-type='spa'>丽人SPA</dd>
      <dd :class="{active : kind == 'moive'}" data-type='moive'>电影演出</dd>
      <dd :class="{active : kind == 'travel'}" data-type='travel'>品质出游</dd>
    </dl>
    <ul class="ibody">
      <li v-for='(item,index) in cardList' :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow='never'>
          <img :src="item.image" class="image">
          <div class="poi-info cbody" >
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.subTitle}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <!-- <span class="old-price">门市价¥{{item.price_info.old_price}}</span> -->
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  created () {
    api.getStyleInfo()
      .then((res) => {
        this.list = res.data.data
        this.cardList = res.data.data.all
        console.log('style---------', res)
      })
  },
  data () {
    return {
      kind: 'all',
      list: [],
      cardList: []
    }
  },
  methods: {
    over (e) {
      let dom = e.target
      if (dom.tagName.toLowerCase() !== 'dd') {
        return false
      }
      this.kind = dom.getAttribute('data-type')
      this.cardList = this.list[this.kind]
    }
  }
}
</script>

<style scoped>
</style>
