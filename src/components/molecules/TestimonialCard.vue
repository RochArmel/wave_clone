<script setup>
import quoteUrl from '../../assets/wave/img/quote_orange.png';

defineProps({
  testimonial: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="testimonial-card">
    <img class="testimonial-photo" :src="testimonial.image" :alt="testimonial.name" />
    <div class="testimonial-quote">
      <q :style="{ backgroundImage: `url(${quoteUrl})` }">
        <span>{{ testimonial.quote }}</span>
      </q>
      <cite>{{ testimonial.name }}</cite>
    </div>
  </article>
</template>
