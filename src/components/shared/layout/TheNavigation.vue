<template>
  <Teleport to="body">
    <Transition name="overlay" mode="out-in" @click="close">
      <div v-if="show" class="navigation-overlay"></div>
    </Transition>
    <Transition name="nav" mode="out-in">
      <nav v-if="show">
        <div class="container py-5 px-5">
          <base-logo class="pb-5" @click="close"></base-logo>
          <ul class="nav flex-column h3">
            <li class="nav-item">
              <router-link to="/" class="nav-link px-0" @click="close"
                >Dashboard</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/utviklere" class="nav-link px-0" @click="close"
                >Utviklere</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/oppdrag" class="nav-link px-0" @click="close"
                >Oppdrag</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/kunder" class="nav-link px-0" @click="close"
                >Kunder</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/faktura" class="nav-link px-0" @click="close"
                >Faktura</router-link
              >
            </li>
          </ul>
          <hr />
          <button @click="close">Close</button>
        </div>
      </nav>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
  },
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>
