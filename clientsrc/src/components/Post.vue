<template>
  <div class="card col-12 col-md-3" style="width: 18rem; background-color:black;">
    <h5 class="card-title" style="color: white;">
      <u>{{postData.title}}</u>
    </h5>
    <img :src="postData.memeUrl" class="card-img-top" alt="..." />
    <div class="card-body"></div>
    <votes :postData="postData" />
  </div>
</template>

<script>
import Votes from "./Votes";
export default {
  name: "Post",
  props: ["postData"],
  methods: {},
  components: {
    Votes
  }
};
</script>

<style>
</style>