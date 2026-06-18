<script setup>
defineProps({
  logo: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <li
    class="flex basis-1/3 justify-center p-[5px] lg:basis-1/4"
    :class="logo.desktopOnly ? 'hidden lg:flex' : ''"
  >
    <img :class="`partner-${logo.id}`" class="block h-auto object-contain" :src="logo.image" :alt="logo.alt" />
  </li>
</template>
