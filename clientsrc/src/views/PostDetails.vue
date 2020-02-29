<template>
  <div class="card col-12 col-md-3" style="width: 18rem;">
    <h5 class="card-title">{{details.title}}</h5>
    <img :src="details.memeUrl" class="card-img-top" />
    <form @submit.prevent="editPost" v-if="editToggle">
      <div class="form-group">
        <input type="text" class="form-control" id="title" placeholder="Title" v-model="post.title" />
      </div>
      <div class="form-check"></div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div class="card-body" v-if="currentUser==this.details.creatorEmail">
      <button @click="deletePost" class="btn btn-danger">Delete</button>
      <button @click="toggleEdit" class="btn btn-warning">Edit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostDetails",
  mounted() {
    if (!this.$store.state.posts.length) {
      this.$store.dispatch("getPostById", this.$route.params.id);
    } else {
      this.$store.dispatch(
        "setActivePost",
        this.$store.state.posts.find(p => p._id == this.$route.params.postId)
      );
    }
    console.log(this.$store.state.activePost);
  },
  data() {
    return {
      editToggle: false,
      post: {}
    };
  },
  methods: {
    deletePost() {
      this.$store.dispatch("deletePost", this.details.id);
    },
    editPost() {
      if (this.currentUser == this.details.creatorEmail) {
        console.log(this.post);
        let newObj = this.details;
        newObj.title = this.post.title;
        this.$store.dispatch("editPost", newObj);
      }
    },
    toggleEdit() {
      this.editToggle = !this.editToggle;
    }
  },
  computed: {
    details() {
      return this.$store.state.activePost;
    },
    currentUser() {
      return this.$auth.userInfo.email;
    }
  }
};
</script>






<style>
</style>