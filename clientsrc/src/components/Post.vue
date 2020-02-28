<template>
  <div class="card col-12 col-md-3" style="width: 18rem;">
    <h5 class="card-title">{{postData.title}}</h5>
    <img :src="postData.memeUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <i class="fas fa-sort-up"></i>
      <i class="fas fa-sort-down"></i>
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