<template> 

<div v-theme:column="'wide'" id="show-blogs">
    <h1> List Blog Titles </h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog">
        <h2 v-rainbow> {{blog.title | to-uppercase}} </h2>
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
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            console.log(data);
            this.blogs = data.body.slice(0,10);
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