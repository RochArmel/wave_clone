<script setup>
import WaveButton from '../atoms/Button.vue';
import { businessHero } from '../../data/business';
</script>

<template>
  <section class="business-cta">
    <div>
      <h1>Commencez avec Wave Business</h1>
      <WaveButton :href="businessHero.href" variant="inverse">{{ businessHero.cta }}</WaveButton>
    </div>
  </section>
</template>
