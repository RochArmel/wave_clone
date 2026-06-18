<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'business',
  },
});
</script>

<template>
  <a
    :href="href"
    class="inline-flex w-max items-center justify-center rounded-full text-center font-bold shadow-button transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-wave-business/30"
    :class="variant === 'inverse'
      ? 'bg-white text-wave-business px-7 py-3 text-sm md:px-[57px] md:py-[22px] md:text-[29px]'
      : 'bg-wave-business text-white px-7 py-3 text-sm md:px-[57px] md:py-[22px] md:text-[29px]'"
  >
    <slot />
  </a>
</template>
