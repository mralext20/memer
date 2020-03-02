<template>
  <div>
    <button class="btn btn-danger" v-if="userEmail == data.creatorEmail" @click="destroyComment">
      <i class="fas fa-trash"></i>
    </button>
    <div class="text-white">
      <cite>{{data.creator.name}}:</cite>
      {{data.comment}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: ["data"],
  computed: {
    userEmail() {
      return this.$auth.userInfo.email;
    }
  },

  methods: {
    destroyComment() {
      this.$store.dispatch("deleteComment", this.data);
    }
  }
};
</script>

<style>
</style>