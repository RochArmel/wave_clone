<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  links: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="text-center md:w-[222px] md:text-left">
    <h5 class="mb-2.5 mt-6 font-walsheimBold text-sm md:mt-0 md:text-base">{{ title }}</h5>
    <ul class="mb-4">
      <li v-for="link in links" :key="link.label">
        <a class="text-[13px] leading-[1.8] md:text-base md:leading-[1.625]" :href="link.href">{{ link.label }}</a>
      </li>
    </ul>
  </section>
</template>
