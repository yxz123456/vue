<template>
    <div class="c-wrapper">
        <div>comC</div>
        <input type="text" @input="send">
    </div>
</template>

<script>
import eventBus from "../eventBus.js";
export default {
    methods:{
        send(e){
            eventBus.$emit("change",e.target.value);
        }
    }
}
</script>

<style>
    .c-wrapper{
        background:rgba(102, 68, 136, 0.836);   
    }
</style>
