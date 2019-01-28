import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state: { 
      studentList:[]
  },
  getters:{
     studentList(state,getters){
        return state.studentList.map((item,index) => {
          if(index < 1){
            return '  *' + item
          }
          else if( index <= 2 ){
            return ' **' + item
          }
          else{
            return '***' + item
          }
        })
      }
  },
  mutations: {
    changeStudentList(state,obj){
      state.studentList.push(obj.name)
    }
  },
  actions: {
    asyncChangeStudent(ctx,obj){
      setTimeout( () => {
        ctx.commit('changeStudentList',obj)
      },1000)
    }
  }
})
