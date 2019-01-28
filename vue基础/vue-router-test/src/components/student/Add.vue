<template>
    <div>
        <label for="addStudent">添加学生: </label>
        <input type="text" id="addStudent" v-model="name">
        <button @click='asyncAdd({name:name})'>确认添加</button>
    </div>

    
</template>

<script>
import {mapMutations,mapActions} from 'vuex'
export default {
    data () {
        return {
            name:""
        }
    },
    methods:{
        ...mapMutations({
            storeAdd:'changeStudentList'
        }),
        ...mapActions({
            asyncAdd:'asyncChangeStudent'
        })
        // add () {
        //     // mapMutations
        //     // this.$store.commit('changeStudentList',{name:this.name})

        //     //actions
        //     this.$store.dispatch('asyncChangeStudent',{name:this.name})
        // }
    }   
}
</script>

<style scoped>
    button{
        margin-left:20px;
        width: 80px;
        line-height: 30px;
    }
</style>
