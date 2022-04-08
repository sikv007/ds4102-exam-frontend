<template>
  <router-link class="col-12 col-lg-4 p-4" :to="`/utviklere/${id}`">
    <article class="card p-4 d-flex gap-4 align-items-center">
      <figure>
        <img :src="`${HOST}src/img/developers/${name.split(' ')[0].toLowerCase()}.jpg`" alt="">
      </figure>
      <h4>{{ name }}</h4>
    </article>
  </router-link>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { HOST } from "../../config";
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  name: {
    type: String,
  },
  id: {
    type: Number,
  },
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}
</style>
