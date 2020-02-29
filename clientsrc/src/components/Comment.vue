<template>
  <div>
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
  methods: {}
};
</script>

<style>
</style>