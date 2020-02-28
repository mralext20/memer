<template>
  <div class="card col-12 col-md-3" style="width: 18rem; background-color:black;">
    <h5 class="card-title" style="color: white;">{{postData.title}}</h5>
    <img :src="postData.memeUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <i class="fas fa-sort-up"></i>
      <br />
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