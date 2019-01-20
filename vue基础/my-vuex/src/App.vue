<template>
  <div id="app">
    <p>Vue-cli 2.9.6</p>
    <div>
      <com-a></com-a>
      <com-b></com-b>
    </div>
    <input type="text" v-model="value">
    <p>{{getValue}}</p>
  </div>
</template>

<script>
import comA from "./components/comA.vue"
import comB from "./components/comB.vue"
export default {
  name: 'App',
  computed:{
    value:{
      get(){
        return this.$store.state.value
      },
      set(val){
        this.$store.commit("changeVal",val)
      }
    },
    getValue(){
      return this.$store.state.value
    }
  },
  methods:{
    changeValue(e){
            this.$store.commit("changeVal",e.target.value)
        }
  },
  components: {
      comA,
      comB
  }
}
</script>

<style>
  *{
    text-align: center;
  }
  #app{
    width: 800px;
    background: rgb(102, 80, 34);
  }
  #app>div{
    width: 800px;
    display:flex;
    background: #236;
  }

</style>
