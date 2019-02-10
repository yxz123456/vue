<template>
  <div class="choose-wrap">
    <div :class="['choose',disabled?'disabled':'']" @click.stop="showWrapper" v-document-click="documentClick">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content' : true, 'active' : showWrapperActive}" :min-width='{minWidth}' >
        <h4>{{title}}</h4>
        <div class="wrapper">
          <div class="col"  v-for="(listData,i) in renderList" :key='i'>
            <span
              :class="{'mt-item':true,'active':item == value}"
              v-for="(item,index) in listData"
              :key="index"
              @click.stop="changeVal(item)"
            >{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      col: null
    }
  },
  computed: {
    renderList: function () {
      this.col = Math.ceil(this.list.length / 12)
      let resultList = []
      for (let i = 0; i < this.col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12)
        resultList.push(data)
      }
      return resultList
    },
    minWidth: function () {
      return this.col * 85
    }
  },
  props: ['list', 'value', 'title', 'showWrapperActive', 'disabled'],
  methods: {
    showWrapper () {
      this.$emit('change_active', true)
    },
    documentClick () {
      this.$emit('change_active', false)
    },
    changeVal (val) {
      this.$emit('change_value', val)
      this.$emit('change_active', false)
    }
  }
}
</script>

<style lang='scss'>
@import "@/assets/css/changecity/select.scss";
</style>
