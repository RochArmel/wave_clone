<script setup>
import Navbar from '../molecules/Navbar.vue';
import NoticeBanner from '../molecules/NoticeBanner.vue';

defineProps({
  business: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <header>
    <NoticeBanner v-if="!business" />
    <Navbar :business="business" />
  </header>
</template>
