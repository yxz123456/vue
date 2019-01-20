<template>
    <div class="tools-wrapper">
        <i class="glyphicon glyphicon-plus" @click='add'></i>
        <i class="glyphicon glyphicon-heart" @click='addFavorite' :class="{'isFav':isFavorite}"></i>
        <i class="glyphicon glyphicon-remove" @click='deleteArticle'></i>
    </div>
</template>

<script>
import { mapMutations,mapGetters } from "vuex"
export default {
    methods:{
        add(){
            this.$store.commit("addArticle")
        },
        ...mapMutations({
            addFavorite:"addFavorite",
            deleteArticle:"deleteArticle"
        })
    },
    computed:{
        ...mapGetters({
            isFavorite:"isFavorite"
        }),
        // this.$store.getters.[module/isFavorite]
    }
}
</script>

<style>
    .tools-wrapper{
        float: left;
        width: 80px;
        height:100%;
        padding: 35px 25px;
        background:rgba(51, 81, 85, 0.692);
    }
    .tools-wrapper>i{
        
        font-size:30px;
        margin-bottom: 20px;
        color:#fff;
    }
    .isFav{
        color:rgba(221, 84, 214, 0.774) !important;
    }
</style>
