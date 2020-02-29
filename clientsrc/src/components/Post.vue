<template>
  <div class="card col-12 col-md-3" style="width: 18rem; background-color:black;">
    <h5 class="card-title" style="color: white;">
      <u>{{postData.title}}</u>
    </h5>
    <img :src="postData.memeUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <i @click="upVote" class="fas fa-sort-up"></i>
      <br />
      <i @click="downVote" class="fas fa-sort-down"></i>
      <br />
      <p style="color:white; float:left;">Score:{{postData.ratingX}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["postData"],
  methods: {
    upVote() {
      debugger;
      let upvote = this.postData.ratingX + 1;
      this.$store.dispatch("editScore", id, upvote);
      return upvote;
    }
  }
};
</script>

<style>
</style>