<template>
    <div class="m-menu">
        <dl class='nav'  @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <dd v-for='(item,index) in menuList' :key='index' @mouseenter="menuEnter(item)">
                <i :class='item.icon'></i>
                {{item.title}}
                <span class="arrow"></span>
            </dd>
        </dl>
        <div class="detail" @mouseleave="detailLeave" v-show='detailList' @mousemove="detailEnter">
            <template v-for='(item,index) in detailList'>
                <h4 :key="index+'-'+item">{{item.title}}</h4>
                <span v-for='(v,i) in item.children' :key="i">{{v}}</span>
            </template>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      timer: null,
      detailList: null,
      menuList: [{
        title: '美食',
        icon: 'food',
        children: [{
          title: '美食',
          children: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉']
        }]
      },
      {
        title: '外卖',
        icon: 'takeout',
        children: [{
          title: '外卖',
          children: ['美团外卖']
        }]
      },
      {
        title: '酒店',
        icon: 'hotel',
        children: [{
          title: '酒店星级',
          children: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
        }]
      }]
    }
  },
  methods: {
    menuEnter (item) {
      this.detailList = item.children
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
