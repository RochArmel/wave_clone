<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  hideOnMobile: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <li
    class="feature-icon-card h-32 bg-white bg-no-repeat p-4 shadow-wave sm:h-[172px] sm:p-5"
    :class="hideOnMobile ? 'hidden sm:block' : ''"
    :style="{ backgroundImage: `url(${icon})`, backgroundPosition: 'top 18px left 16px', backgroundSize: 'auto 24px' }"
  >
    <h4 class="pt-10 text-left font-walsheimBold text-base leading-tight text-wave-navy sm:pt-[62px] sm:text-xl">
      {{ title }}
    </h4>
  </li>
</template>
