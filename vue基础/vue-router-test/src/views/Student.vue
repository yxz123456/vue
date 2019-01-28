<template>
    <div>
        <add-student @add='add'></add-student>
        <student-list :studentList='studentList'></student-list>
    </div>
</template>

<script>
import addStudent from '../components/student/Add.vue'
import studentList from '../components/student/StudentList.vue'
export default {
    data(){
        return {
            studentList:[]
        }
    },
    components:{
        addStudent,
        studentList
    },
    methods:{
        add (name) {
            this.studentList.push(name)
        }
    }
}
</script>

<style>

</style>
