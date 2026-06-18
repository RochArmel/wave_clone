<script setup>
import WaveButton from '../atoms/Button.vue';
import { businessHero } from '../../data/business';
</script>

<template>
  <section class="business-hero">
    <div class="business-hero-left">
      <h1>{{ businessHero.title }}</h1>
      <p>{{ businessHero.description }}</p>
      <WaveButton :href="businessHero.href">{{ businessHero.cta }}</WaveButton>
    </div>
    <div class="business-hero-right">
      <img class="business-portal" :src="businessHero.portal" alt="Capture d’écran du portail Wave Business" />
      <div class="business-app">
        <img :src="businessHero.app" alt="Capture d’écran de l’application Wave Business" />
      </div>
    </div>
  </section>
</template>
