<template>
    <div class="a-wrapper">
        <div>comA</div>
        <com-c></com-c>
    </div>
</template>

<script>
import comC from "./comC.vue";
export default {
    components:{
        comC
    }
}
</script>

<style>
    .a-wrapper{
        flex:1;
        background: lime;
    }

</style>
