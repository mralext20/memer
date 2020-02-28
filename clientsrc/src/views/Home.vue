<template>
  <div class="home text-center">
    <h1>MEMER</h1>
    <Posts />
  </div>
</template>

<script>
import Posts from "../components/Posts";

export default {
  name: "home",
  components: {
    Posts
  }
};
</script>
