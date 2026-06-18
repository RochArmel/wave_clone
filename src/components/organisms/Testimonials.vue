<script setup>
import { ref } from 'vue';
import TestimonialCard from '../molecules/TestimonialCard.vue';
import { testimonials } from '../../data/personal';

const activeIndex = ref(0);
</script>

<template>
  <section class="testimonials-section">
    <h2>Témoignages de nos clients</h2>
    <div class="mt-12 sm:mt-[72px]">
      <TestimonialCard :testimonial="testimonials[activeIndex]" />
      <ol class="mt-9 flex justify-center gap-2.5 lg:mt-[53px]">
        <li v-for="(_, index) in testimonials" :key="index">
          <button
            class="h-[11px] w-[11px] rounded-full"
            :class="activeIndex === index ? 'bg-wave-orange' : 'bg-[#C6C6FF]'"
            :aria-label="`Afficher le témoignage ${index + 1}`"
            @click="activeIndex = index"
          ></button>
        </li>
      </ol>
    </div>
  </section>
</template>
