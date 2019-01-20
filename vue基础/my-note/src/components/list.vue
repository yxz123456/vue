<template>
    <div class="list-wrapper">
        <div class="head">
            <h3>MY NOTE APP</h3>
            <div class="btn-group" role="group" >
                <button type="button" class="btn btn-default"  @click="allNote = true" :class="{'active' : allNote}">All Note</button>
                <button type="button" class="btn btn-default" @click="allNote = false" :class="{'active' : !allNote}">Favorite</button>
            </div>
        </div>
        <div class="list">
            <div class="group-list" 
            v-for="(item,index) in (allNote ? getArticleList : favoriteList)" :key="index"
            :class="{ 'isActive' : item === activeArticle }" @click="changeActive(item)" >
                {{item.title}}
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations,mapState,mapGetters} from 'vuex'
export default {
    data(){
        return {
            allNote:true,
        }
    },
    computed:{
        getArticleList(){
            return this.$store.state.articleList
        },
        ...mapState({
            activeArticle:state => state.activeArticle
        }),
        ...mapGetters(["favoriteList"])
    },
    methods:{
        ...mapMutations({
            changeActive:"changeActive"
        }),
       
        
    }
    
}
</script>
<style>
    .list-wrapper{
        float: left;
        padding:10px;
        width: 300px;
    }
    .head{
        height: 15%;
        text-align: center;
        margin-bottom:3%;
    }
    .head .btn-group>button{
        width: 100px;
    }
    .list{
        height: 82%;
        display: flex;
        flex-direction:unset;
        justify-content:center;
        flex-wrap: wrap-reverse;
    }
    .group-list{
        width:200px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        border-radius: 10px;
    }
    .isActive{
        background:rgba(233, 134, 211, 0.979);
    }
</style>
