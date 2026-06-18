<script setup>
import logo from '../../assets/wave/img/nav-logo.png';

defineProps({
  compact: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <RouterLink to="/fr/" aria-label="Wave accueil">
    <img :class="compact ? 'h-[39px] w-[86px]' : 'h-[51px] w-[115px]'" :src="logo" alt="Logo Wave" />
  </RouterLink>
</template>
