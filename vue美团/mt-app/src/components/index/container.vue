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
          <img :src="item.imgSrc" class="image">
          <div class="poi-info cbody" >
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.current_price}}</span>
              </span>
              <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kind: '',
      cardList: [{
        imgSrc: '//p0.meituan.net/mogu/1bd275022a228dcb91e0a81e93980c2f189699.jpg@460w_260h_1e_1c',
        title: '分米鸡 DM Chicken（爱琴海店）',
        sub_title: '分米鸡5.0DM套餐1份',
        price_info: {
          current_price: 168,
          old_price: 208
        },
        address: '太阳宫'
      },
      {
        imgSrc: '//p0.meituan.net/mogu/1bd275022a228dcb91e0a81e93980c2f189699.jpg@460w_260h_1e_1c',
        title: '分米鸡 DM Chicken（爱琴海店）',
        sub_title: '分米鸡5.0DM套餐1份',
        price_info: {
          current_price: 168,
          old_price: 208
        },
        address: '太阳宫'
      },
      {
        imgSrc: '//p0.meituan.net/mogu/1bd275022a228dcb91e0a81e93980c2f189699.jpg@460w_260h_1e_1c',
        title: '分米鸡 DM Chicken（爱琴海店）',
        sub_title: '分米鸡5.0DM套餐1份',
        price_info: {
          current_price: 168,
          old_price: 208
        },
        address: '太阳宫'
      },
      {
        imgSrc: '//p0.meituan.net/mogu/1bd275022a228dcb91e0a81e93980c2f189699.jpg@460w_260h_1e_1c',
        title: '分米鸡 DM Chicken（爱琴海店）',
        sub_title: '分米鸡5.0DM套餐1份',
        price_info: {
          current_price: 168,
          old_price: 208
        },
        address: '太阳宫'
      }]
    }
  },
  methods: {
    over (e) {
      let dom = e.target
      if (dom.tagName.toLowerCase() != 'dd') {
        return false
      }
      this.kind = dom.getAttribute('data-type')
    }
  }
}
</script>

<style scoped>
</style>
