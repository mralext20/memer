<template>
  <div class="row">
    <Post v-for="(postObj) in posts" :key="postObj._id" :postData="postObj" />
  </div>
</template>

<script>
import Post from "./Post";

export default {
  name: "Posts",
  mounted() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  components: {
    Post
  }
};
</script>

<style>
</style>