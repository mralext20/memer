<template>
  <div class="card col-12 col-md-3" style="width: 18rem;">
    <h5 class="card-title">{{postData.title}}</h5>
    <img :src="postData.memeUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <button class="btn btn-danger">Delete</button>
      <button class="btn btn-warning">Edit</button>
    </div>
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