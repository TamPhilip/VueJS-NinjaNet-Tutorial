<template>
  <div>
    <app-header> </app-header>
    <router-view> </router-view> 
  </div>
</template>

<script>
import header from './components/header.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import addBlog from './components/addBlog.vue';
export default {
  data () {
    return {
      
    }
  },
  components: {
      'list-blogs': listBlogs,
      'show-blogs': showBlogs,
      'add-blog': addBlog,
      'app-header': header
  },
  methods: {

  }
}
</script>

<style>
 body {
   margin: 0;
   font-family: 'Helvetica-Light';
 }
</style>
