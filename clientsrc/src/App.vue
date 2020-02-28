<template>
  <div id="app">
    <navbar />
    <router-view />

    <div class="text-center text-success">
      <h1>Memer</h1>
      <i class="far fa-plus-square"></i>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  name: "App",
  async beforeCreate() {
    await onAuth();
    if (this.$auth.isAuthenticated) {
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
    }
  },
  components: {
    Navbar
  }
};
</script>

<style>
i {
  font-size: 2rem;
  color: rgb(10, 119, 10);
}

body {
  background-color: rgb(56, 55, 55);
}
</style>
