import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        articleList:[],
        activeArticle:{},
    },
    mutations:{
        addArticle(state){
            let article = {
                title:"一篇文章",
                content:"",
                isFavorite:false,
                time:new Date().getTime()
            }
            state.articleList.push(article)
            state.activeArticle = article
        },
        changeActive(state,item){
            state.activeArticle = item
        },
        addFavorite(state){
            if(state.activeArticle.title){
                state.activeArticle.isFavorite = !state.activeArticle.isFavorite
            }
            else{
                alert("文章列表为空")
            }    
        },
        deleteArticle(state){
            state.articleList = state.articleList.filter(item => item !== state.activeArticle)
            if(state.articleList.length != 0){
                let index = state.articleList.length-1
                state.activeArticle = state.articleList[index]
            }
        },
        editArticle(state,obj){
            // Vue.set(state.activeArticle,'title',obj.title)
            Object.assign(state.activeArticle,obj)
        }

    },
    getters:{
        isFavorite(state){
            return state.activeArticle.isFavorite
        },
        favoriteList(state){
            return state.articleList.filter(item => item.isFavorite)
        },
        articleTitle(state){
            return state.activeArticle.title
        },
        articleContent(state){
            return state.activeArticle.content
        }
    }
})