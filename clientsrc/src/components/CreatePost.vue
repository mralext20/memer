<template>
  <div class="col-5">
    <form @submit.prevent="createPost">
      <div class="form-group">
        <input type="text" class="form-control" id="imgUrl" placeholder="Img Url" />
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="title" placeholder="Title" />
      </div>
      <div class="form-check"></div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button @click="toggleForm">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreatePost"
};
</script>

<style>
</style>