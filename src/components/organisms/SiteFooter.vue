<script setup>
import AppLogo from '../atoms/AppLogo.vue';
import StoreBadge from '../atoms/StoreBadge.vue';
import LanguageButton from '../atoms/LanguageButton.vue';
import FooterColumn from '../molecules/FooterColumn.vue';
import { footerCompanyLinks, footerLegalLinks, mobileBusinessLegalLinks } from '../../data/navigation';
import { storeBadges } from '../../data/personal';

defineProps({
  business: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <footer :class="business ? 'text-wave-ink' : 'text-wave-navy'">
    <div class="main-footer" :class="business ? 'hidden sm:flex' : 'flex'">
      <section class="logo-lang">
        <AppLogo />
        <LanguageButton />
        <p class="copyright">&copy; Wave Mobile Money Inc.</p>
      </section>
      <FooterColumn title="L’entreprise" :links="footerCompanyLinks" />
      <FooterColumn title="Informations Légales" :links="footerLegalLinks" />
      <section class="hidden flex-1 xl:block"></section>
      <section v-if="!business" class="download-links">
        <StoreBadge v-for="badge in storeBadges" :key="badge.alt" v-bind="badge" />
      </section>
    </div>

    <div v-if="business" class="mobile-business-footer sm:hidden">
      <FooterColumn title="L’entreprise" :links="footerCompanyLinks" />
      <section class="text-center">
        <LanguageButton />
        <p class="copyright">&copy; Wave Mobile Money Inc.</p>
      </section>
      <ul class="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-0 text-center">
        <li v-for="link in mobileBusinessLegalLinks" :key="link.label">
          <a class="text-[11px] leading-[1.625]" :href="link.href">{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>
