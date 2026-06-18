<script setup>
import SiteHeader from '../components/organisms/SiteHeader.vue';
import SiteFooter from '../components/organisms/SiteFooter.vue';
import PersonalHero from '../components/organisms/PersonalHero.vue';
import PersonalFeatures from '../components/organisms/PersonalFeatures.vue';
import Testimonials from '../components/organisms/Testimonials.vue';
</script>

<template>
  <SiteHeader />
  <main>
    <PersonalHero />
    <PersonalFeatures />
    <Testimonials />
  </main>
  <SiteFooter />
</template>
