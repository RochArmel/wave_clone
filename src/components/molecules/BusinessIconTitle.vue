<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="mb-5 flex items-center justify-start">
    <img class="mr-2.5 w-8 xl:w-16" :src="icon" :alt="title" />
    <h3 class="font-inter text-base font-semibold text-wave-ink sm:text-2xl lg:text-lg xl:text-2xl">{{ title }}</h3>
  </div>
</template>
