<template>
    <div>
        <button @click='login'>{{loginFlag ? '退出' : '登录'}}</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            loginFlag:false
        }
    },
    created(){
        console.log(this.$route.matched[0].meta.login)
        this.loginFlag = this.$route.matched[0].meta.login
    },
    methods:{
        login(){
            this.loginFlag = !this.loginFlag
            this.$route.matched[0].meta.login = this.loginFlag
        }
    }
}
</script>

<style>

</style>
