<template>
  <div class="choose-wrap">
    <div class="choose" @click.stop="showWrapper" v-document-click="documentClick">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content' : true, 'active' : showWrapperActive}">
        <h4>{{title}}</h4>
        <div class="wrapper">
          <div class="col">
            <span
              :class="{'mt-item':true,'active':item == value}"
              v-for="(item,index) in list"
              :key="index"
              @click.stop="changeVal(item)"
            >{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["list", "value", "title", "showWrapperActive"],
  methods: {
    showWrapper() {
      this.$emit("change_active", true);
    },
    documentClick() {
      this.$emit("change_active", false);
    },
    changeVal(val) {
      this.$emit("change_value", val);
      this.$emit("change_active", false);
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/changecity/select.scss";
</style>
