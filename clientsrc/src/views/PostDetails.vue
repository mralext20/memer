<template>
  <div class style="width: 100vw;">

    <h5 class="card-title text-white">{{details.title}}</h5>

    <img :src="details.memeUrl" class="card-img-top" />

    <div class="card-body">
      <button @click="deletePost" class="btn btn-danger">Delete</button>
      <button class="btn btn-warning">Edit</button>
    </div>
    <i @click="toggleShow" class="far fa-plus-square"></i>
    <create-comment :show="show" v-if="show" :memeId="details.id" />
    <comment v-for="comment in details.comments" :key="comment.id" :data="comment" />
  </div>
</template>

<script>
import Comment from "../components/Comment";
import createComment from "../components/createComment";
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
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    deletePost() {
      this.$store.dispatch("deletePost", this.details.id);
    }
  },
  computed: {
    details() {
      return this.$store.state.activePost;
    }
  },
  components: {
    Comment,
    createComment
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    }
  }
};
</script>


<style>
</style>