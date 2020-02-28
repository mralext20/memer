<template>
  <div v-if="details._id">
    <div>
      <h1>Post</h1>
      {{details}}
    </div>
    <button @click="deleteMeme">delete</button>
  </div>
</template>

<script>
export default {
  name: "PostDetails",
  mounted() {
    if (!this.$store.state.posts.length) {
      this.$store.dispatch("getPostById", this.$route.params.postId);
    } else {
      this.$store.dispatch(
        "setActivePost",
        this.$store.state.fine(p => p._id == this.$route.params.postId)
      );
    }
  },
  computed: {
    details() {
      return this.$store.state.activePost;
    }
  }
};
</script>






<style>
</style>