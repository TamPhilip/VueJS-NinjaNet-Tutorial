<template> 

<div v-theme:column="'wide'" id="show-blogs">
    <h1> All Blog Articles </h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog">
        <router-link v-bind:to="'/blog/'+ blog.id"> <h2> {{blog.title | to-uppercase}} </h2> </router-link>
        <article> {{blog.content | snippet}} </article>
    </div>
</div>

</template>


<script> 
import searchMixin from '../mixins/searchMixin';
export default {
    data() {
        return {
            blogs: [],
            search: ""
        }
    },
    methods: {
        
    },
    computed: {

    },
    filters: {
        toUppercase(value){
            return value.toUpperCase();
        },
        snippet(value){
            return value.slice(0, 100) + "...";
        }
    }, directives: {
        "rainbow": {
            bind(el, binding, vnode) {
                 el.style.color = "#" + Math.random().toString().slice(2,8);
            }
        },
        "theme": {
            bind(el, binding, vnode) {
                if (binding.value == "wide") {
                el.style.maxWidth = "1200px";
                } else if (binding.value == 'narrow') {
                el.style.maxWidth = "560px";
                }
                if(binding.arg =="column") {
                el.style.background = "#ddd";
                el.style.padding = '20px'
                }
            }
        }
    },
    mixins: [searchMixin],
    created() {
        this.$http.get('https://vuejsninjatutorial.firebaseio.com//posts.json').then(function(data){
            return data.json()
        }).then(function(data) {
            var blogsArray = []
            for(let key in data) {
                data[key].id = key
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray;
        })
        
    }
}

</script>


<style>
#show-blogs {
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

input,textarea{
    width:100%;
    display:block;
    height: 40px;    
}

</style>