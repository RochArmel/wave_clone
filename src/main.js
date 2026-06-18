import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import PersonalPage from './pages/PersonalPage.vue';
import BusinessPage from './pages/BusinessPage.vue';
import './styles.css';

const routes = [
  { path: '/', redirect: '/fr/' },
  { path: '/fr/', component: PersonalPage },
  { path: '/fr/business/', component: BusinessPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

createApp(App).use(router).mount('#app');
