import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // state就是Vuex中的公共的状态, 我是将state看作是所有组件的data,
    //  用于保存所有组件的公共数据.
    state:{
        value : "yxz",
        counter:0
    },
    // 我将getters属性理解为所有组件的computed属性, 也就是计算属性. 
    // vuex的官方文档也是说到可以将getter理解为store的计算属性,
    // getters的返回值会根据它的依赖被缓存起来，且只有当它的依赖值
    // 发生了改变才会被重新计算。
    getters:{
        doubleC(state){
            return state.counter*2
        },
        addC(state,getters){
            return state.counter + getters.doubleC
        }
    },

    //我将mutaions理解为store中的methods, mutations对象中保存着更改数据的回调函数,
    //该函数名官方规定叫type, 第一个参数是state, 第二参数是payload, 也就是自定义的参数.
    mutations:{
        changeVal(state,val){
            state.value = val
        },
        add(state,num){
            state.counter += num
        },
        sub(state,num){
            state.counter -= num
        }
    },
    /*Action 类似于 mutation，不同在于：
    Action 提交的是 mutation，而不是直接变更状态。
    Action 可以包含任意异步操作。*/

    actions:{
        asyncAdd(context,num){
            setTimeout(()=>{
                context.commit("add",num)
            },1000)
        }
    }
})