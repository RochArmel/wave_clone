<script setup>
import BusinessIconTitle from '../molecules/BusinessIconTitle.vue';

defineProps({
  section: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="business-feature" :class="[`business-feature-${section.id}`, section.background === 'mist' ? 'bg-wave-mist' : 'bg-white']">
    <div class="splitrow" :class="section.imageSide === 'left' ? 'lg:flex-row-reverse' : ''">
      <div class="feature-copy">
        <BusinessIconTitle :icon="section.icon" :title="section.kicker" />
        <h2>{{ section.title }}</h2>
        <p>{{ section.description }}</p>
      </div>
      <div class="feature-media">
        <img :src="section.image" :alt="section.kicker" />
      </div>
    </div>
  </section>
</template>
