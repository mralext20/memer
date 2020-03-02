<template>
  <div class style="width: 100vw;">

    <h5 class="card-title text-white">{{details.title}}</h5>

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
      this.$store.dispatch("getPostById", this.$route.params.postId);
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
  data() {
    return {
      show: false
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
  methods: {
    deletePost() {
      this.$store.dispatch("deletePost", this.details.id);
    }
  },
  computed: {
    details() {
      return this.$store.state.activePost;
    },
    currentUser() {
      return this.$auth.userInfo.email;
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