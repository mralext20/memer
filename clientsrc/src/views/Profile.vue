<template>
  <div>
    <div class="about text-center">
      <h1>Welcome {{ profile.name }}</h1>
      <img class="rounded" :src="profile.picture" alt />
      <p>{{ profile.email }}</p>
    </div>
    <div class="row">
      <Post v-for="(postObj) in profile.posts" :key="postObj._id" :postData="postObj" />
    </div>
  </div>
</template>

<script>
import Post from "../components/Post";

export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  },
  components: {
    Post
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
