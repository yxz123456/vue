<template>
    <div class="a-wrapper">
        <div>comA</div>
        <com-c></com-c>
        <p>{{ value }}</p>
        <p>{{ counter }}</p>
        <p>{{ DC }}</p>
        <p>{{ addC }}</p>
        <button @click.left="asyncAdd(3)" @click.right.prevent="sub(2)">change</button>
    </div>
</template>

<script>
import comC from "./comC.vue";
import { mapGetters,mapState,mapMutations,mapActions } from 'vuex'
export default {
    components:{
        comC
    },
    computed:{
        ...mapState({
            value: state => state.value
        }),
        ...mapGetters({
            DC:"doubleC",
            addC:"addC"
        }),
        counter(){
            return this.$store.state.counter
        }
    },
    methods:{
        ...mapActions({
            asyncAdd:"asyncAdd"
        }),
        //相当于在methods里加了个asyncAdd方法
        /*myAdd(n){
            this.$store.dispatch("asyncAdd",n)
        },*/
        ...mapMutations({
            myAdd:"add",
            mySub:"sub"
        }),
        //相当于在methods里加了个myAdd方法
        /*myAdd(n){
            this.$store.commit("add",n)
        },*/
        add(n){
            this.$store.commit("add",n)
        },
        sub(n){
            this.$store.commit("sub",n)
        }
        

    }
    
}
</script>

<style>
    .a-wrapper{
        flex:1;
        background: lime;
    }

</style>
