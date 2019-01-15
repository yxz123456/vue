<template>
    <div class="d-wrapper">
        <div>comD</div>
        <div>C-->D:{{value}}</div>
    </div>
</template>

<script>
import eventBus from "../eventBus.js";
export default {
    data(){
        return {
            value:""
        }
    },
    created(){
        eventBus.$on("change",(val)=>{
            this.value = val;
        });
    },
   
}
</script>

<style>
    .d-wrapper{
        background:rgba(255, 0, 106, 0.781);
    }
</style>
