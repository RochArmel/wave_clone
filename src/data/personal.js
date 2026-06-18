import googlePlayBadge from '../assets/wave/img/google-play-badge.png';
import appStoreBadge from '../assets/wave/img/app-store-badge.svg';
import homepage from '../assets/wave/img/homepage.svg';
import aita from '../assets/wave/img/testimonial-aita.jpg';
import firmin from '../assets/wave/img/testimonial-firmin.jpg';
import bankIcon from '../assets/wave/img/icon-bank.png';
import coinsIcon from '../assets/wave/img/icon-coins.png';
import bulbIcon from '../assets/wave/img/icon-bulb.png';
import phoneIcon from '../assets/wave/img/icon-phone.png';
import headsetIcon from '../assets/wave/img/icon-headset.png';
import shieldIcon from '../assets/wave/img/icon-shield.png';

export const storeBadges = [
  {
    alt: 'Disponible sur Google Play',
    image: googlePlayBadge,
    href: 'https://play.google.com/store/apps/details?id=com.wave.personal&referrer=utm_source=wave.com&utm_medium=web',
  },
  {
    alt: "Télécharger dans l'App Store",
    image: appStoreBadge,
    href: 'https://itunes.apple.com/sn/app/wave-mobile-money/id1523884528',
  },
];

export const personalHero = {
  title: 'Votre allié\nmobile money',
  description: 'Déposez et retirez gratuitement.\nPayez vos factures sans frais.\nTransferez de l’argent pour 1%.',
  screenshot: homepage,
};

export const featureCards = [
  { title: 'Un compte sans frais de dépôt ou retrait', icon: bankIcon },
  { title: 'Des transferts d’argent à seulement 1%', icon: coinsIcon },
  { title: 'Le paiement de factures sans frais', icon: bulbIcon },
  { title: 'L’achat de crédit instantané tous réseaux', icon: phoneIcon, hideOnMobile: true },
  { title: 'Un numéro de contact unique et gratuit', icon: headsetIcon },
  { title: 'Un système de sécurité aux standards internationaux', icon: shieldIcon, hideOnMobile: true },
];

export const testimonials = [
  {
    name: 'Aita',
    quote: 'Je recharge mon Woyofal avec Wave. C’est simple, facile et efficace, tu peux tout faire avec sans te déplacer.',
    image: aita,
  },
  {
    name: 'Firmin',
    quote: 'Maintenant, je n’utilise que Wave pour envoyer de l’argent à ma famille.',
    image: firmin,
  },
];
