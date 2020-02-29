<template>
  <div class="col-5">
    <form @submit.prevent="createPost">
      <div class="form-group">
        <input type="text" class="form-control" id="title" v-model="meme.title" placeholder="Title" />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="imgUrl"
          v-model="meme.memeUrl"
          placeholder="image Link"
        />
      </div>
      <div class="form-check"></div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button class="btn mx-2 btn-danger" @click="toggleForm">Cancel</button>
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