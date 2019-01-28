<template>
    <div>
        问题：{{question}}
    </div>
</template>

<script>
export default {
    created(){
        const questionId = parseInt(this.$route.params.id)
        console.log(questionId)
        const index = this.questionList.findIndex(item => item.questionId == questionId )
        if(index == -1){
            // this.question = '暂时没有题目~~'
            //跳转
            // a -> b -> c
            // 若c页面没有则
            // -1: 往回跳一级
            // -2: 往回跳两级
            // this.$router.go(-2)

            //a,b,c,d全都代表页面

            // replace  [a,b,c,d]  => 用replace [a,b,c,e]  可以从e页面回到c页面
            // this.$router.replace({name:'err'})

            //push [a,b,c,d]  => push [a,b,c,d,e]  可以从e页面回到d页面,然后又回到e页面，造成了不能回退的假象
            this.$router.push({name:'err'})
        }
        else{
            this.question = this.questionList[index].title
        }
        
        console.log(index)
    },
    data () {
        return {
            question:"",
            questionList:[
                {
                    questionId: 201801,
                    title:'到底什么是es6中的class (类) ?怎么实现class (类) ?'
                },
                {
                    questionId: 201802,
                    title:'什么是es6箭头函数?与普通函数主要区别在哪里?到底该不该使用箭头函数?'
                },
                {
                    questionId: 201803,
                    title:'什么是es6的解构赋值，每次都创建一个对象吗? 会加重GC的负担吗?为什么?'
        
                }
            ]
        }
    } 
}
</script>

<style scoped>

</style>
