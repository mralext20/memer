<template>
  <div class="card col-12 col-md-3" style="width: 18rem;">
    <h5 class="card-title">{{details.title}}</h5>
    <img :src="details.memeUrl" class="card-img-top" />
    <div class="card-body">
      <button @click="deletePost" class="btn btn-danger">Delete</button>
      <button class="btn btn-warning">Edit</button>
    </div>
  </div>
</template>

<script>
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
  methods: {
    deletePost() {
      this.$store.dispatch("deletePost", this.details.id);
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