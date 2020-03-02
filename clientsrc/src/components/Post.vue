<template>
  <div class="card col-12 col-md-3" style="width: 18rem;">
    <h5 class="card-title">{{postData.title}}</h5>
    <router-link :to="{ name: 'PostDetails', params: {postId: postData._id}}">
      <img :src="postData.memeUrl" class="card-img-top" alt="..." />
    </router-link>
    <div class="card-body"></div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["postData"],
  methods: {}
};
</script>

<style>
</style>