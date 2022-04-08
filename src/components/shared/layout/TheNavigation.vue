<template>
  <teleport to="body">
    <transition name="overlay" mode="out-in" @click="close">
      <div v-if="show" class="navigation-overlay"></div>
    </transition>
    <transition name="nav" mode="out-in">
      <nav v-if="show">
        <div class="container py-5 px-5">
          <ul>
            <li>
              <router-link to="/" @click="close">Dashboard</router-link>
            </li>
            <li>
              <router-link to="/utviklere" @click="close">Utviklere</router-link>
            </li>
          </ul>
          <button @click="close">Close</button>
        </div>
      </nav>
    </transition>
  </teleport>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  show: {
    type: Boolean,
  },
});

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};
</script>
