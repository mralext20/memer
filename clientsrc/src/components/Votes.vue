<template>
  <div>
    <i @click="upVote" class="fas fa-sort-up"></i>
    <br />
    <i @click="downVote" class="fas fa-sort-down"></i>
    <br />
    <p style="color:white; float:left;">Score:{{postData.ratingX}}</p>
  </div>
</template>


<script>
export default {
  name: "Votes",
  props: ["postData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    upVote() {
      let upvote = this.postData.ratingX + 1;
      this.$store.dispatch("editScore", id);
      return upvote;
    }
  },
  components: {}
};
</script>


<style scoped>
</style>