<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a :href="href" class="inline-flex">
    <img class="h-14 w-auto sm:h-[72px]" :src="image" :alt="alt" />
  </a>
</template>
