<template>
  <div class="col-5" v-if="show">
    <form @submit.prevent="createPost">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="comment"
          v-model="comment.comment"
          placeholder="Write a comment..."
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
  name: "CreateComment",
  props: ["show", "memeId"],
  data() {
    return {
      comment: {
        title: "",
        memeId: this.memeId
      }
    };
  },
  methods: {
    createPost() {
      this.$store.dispatch("addComment", this.comment);
      this.comment = { comment: "", memeId: this.memeId };
    },
    toggleForm() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
</style>