<script setup>
import arrowUrl from '../../assets/wave/img/orange-arrow.png';
</script>

<template>
  <div class="flex flex-col items-center justify-center bg-wave-notice px-4 py-2.5 text-center text-xs font-bold leading-relaxed text-white sm:flex-row sm:py-[19px] sm:text-sm">
    <p class="sm:mr-2">Vous voulez rejoindre Wave?</p>
    <a
      class="underline decoration-[#F9A31A]"
      :style="{ backgroundImage: `url(${arrowUrl})`, backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: '16px 14px', paddingRight: '32px', paddingLeft: '32px' }"
      href="https://www.wave.com/fr/careers/"
    >
      Consultez nos postes ouverts ici
    </a>
  </div>
</template>
