import businessPortal from '../assets/wave/img/business-portal.svg';
import businessApp from '../assets/wave/img/business-app.svg';
import bulkpayShot from '../assets/wave/img/business-portal-bulkpay.svg';
import merchantScan from '../assets/wave/img/merchantscan.png';
import collectionsShot from '../assets/wave/img/collections.png';
import checkoutApp from '../assets/wave/img/checkout-app.svg';
import bulkpayIcon from '../assets/wave/img/business-icon-bulkpay.png';
import bizappIcon from '../assets/wave/img/business-icon-bizapp.png';
import collectionsIcon from '../assets/wave/img/business-icon-collections.png';
import checkoutIcon from '../assets/wave/img/business-icon-checkoutapi.png';
import jumia from '../assets/wave/img/logo-jumia.png';
import burgerKing from '../assets/wave/img/logo-burgerking.svg';
import total from '../assets/wave/img/logo-total.png';
import auchan from '../assets/wave/img/logo-auchan.svg';
import yango from '../assets/wave/img/logo-yango.svg';
import shell from '../assets/wave/img/logo-shell.svg';
import brioche from '../assets/wave/img/logo-briochedoree.png';

export const businessHero = {
  title: 'Augmentez votre portée et vos revenus avec Wave Business',
  description:
    "Des centaines de milliers d'entreprises de toutes tailles utilisent Wave pour payer leurs employés, recevoir des paiements de leurs clients, collecter de l'argent aux points de vente et accepter des paiements en ligne.",
  cta: "Contacter l'équipe commerciale",
  href: 'https://wkf.ms/3yzaobQ',
  portal: businessPortal,
  app: businessApp,
};

export const partnerLogos = [
  { id: 'jumia', alt: 'Jumia', image: jumia },
  { id: 'burgerking', alt: 'Burger King', image: burgerKing },
  { id: 'total', alt: 'Total', image: total },
  { id: 'auchan', alt: 'Auchan', image: auchan },
  { id: 'yango', alt: 'Yango', image: yango },
  { id: 'shell', alt: 'Shell', image: shell },
  { id: 'brioche', alt: 'Brioche Dorée', image: brioche, desktopOnly: true },
];

export const businessStats = [
  { value: '500K+', label: "bénéficiaires mensuels de paiements d'entreprises" },
  { value: '1M+', label: "d'utilisateurs actifs sur les APIs Wave" },
  { value: '100K+', label: 'marchands physiques actifs' },
];

export const businessSections = [
  {
    id: 'bulkpay',
    kicker: 'Paiements en masse',
    title: "Envoyez de l'argent à n'importe qui: 1% pour vous, gratuit pour le destinataire",
    description:
      "Envoyez de l'argent à n'importe qui simplement avec son numéro de téléphone - qu'il ait Wave ou un smartphone, ou non - et il peut le récupérer instantanément auprès de n'importe quel agent Wave.",
    icon: bulkpayIcon,
    image: bulkpayShot,
    background: 'mist',
    imageSide: 'right',
  },
  {
    id: 'bizapp',
    kicker: "L'appli Business",
    title: "Acceptez les paiements physiques de dizaines de millions d'utilisateurs de Wave",
    description:
      'Augmentez vos ventes grâce à des paiements plus pratiques, sécurisés et gratuits pour les clients. Les premiers 20 000 CFA de paiement sont gratuits pour vous chaque jour, avec des frais de 1 % par la suite.',
    icon: bizappIcon,
    image: merchantScan,
    background: 'white',
    imageSide: 'left',
  },
  {
    id: 'collections',
    kicker: 'Collecte',
    title: "Déposez l'argent de votre réseau auprès des agents Wave",
    description:
      "Vous recevrez instantanément votre argent avec moins de risques et moins de pertes de temps pour vos déposants, et vous pouvez surveiller le réseau en temps réel avec le portail Wave Business.",
    icon: collectionsIcon,
    image: collectionsShot,
    background: 'mist',
    imageSide: 'right',
  },
  {
    id: 'checkout',
    kicker: 'API Checkout',
    title: 'Augmentez les ventes sur votre site web',
    description:
      "Transformez davantage de paniers d'achat sur votre site en ventes finalisées grâce aux meilleures API du marché.",
    icon: checkoutIcon,
    image: checkoutApp,
    background: 'white',
    imageSide: 'left',
  },
];
