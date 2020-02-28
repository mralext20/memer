<template>
  <div id="app">
    <navbar />
    <router-view />
    <div class="container-fluid">
      <div class="text-center text-success">
        <h1>Memer</h1>
        <div class="row sort-form mx-2">
          <h3>sort</h3>
          <i @click="toggleForm" class="far fa-plus-square"></i>
        </div>
      </div>
      <div class="row justify-content-center">
        <createPost :toggleForm="this.toggleForm" v-if="formToggle == true" />
      </div>
    </div>
  </div>
</template>

<script>
import createPost from "./components/CreatePost";
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
    Navbar,
    createPost
  },
  methods: {
    toggleForm() {
      this.formToggle = !this.formToggle;
    }
  },

  data() {
    return {
      formToggle: false
    };
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

.sort-form {
  justify-content: space-between;
}
</style>
