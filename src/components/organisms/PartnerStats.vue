<script setup>
import PartnerLogo from '../atoms/PartnerLogo.vue';
import { partnerLogos, businessStats } from '../../data/business';
</script>

<template>
  <section class="partner-stats">
    <ul class="logos">
      <PartnerLogo v-for="logo in partnerLogos" :key="logo.id" :logo="logo" />
    </ul>
    <ul class="stats">
      <li v-for="stat in businessStats" :key="stat.value">
        <h2>{{ stat.value }}</h2>
        <p>{{ stat.label }}</p>
      </li>
    </ul>
  </section>
</template>
