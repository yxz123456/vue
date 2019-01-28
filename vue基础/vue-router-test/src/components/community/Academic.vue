<template>
    <ul>
        <router-link tag="li" :to="{name:'question',params:{id:item.questionld}}" v-for="(item,index) in questionList" :key="item.questionld">
            {{index+1}}.{{" "+item.title}}</router-link>
    </ul>
</template>

<script>
export default {
    //组件内守卫，所有用到该组件的地方都要通过这里的审查
    //进入组件之前
    beforeRouteEnter(to,from,next){
        const loginFlag = to.matched[0].meta.login
        if(!loginFlag){
            const answer = confirm('你还没有登录，登录才能看信息，确定要登录吗?')
            if(answer){
                next({name:'personal'})
            }
            else{
                next(false)
            }   
        }
        else{
            next()
            return
        }  
    },
    beforeRouteLeave(to,from,next){
        const answer = confirm('确定要离开吗?')
        if(answer){
            next()
        }else{
            next(false)
        }
    },
    data () {
        return {
            questionList:[
                {
                    questionld: 201801,
                    title:'到底什么是es6中的class (类) ?怎么实现class (类) ?'
                },
                {
                    questionld: 201802,
                    title:'什么是es6箭头函数?与普通函数主要区别在哪里?到底该不该使用箭头函数?'
                },
                {
                    questionld: 201803,
                    title:'什么是es6的解构赋值，每次都创建一个对象吗? 会加重GC的负担吗?为什么?'
        
                }
            ]
        }
    }
}
</script>

<style scoped>
    ul{
        margin-top:30px;
    }
    li{
        text-indent:1em;
        line-height: 30px;
    }
    .active{
        border: none
    }
</style>
