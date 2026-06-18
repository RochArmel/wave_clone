<script setup>
import StoreBadge from '../atoms/StoreBadge.vue';
import { personalHero, storeBadges } from '../../data/personal';
import phoneBorder from '../../assets/wave/img/phone_border.png';
</script>

<template>
  <section class="personal-hero">
    <div class="personal-hero-left">
      <h1>{{ personalHero.title.split('\n')[0] }}<br />{{ personalHero.title.split('\n')[1] }}</h1>
      <p>
        <span v-for="line in personalHero.description.split('\n')" :key="line">{{ line }}<br /></span>
      </p>
      <div class="hero-badges">
        <StoreBadge v-for="badge in storeBadges" :key="badge.alt" v-bind="badge" />
      </div>
    </div>
    <div class="personal-hero-right">
      <div class="phone-frame" :style="{ backgroundImage: `url(${phoneBorder})` }">
        <img :src="personalHero.screenshot" alt="Capture d’écran de l’application Wave" />
      </div>
    </div>
  </section>
</template>
