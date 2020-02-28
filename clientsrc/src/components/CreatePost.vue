<template>
  <div class="col-5">
    <form @submit.prevent="createPost">
      <div class="form-group">
        <input type="text" class="form-control" id="imgUrl" v-model="meme.memeUrl" />
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="title" v-model="meme.title" />
      </div>
      <div class="form-check"></div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button @click="toggleForm">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  props: ["toggleForm"],
  data() {
    return {
      meme: {}
    };
  },
  methods: {
    createPost() {
      this.$store.dispatch("addMeme", this.meme);
      this.meme = {};
    }
  }
};
</script>

<style>
</style>