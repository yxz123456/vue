<template>
    <div class="editor-wrapper">
        <div class="title">
            <label for="title">文章标题</label>
            <input type="text" id="title" class="form-control" v-model="artTitle">
        </div>
        <div class="content">
            <label for="content">文章内容</label>
            <textarea type="text" id="content" class="form-control" :value="artContent" @input="editArticle({content:$event.target.value})"/>
        </div>
    </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex' 
export default {
    computed:{
        ...mapGetters({
            articleTitle:"articleTitle",
            artContent:"articleContent"
        }),
        artTitle:{
            get(){
                return this.$store.getters.articleTitle
            },
            set(value){
                this.$store.commit('editArticle',{title:value})
            }
        }
    },
    methods:{
        ...mapMutations({
            editArticle:"editArticle"
        })
    }
}
</script>
<style>
    .editor-wrapper{
        margin-left:380px;
        height: 100%;
        padding: 20px;
    }
    .title{
        height: 10%;
        margin-bottom:20px;
    }
    .content{
        height: 80%;
    }
    .content label{
        height: 3%;
    }
    .content textarea{
        height: 95%;
    }
</style>
