<script setup>
import SiteHeader from '../components/organisms/SiteHeader.vue';
import SiteFooter from '../components/organisms/SiteFooter.vue';
import BusinessHero from '../components/organisms/BusinessHero.vue';
import PartnerStats from '../components/organisms/PartnerStats.vue';
import BusinessFeatureSection from '../components/organisms/BusinessFeatureSection.vue';
import BusinessCTA from '../components/organisms/BusinessCTA.vue';
import { businessSections } from '../data/business';
</script>

<template>
  <SiteHeader business />
  <main>
    <BusinessHero />
    <PartnerStats />
    <BusinessFeatureSection v-for="section in businessSections" :key="section.id" :section="section" />
    <BusinessCTA />
  </main>
  <SiteFooter business />
</template>
