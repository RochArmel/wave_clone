<script setup>
import IconCard from '../atoms/IconCard.vue';

defineProps({
  cards: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <ul class="mx-auto mt-6 grid grid-cols-1 gap-4 sm:mt-0 sm:grid-cols-2 sm:gap-5 min-[1100px]:grid-cols-3">
    <IconCard
      v-for="card in cards"
      :key="card.title"
      :title="card.title"
      :icon="card.icon"
      :hide-on-mobile="card.hideOnMobile"
    />
  </ul>
</template>
