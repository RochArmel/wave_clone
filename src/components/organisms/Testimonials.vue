<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import TestimonialCard from '../molecules/TestimonialCard.vue';
import { testimonials } from '../../data/personal';

const activeIndex = ref(0);
let intervalId = null;

const startAutoPlay = () => {
  stopAutoPlay();
  intervalId = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % testimonials.length;
  }, 5000);
};

const stopAutoPlay = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

const goToSlide = (index) => {
  activeIndex.value = index;
  startAutoPlay();
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<template>
  <section class="testimonials-section">
    <h2>Témoignages de nos clients</h2>
    <div class="mt-12 overflow-hidden sm:mt-[72px]">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
      >
        <div v-for="(testimonial, index) in testimonials" :key="index" class="w-full flex-shrink-0">
          <TestimonialCard :testimonial="testimonial" />
        </div>
      </div>
      <ol class="mt-9 flex justify-center gap-2.5 lg:mt-[53px]">
        <li v-for="(_, index) in testimonials" :key="index">
          <button
            class="h-[11px] w-[11px] rounded-full transition-colors duration-300"
            :class="activeIndex === index ? 'bg-wave-orange' : 'bg-[#C6C6FF]'"
            :aria-label="`Afficher le témoignage ${index + 1}`"
            @click="goToSlide(index)"
          ></button>
        </li>
      </ol>
    </div>
  </section>
</template>
