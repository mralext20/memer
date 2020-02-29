<template>
  <div class style="width: 100vw;">
    <h5 class="card-title">{{details.title}}</h5>
    <img :src="details.memeUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <button class="btn btn-danger">Delete</button>
      <button class="btn btn-warning">Edit</button>
    </div>
    <comment v-for="comment in details.comments" :key="comment.id" :data="comment" />
  </div>
</template>

<script>
import Comment from "../components/Comment";
export default {
  name: "PostDetails",
  mounted() {
    if (!this.$store.state.posts.length) {
      this.$store.dispatch("getPostById", this.$route.params.id);
    } else {
      this.$store.dispatch(
        "setActivePost",
        this.$store.state.posts.find(p => p._id == this.$route.params.postId)
      );
    }
  },
  computed: {
    details() {
      return this.$store.state.activePost;
    }
  },
  components: {
    Comment
  }
};
</script>






<style>
</style>