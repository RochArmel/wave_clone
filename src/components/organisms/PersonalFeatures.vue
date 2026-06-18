<script setup>
import FeatureCardGrid from '../molecules/FeatureCardGrid.vue';
import { featureCards } from '../../data/personal';
</script>

<template>
  <section class="personal-features">
    <h2>Wave c’est</h2>
    <FeatureCardGrid :cards="featureCards" />
  </section>
</template>
