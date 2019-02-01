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
        <span v-for="(city,i) in item" :key="i">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  created() {
    let data = [
        {
        id: 56,
        name: "北京",
        pinyinL: "beijing",
        acronym: "bj",
        rank: "b",
        firstChar: "b"
      },
      {
        id: 59,
        name: "成都",
        pinyinL: "chengdu",
        acronym: "cd",
        rank: "c",
        firstChar: "C"
      },
      {
        id: 58,
        name: "武汉",
        pinyinL: "wuhan",
        acronym: "wh",
        rank: "w",
        firstChar: "W"
      }
    ];
    let obj = {};
    data.forEach((item, index) => {
      if (!obj[item.firstChar.toUpperCase()]) {
        obj[item.firstChar.toUpperCase()] = [];
      }
      obj[item.firstChar.toUpperCase()].push(item);
    });
    this.cityList = obj;
  },
  data() {
    return {
      val: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    };
  },
  methods: {}
};
</script>

<style lang='scss'>
@import "@/assets/css/changecity/category.scss";
</style>
