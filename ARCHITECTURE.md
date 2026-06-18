# 🏗️ Architecture Atomic Design - Wave Clone

Ce document explique l'organisation du projet et la méthodologie **Atomic Design** utilisée pour construire l'interface utilisateur de ce clone de Wave.

---

## 💡 Qu'est-ce que l'Atomic Design ?

L'Atomic Design est une méthodologie créée par Brad Frost qui consiste à concevoir des interfaces en partant des éléments les plus simples pour aboutir à des structures complexes. Elle se divise en 5 niveaux, dont 4 sont utilisés techniquement dans nos composants Vue :

1.  **Atomes** (Composants de base)
2.  **Molécules** (Groupes d'atomes)
3.  **Organismes** (Sections complexes)
4.  **Templates / Pages** (Contextualisation)

---

## 🧪 1. Les Atomes (`src/components/atoms`)

Les atomes sont les briques fondamentales. Ils ne peuvent pas être divisés sans perdre leur fonction. Ils sont génériques et réutilisables.

*   **AppLogo.vue** : Le logo officiel de Wave.
*   **Button.vue** : Composant bouton stylisé avec variantes (couleur, taille).
*   **IconCard.vue** : Petit conteneur d'icône pour les listes de fonctionnalités.
*   **LanguageButton.vue** : Sélecteur de langue simple.
*   **PartnerLogo.vue** : Affichage des logos des partenaires (Total, Jumia, etc.).
*   **StoreBadge.vue** : Boutons de téléchargement App Store / Google Play.

---

## 🧬 2. Les Molécules (`src/components/molecules`)

Les molécules sont des groupes d'atomes liés ensemble. Elles forment une unité fonctionnelle simple.

*   **Navbar.vue** : Regroupe le logo et les liens de navigation.
*   **NoticeBanner.vue** : Bannière d'information utilisant des textes et des icônes.
*   **FooterColumn.vue** : Colonne de liens organisée pour le bas de page.
*   **TestimonialCard.vue** : Combine une image, un texte et un nom pour un témoignage.
*   **BusinessIconTitle.vue** : Associe une icône spécifique à un titre business.
*   **FeatureCardGrid.vue** : Une grille organisée de cartes d'icônes.

---

## 🦠 3. Les Organismes (`src/components/organisms`)

Les organismes sont des sections plus complexes de l'interface composées de molécules et/ou d'atomes. Ils forment des blocs distincts de la page.

*   **PersonalHero.vue / BusinessHero.vue** : Les sections d'en-tête principales avec visuels et appels à l'action.
*   **SiteHeader.vue / SiteFooter.vue** : Les structures globales de haut et bas de page.
*   **Testimonials.vue** : Section complète gérant le défilement ou l'affichage des témoignages.
*   **PartnerStats.vue** : Section affichant les statistiques et les logos des partenaires.
*   **BusinessFeatureSection.vue** : Présentation détaillée d'une fonctionnalité métier.

---

## 📄 4. Les Pages (`src/pages`)

Les pages sont les instances finales où l'on injecte les données réelles dans les organismes pour former une vue complète.

*   **PersonalPage.vue** : Assemble les organismes pour la vue utilisateur particulier.
*   **BusinessPage.vue** : Assemble les organismes pour la vue utilisateur entreprise.

---

## 🚀 Avantages de cette architecture

1.  **Réutilisabilité** : Les atomes comme `Button.vue` sont utilisés partout dans le projet.
2.  **Maintenance facilitée** : Modifier le style d'un bouton à un seul endroit le met à jour sur toutes les pages.
3.  **Clarté** : Un nouveau développeur sait immédiatement où chercher ou ajouter un composant selon sa complexité.
4.  **Évolutivité** : Il est facile de créer de nouvelles pages en assemblant des organismes existants.
