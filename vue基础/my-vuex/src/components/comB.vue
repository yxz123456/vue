<template>
    <div class="b-wrapper">
        <div>comB</div>
        <com-d></com-d>
    </div>
</template>

<script>
import comD from "./comD.vue"
export default {
    components:{
        comD
    }
}
</script>

<style>
    .b-wrapper{
        flex:1;
        background: rgb(0, 132, 255);
    }
</style>
