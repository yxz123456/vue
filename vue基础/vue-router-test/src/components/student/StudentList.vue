<template>
    <div>
        学生列表:
        <ul>
            <li v-for='(item,index) in student' :key='index'>{{item}}</li>
        </ul>
    </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
export default {
    computed:{
        ...mapState({
            storeStudentList:state => state.studentList
        }),
        ...mapGetters({
            student:'studentList'
        })
    }
    // props:{
    //     studentList:Array
    // }
}
</script>

<style scoped>
    li{
        line-height: 30px;
    }
</style>
