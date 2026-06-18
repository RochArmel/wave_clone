<script setup>
import { ref } from 'vue';
import AppLogo from '../atoms/AppLogo.vue';
import { primaryNavigation, secondaryNavigation } from '../../data/navigation';

defineProps({
  business: {
    type: Boolean,
    default: false,
  },
});

const isOpen = ref(false);
</script>

<template>
  <nav
    class="px-4 py-4 sm:px-[60px] lg:px-[133px] xl:px-[200px] xl:py-6"
    :class="business ? 'bg-wave-pale' : 'bg-white'"
  >
    <div class="flex items-center justify-between">
      <AppLogo />
      <button
        class="hamburger-button lg:hidden"
        type="button"
        aria-label="Ouvrir le menu"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="hidden flex-1 items-center lg:flex">
        <ul class="ml-[41px] flex items-center gap-[41px] text-sm font-semibold uppercase text-wave-black">
          <li v-for="item in primaryNavigation" :key="item.label">
            <RouterLink class="p-2.5" :to="item.to">{{ item.label }}</RouterLink>
          </li>
        </ul>
        <ul class="ml-auto flex items-center gap-[41px] text-sm font-semibold uppercase text-wave-black">
          <li v-for="item in secondaryNavigation" :key="item.label">
            <a class="p-2.5" :href="item.href">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div v-show="isOpen" class="pt-3 lg:hidden">
      <ul class="space-y-1 text-sm font-semibold uppercase text-wave-black">
        <li v-for="item in primaryNavigation" :key="item.label">
          <RouterLink class="block px-11 py-1.5" :to="item.to" @click="isOpen = false">{{ item.label }}</RouterLink>
        </li>
        <li v-for="item in secondaryNavigation" :key="item.label">
          <a class="block px-11 py-1.5" :href="item.href">{{ item.label }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
