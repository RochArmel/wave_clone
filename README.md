# Architecture Front-End & Guide de Développement - Wave Clone

Ce document sert de guide de référence pour comprendre, maintenir et faire évoluer le projet **Wave Clone** développé en **Vue 3**, **Vite** et **Tailwind CSS**. Il détaille l'implémentation de la méthodologie **Atomic Design** au sein du projet et fournit un guide de développement complet pour les nouveaux développeurs.

---

## 1. Vue d'ensemble

Le projet **Wave Clone** est une reproduction fidèle du site web officiel de **Wave**, une entreprise fintech de services financiers mobiles de premier plan en Afrique.

### Objectifs Techniques
- **Fidélité visuelle et fonctionnelle** : Recréer l'expérience utilisateur de Wave sur ordinateur et mobile avec des transitions fluides et des layouts complexes.
- **Maintenabilité et Scalabilité** : Utiliser un système de conception (Design System) rigoureux pour éviter la duplication de code et faciliter l'intégration de nouvelles pages ou langues.
- **Performance** : Assurer des temps de chargement ultra-rapides grâce à Vue 3 (Composition API) et à l'optimisation des assets sous Vite.

### Choix de l'Atomic Design
La méthodologie **Atomic Design** (théorisée par Brad Frost) a été choisie pour structurer le dossier `src/components/`. En découpant l'interface en éléments fondamentaux réutilisables, nous parvenons à :
1.  **Isoler les responsabilités** : Chaque fichier a un but unique et précis.
2.  **Séparer la présentation et la donnée** : Les données de contenu résident dans le dossier `src/data/`, rendant les composants agnostiques au contenu spécifique (prêt pour l'internationalisation).
3.  **Garantir la cohérence visuelle** : Les boutons, polices de caractères et espacements sont centralisés au niveau des Atomes.

---

## 2. Structure du projet

Voici une représentation complète de l'arborescence du projet, mettant en évidence la séparation entre la logique d'Atomic Design, les pages et les données statiques :

```text
C:\Users\nchor\Documents\Wave_clone\
├── .github/
│   └── workflows/
│       └── deploy-pages.yml         # CI/CD pour déploiement automatique GitHub Pages
├── public/
│   ├── favicon.png                  # Favicon du site
│   └── .nojekyll                    # Configuration pour le serveur GitHub Pages
├── src/
│   ├── assets/                      # Ressources statiques
│   │   └── wave/
│   │       ├── fonts/               # Polices GT-Walsheim-Bold, GT-Walsheim-Regular
│   │       ├── img/                 # Captures d'écran, logos de partenaires, badges
│   │       └── patterns/            # Arrière-plans géométriques (patterns de couleurs)
│   ├── components/                  # STRUCTURE ATOMIC DESIGN
│   │   ├── atoms/                   # Composants de base indivisibles
│   │   │   ├── AppLogo.vue          # Logo Wave adaptatif
│   │   │   ├── Button.vue           # Bouton primaire/secondaire style Wave (WaveButton)
│   │   │   ├── IconCard.vue         # Bloc li individuel pour les fonctionnalités
│   │   │   ├── LanguageButton.vue   # Sélecteur de langue statique
│   │   │   ├── PartnerLogo.vue      # Élément de liste li pour logo de partenaire
│   │   │   └── StoreBadge.vue       # Liens de téléchargement Google Play/App Store
│   │   ├── molecules/               # Assemblages de plusieurs atomes
│   │   │   ├── BusinessIconTitle.vue# Combinaison icône + titre de section business
│   │   │   ├── FeatureCardGrid.vue  # Grille mappant les IconCards (Atomes)
│   │   │   ├── FooterColumn.vue     # Colonne de pied de page (Titre + liste de liens)
│   │   │   ├── Navbar.vue           # Barre de navigation avec Logo, Hamburger, Menu
│   │   │   ├── NoticeBanner.vue     # Bannière d'alerte orange ("Rejoindre Wave")
│   │   │   └── TestimonialCard.vue  # Bloc photo + citation + auteur
│   │   └── organisms/               # Sections majeures autonomes de l'interface
│   │       ├── BusinessCTA.vue      # Appel à l'action pour les entreprises
│   │       ├── BusinessFeatureSection.vue # Ligne de fonctionnalité avec texte et image alternative
│   │       ├── BusinessHero.vue     # Section de présentation principale Business
│   │       ├── PartnerStats.vue     # Grille de logos de partenaires + statistiques clés
│   │       ├── PersonalFeatures.vue # Section "Wave c'est" avec la grille de fonctionnalités
│   │       ├── PersonalHero.vue     # Section de bienvenue pour les particuliers
│   │       ├── SiteFooter.vue       # Pied de page unifié (gère mode personnel / pro)
│   │       ├── SiteHeader.vue       # En-tête globale avec NoticeBanner et Navbar
│   │       └── Testimonials.vue     # Carrousel coulissant dynamique avec auto-play
│   ├── data/                        # Séparation des données métiers
│   │   ├── business.js              # Textes, logos, stats de la partie Business
│   │   ├── navigation.js            # Liens de navigation (Header, Footer, Mobile)
│   │   └── personal.js              # Cartes de fonctionnalités, badges, témoignages
│   ├── pages/                       # Vues applicatives associées aux routes
│   │   ├── BusinessPage.vue         # Assemblage de la landing page Business
│   │   └── PersonalPage.vue         # Assemblage de la landing page Particuliers (Personal)
│   ├── App.vue                      # Composant racine de l'application
│   ├── main.js                      # Point d'entrée, configuration de Vue Router
│   └── styles.css                   # Styles globaux, directives Tailwind et animations
├── index.html                       # Fichier HTML d'entrée principal
├── package.json                     # Scripts et dépendances npm
├── postcss.config.js                # Configuration de PostCSS
├── tailwind.config.js               # Configuration personnalisée des couleurs, ombres
└── vite.config.js                   # Configuration de build et d'aliases Vite
```

---

## 3. Atomic Design dans wave_clone

La division en dossiers permet d'appliquer la taxonomie d'Atomic Design à la structure de composants Vue 3.

```
+-------------------------------------------------------------+
|                          PAGES                              |
|   (PersonalPage.vue, BusinessPage.vue)                     |
|                                                             |
|   +-----------------------------------------------------+   |
|   |                    ORGANISMS                        |   |
|   |   (SiteHeader, PersonalHero, Testimonials, ...)     |   |
|   |                                                     |   |
|   |   +---------------------------------------------+   |   |
|   |   |                MOLECULES                    |   |   |
|   |   |   (Navbar, FeatureCardGrid, TestimonialCard)|   |   |
|   |   |                                             |   |   |
|   |   |   +-------------------------------------+   |   |   |
|   |   |   |              ATOMS                  |   |   |   |
|   |   |   |   (AppLogo, Button, StoreBadge)     |   |   |   |
|   |   |   +-------------------------------------+   |   |   |
|   |   +---------------------------------------------+   |   |
|   +-----------------------------------------------------+   |
+-------------------------------------------------------------+
```

### ### Atoms (Atomes)
Les Atomes sont les briques de base de notre interface utilisateur.
*   **Rôle** : Ils représentent des éléments HTML de base stylisés de manière unique, ou des composants graphiques simples qui ne peuvent pas être décomposés sans perdre leur utilité. Ils sont purement présentations (sans logique métier interne) et sont entièrement configurables par les props de Vue.
*   **Composants du projet** :
    *   `Button.vue` : Encapsule les balises d'action (`<a>` ou `<button>`). Il reçoit des props comme `href` (pour rediriger) et `variant` (pour changer le look entre le style principal "business" et le style "inverse" blanc).
    *   `AppLogo.vue` : Gère le logo Wave officiel en utilisant des classes de dimensionnement basées sur une prop `compact`.
    *   `StoreBadge.vue` : Représente une image de badge cliquable (Google Play ou App Store) avec son lien d'affiliation et ses textes alt.
    *   `LanguageButton.vue` : Un bouton de sélection de langue statique.
    *   `PartnerLogo.vue` : Représente une cellule `<li>` adaptative affichant le logo d'un partenaire commercial de Wave.
    *   `IconCard.vue` : Un élément de liste `<li>` qui affiche une icône en image d'arrière-plan avec un titre de fonctionnalité.
*   **Pourquoi appartiennent-ils à ce niveau ?** Ils n'embarquent aucun autre sous-composant de notre application. Ils ne font référence qu'à des éléments HTML natifs.

### ### Molecules (Molécules)
Les Molécules sont formées par l'assemblage de plusieurs Atomes.
*   **Rôle** : Elles réalisent une fonction d'interface simple et cohérente en combinant des éléments plus basiques. Elles commencent à avoir des responsabilités d'organisation visuelle mineures (comme des grilles ou des alignements) et peuvent stocker un état d'interface local (comme l'ouverture/fermeture d'un tiroir de navigation).
*   **Composants du projet** :
    *   `Navbar.vue` : Combine l'Atome `AppLogo` avec un bouton hamburger interactif et des listes d'onglets de navigation. Il gère l'état `isOpen` pour le menu mobile responsive.
    *   `FeatureCardGrid.vue` : Organise une liste d'Atomes `IconCard` dans une disposition en grille CSS Tailwind responsive (`grid-cols-1 sm:grid-cols-2 min-[1100px]:grid-cols-3`).
    *   `TestimonialCard.vue` : Combine une image de profil, un bloc de citation utilisant le pattern de guillemet orange (`quote_orange.png`), et le nom de l'auteur.
    *   `BusinessIconTitle.vue` : Une petite association d'une icône ronde et d'un titre textuel pour introduire les grandes fonctionnalités d'entreprise.
    *   `FooterColumn.vue` : Une section comprenant un en-tête et une liste de liens associés.
    *   `NoticeBanner.vue` : La bannière d'accroche supérieure avec un texte de recrutement et un lien décoré d'une flèche orange.
*   **Pourquoi appartiennent-ils à ce niveau ?** Ils assemblent plusieurs Atomes pour fournir un rôle ou une unité fonctionnelle complète (une carte de témoignage, une ligne de menu, une grille d'icônes). Ils restent cependant génériques et dépendent des données injectées par leur parent.

### ### Organisms (Organismes)
Les Organismes sont des groupes de Molécules et d'Atomes assemblés pour former des sections distinctes et indépendantes de l'application.
*   **Rôle** : Ils représentent des zones d'écran complètes, hautement fonctionnelles et facilement identifiables. Ils s'occupent de la mise en page majeure, gèrent parfois des fonctionnalités ou des interactions complexes (comme des minuteurs, du défilement/carrousel ou des requêtes), et relient les composants d'interface à la structure de données métier globale.
*   **Composants du projet** :
    *   `SiteHeader.vue` : L'en-tête globale de l'application. Elle rassemble la `NoticeBanner` (Molécule) et la `Navbar` (Molécule).
    *   `SiteFooter.vue` : Le pied de page global. Il combine `AppLogo` (Atome), `LanguageButton` (Atome), `StoreBadge` (Atome), et plusieurs `FooterColumn` (Molécules). Il change son layout structurel selon la prop `business` (version ordinateur vs version mobile).
    *   `PersonalHero.vue` & `BusinessHero.vue` : Les grandes bannières d'accueil de chaque page. Ils disposent les textes majeurs, les boutons d'appels à l'action (`Button.vue`), et les visuels complexes de téléphones ou d'applications.
    *   `Testimonials.vue` : Le carrousel de témoignages. Il assemble plusieurs `TestimonialCard` (Molécules) et gère l'état de défilement horizontal ainsi qu'un minuteur de défilement automatique (`setInterval`).
    *   `PartnerStats.vue` : Gère l'affichage d'un ensemble de logos partenaires combiné avec une section de statistiques chiffrées sur Wave Business.
    *   `BusinessFeatureSection.vue` : Gère le layout complet d'une fonctionnalité métier professionnelle avec des alignements alternés (image à gauche ou à droite).
*   **Pourquoi appartiennent-ils à ce niveau ?** Ce sont des composants autonomes qu'on pourrait déplacer à n'importe quel endroit d'une page (ou réutiliser sur une autre page) sans casser l'application. Ils définissent une section entière d'un écran.

### ### Templates (Gabarits)
*   **Rôle** : Les Templates gèrent la mise en page globale (layout) sans contenu définitif. Ils déterminent comment les Organismes s'organisent dans l'espace (par exemple : structure à deux colonnes, en-tête figée, etc.).
*   **Présence dans le projet** : Dans `wave_clone`, les templates ne font pas l'objet de fichiers `.vue` séparés car la mise en page générale est simple et directe. La structure est définie directement au niveau des composants du dossier `pages/` qui jouent le rôle de gabarits implicites.

### ### Pages (Pages)
Les Pages représentent les écrans finaux que l'utilisateur visualise.
*   **Rôle** : C'est le point de connexion final. Elles initialisent les données de contenu (depuis `src/data/`), configurent les layouts, injectent les props dans les Organismes, et lient le routage de l'application.
*   **Composants du projet** :
    *   `PersonalPage.vue` : Gère la route d'accueil particuliers `/fr/`.
    *   `BusinessPage.vue` : Gère la route professionnelle `/fr/business/`.
*   **Pourquoi appartiennent-ils à ce niveau ?** Elles sont liées directement au système de routes (Vue Router) et représentent un "état" global de l'écran visible pour l'utilisateur.

---

## 4. Chaîne de composition des composants

L'Atomic Design brille par sa capacité de composition. Les composants de bas niveau s'assemblent comme des pièces de Lego pour former des structures de plus en plus intelligentes et vastes.

### Schéma de composition d'une Page
Voici le cheminement exact de l'assemblage des éléments pour la construction de la page **PersonalPage.vue** :

```text
PersonalPage.vue [PAGE]
 ├── SiteHeader [ORGANISM]
 │    ├── NoticeBanner [MOLECULE]
 │    └── Navbar [MOLECULE]
 │         └── AppLogo [ATOM]
 ├── PersonalHero [ORGANISM]
 │    └── StoreBadge [ATOM] (x2: Google Play & App Store)
 ├── PersonalFeatures [ORGANISM]
 │    └── FeatureCardGrid [MOLECULE]
 │         └── IconCard [ATOM] (x6: Cartes de fonctionnalités)
 ├── Testimonials [ORGANISM] (Gère le timer d'auto-play)
 │    ├── TestimonialCard [MOLECULE] (x2 dans le slider)
 │    └── Button [ATOM] (Bouton de navigation à puce h-[11px])
 └── SiteFooter [ORGANISM]
      ├── AppLogo [ATOM]
      ├── LanguageButton [ATOM]
      ├── FooterColumn [MOLECULE] (x2: "L'entreprise", "Informations Légales")
      └── StoreBadge [ATOM] (x2 dans la zone de téléchargement)
```

Chaque composant parent n'a pas besoin de connaître l'implémentation fine des petits-enfants. Par exemple, `PersonalPage` se contente de déclarer `<Testimonials />`. L'organisme `Testimonials` se charge de boucler sur les données de `testimonials` issues de `src/data/personal.js` et d'injecter chaque objet de donnée dans une instance de `<TestimonialCard />` (Molécule).

---

## 5. Exemples concrets du projet

### Exemple 1 : Un Atome - `src/components/atoms/Button.vue`
Cet Atome est conçu pour être réutilisable et s'adapte à son contexte d'appel grâce aux props :

```html
<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'business',
  },
});
</script>

<template>
  <a
    :href="href"
    class="inline-flex w-max items-center justify-center rounded-full text-center font-bold shadow-button transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-wave-business/30"
    :class="variant === 'inverse'
      ? 'bg-white text-wave-business px-7 py-3 text-sm md:px-[57px] md:py-[22px] md:text-[29px]'
      : 'bg-wave-business text-white px-7 py-3 text-sm md:px-[57px] md:py-[22px] md:text-[29px]'"
  >
    <slot />
  </a>
</template>
```
*   **Pédagogie** :
    *   L'Atome ne gère pas de texte en dur, il utilise un `<slot />` pour permettre au parent d'y insérer n'est-ce qu'un libellé simple ("Ouvrir un compte") ou des structures HTML (texte + icône).
    *   Les styles de mise en forme complexes de Wave (bouton arrondi en pillule, effet d'élévation `hover:-translate-y-0.5`) sont codés une seule fois ici.

### Exemple 2 : Une Molécule - `src/components/molecules/TestimonialCard.vue`
La Molécule regroupe des informations textuelles et graphiques pour former un bloc de témoignage réutilisable.

```html
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
```
*   **Pédagogie** :
    *   Elle reçoit un objet complet `testimonial` en entrée (nom, image, citation).
    *   Elle est responsable du balisage sémantique HTML5 (`<article>`, `<q>` pour la citation en ligne, `<cite>` pour l'auteur).
    *   Elle combine l'image décorative des guillemets (`quoteUrl`) avec le texte dynamique de la citation.

### Exemple 3 : Un Organisme - `src/components/organisms/Testimonials.vue` (Version Carrousel Animé)
L'organisme pilote la mise en page de la section des témoignages, gère les interactions de navigation et implémente un système de défilement automatique robuste.

```html
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
  // Relance le timer pour éviter un glissement immédiat après une interaction manuelle
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
      <!-- Conteneur coulissant flex -->
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
      >
        <div v-for="(testimonial, index) in testimonials" :key="index" class="w-full flex-shrink-0">
          <TestimonialCard :testimonial="testimonial" />
        </div>
      </div>
      <!-- Puces de navigation (Dots) -->
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
```
*   **Pédagogie** :
    *   **Gestion d'état** : L'organisme maintient l'état dynamique de la vue via `activeIndex`.
    *   **Cycle de vie** : Utilisation des hooks de cycle de vie de Vue 3 (`onMounted` et `onUnmounted`) pour démarrer et nettoyer proprement l'intervalle d'auto-play, évitant ainsi les fuites de mémoire.
    *   **Traduction CSS en ligne** : La position horizontale du slider se fait dynamiquement via l'expression `:style="{ transform: 'translateX(-' + (activeIndex * 100) + '%)' }"`.

---

## 6. Méthodologie pour développer une nouvelle fonctionnalité

Lorsqu'un ticket de développement vous demande de créer une nouvelle fonctionnalité (par exemple : une section de **Foire Aux Questions (FAQ)** interactive sur la page des particuliers), suivez cette gymnastique mentale pour l'intégrer parfaitement à l'architecture.

### Étape 1 : Analyser et Décomposer (Penser "Atomique")
Avant de coder, dessinez ou imaginez la maquette et décomposez-la de bas en haut (Bottom-Up) :
1.  **Quels sont les Atomes nécessaires ?**
    *   Une icône flèche pour ouvrir/fermer l'accordéon.
2.  **Quelles sont les Molécules à créer ?**
    *   Une ligne d'accordéon FAQ (`FaqAccordionItem.vue`) contenant la question, la flèche, et la réponse visible ou masquée selon un état local `isOpen`.
3.  **Quels sont les Organismes à concevoir ?**
    *   La section FAQ complète (`FaqSection.vue`), qui assemble le titre principal `<h2>`, prend un tableau de questions/réponses en props et boucle sur la molécule `FaqAccordionItem`.
4.  **Où injecter l'Organisme ?**
    *   Dans la page cible : `PersonalPage.vue`.

### Étape 2 : Organiser les données métier
Ne jamais coder les textes en dur dans les composants d'interface.
Ajoutez vos données FAQ dans un fichier dédié sous `src/data/`, par exemple dans `src/data/personal.js` :

```javascript
export const faqItems = [
  {
    question: "Comment puis-je ouvrir un compte Wave ?",
    answer: "Téléchargez simplement notre application sur le Google Play Store ou l'App Store, puis suivez les instructions d'inscription rapide munis d'une pièce d'identité."
  },
  {
    question: "Quels sont les frais d'envoi d'argent ?",
    answer: "Wave applique un tarif unique et transparent de 1% sur tous vos transferts d'argent."
  }
];
```

### Étape 3 : Implémenter et Assembler
1.  **Créer la Molécule** `src/components/molecules/FaqAccordionItem.vue` :
    *   Créez l'élément interactif avec son état réactif local `const isOpen = ref(false)`.
2.  **Créer l'Organisme** `src/components/organisms/PersonalFaq.vue` :
    *   Rassemblez la mise en page (grille, espacements de section, arrière-plan de pattern Wave).
    *   Importez la donnée `faqItems` de `src/data/personal.js`.
3.  **Insérer l'Organisme dans la Page** `src/pages/PersonalPage.vue` :
    *   Importez `<PersonalFaq />` et ajoutez-le dans la balise `<main>`.

---

## 7. Bonnes pratiques

Pour préserver l'intégrité de l'architecture, appliquez ces règles au quotidien :

1.  **Directives de Props Strictes** :
    *   Déclarez systématiquement le type et le caractère obligatoire des props dans Vue 3 (`type`, `required`, `default`).
2.  **Rendre les Atomes Purement Présentationnels** :
    *   Un atome ne doit jamais importer de données directement depuis `src/data/`. Il doit recevoir ses données uniquement par des props de son parent.
3.  **Exploiter Tailwind intelligemment** :
    *   Utilisez les classes utilitaires pour les espacements mineurs et les flexbox directement dans le template.
    *   Pour les structures répétitives et les patterns géométriques Wave, reportez-vous aux classes de composants CSS du fichier `src/styles.css` (ex: `.personal-hero`, `.testimonial-quote`).
4.  **Nettoyage du code asynchrone** :
    *   Si vous utilisez des écouteurs d'événements globaux (`window.addEventListener`) ou des intervalles de temps (`setInterval`), détruisez-les impérativement dans le hook `onUnmounted`.

---

## 8. Anti-patterns à éviter (Ce qu'il ne faut pas faire)

❌ **Importer une Page ou un Organisme dans un composant de niveau inférieur (Atome/Molécule)**
*   *Pourquoi ?* Cela crée des dépendances cycliques et détruit complètement la réutilisabilité des composants. Un Atome ne doit jamais dépendre de son contexte parent d'appel.

❌ **Coder en dur des chaînes de caractères complexes dans les templates**
*   *Pourquoi ?* Cela empêche toute possibilité de traduire le site à l'avenir ou de mettre à jour les tarifs de Wave rapidement. Utilisez impérativement le dossier `src/data/`.

❌ **Multiplier les états globaux ou l'injection de dépendances pour des cas simples**
*   *Pourquoi ?* Préférer la transmission classique de props de haut en bas (Top-Down) et la remontée d'événements (`emit`) de bas en haut. Cela simplifie la traçabilité des bugs.

❌ **Utiliser des hacks pour masquer les erreurs de types ou de styles**
*   *Pourquoi ?* Contourner le système de templates Vue ou appliquer des sélecteurs CSS ultra-spécifiques brise l'esprit de modularité. Vos styles doivent être confinés au composant ou déclarés proprement dans `src/styles.css`.

---

## 9. Installation et démarrage local

Si vous venez de récupérer le dépôt et que vous souhaitez lancer le projet localement :

### 1. Prérequis
Assurez-vous d'avoir installé **Node.js** (v18 ou supérieur recommandé) et **npm**.

### 2. Procédure de démarrage
```bash
# 1. Installer toutes les dépendances du projet
npm install

# 2. Lancer le serveur de développement local avec Vite
npm run dev

# 3. Ouvrir votre navigateur sur l'adresse indiquée (ex: http://localhost:5173/)
# Note : L'application vous redirigera automatiquement vers la route par défaut "/fr/"
```

### 3. Build pour la Production
Pour générer les fichiers optimisés et prêts pour le déploiement dans le dossier `dist/` :
```bash
npm run build
```

---

## 10. Conclusion

L'utilisation combinée de **Vue 3**, de **Tailwind CSS** et de la méthodologie **Atomic Design** confère au projet **Wave Clone** une structure d'une grande clarté. En suivant rigoureusement cette organisation hiérarchique, vous garantissez que le code restera propre, évolutif et facile à appréhender pour les futurs développeurs qui rejoindront l'équipe. 

*Bon code sur Wave Clone !* 🚀
