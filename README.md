# Wave Clone - Vue 3 & Tailwind CSS

Une reproduction fidèle du site web de **Wave**, une entreprise de services financiers mobiles. Ce projet a été conçu pour démontrer l'utilisation de **Vue 3**, **Vite**, et **Tailwind CSS** dans la création d'interfaces modernes, réactives et performantes.

## 🚀 Fonctionnalités

- **Responsive Design** : Entièrement adaptatif pour mobiles, tablettes et ordinateurs.
- **Atomic Design** : Structure de composants organisée en Atomes, Molécules et Organismes pour une meilleure maintenabilité.
- **Multipage** : Navigation fluide entre les pages personnelles et professionnelles via Vue Router.
- **Branding Wave** : Utilisation des couleurs, polices (GT Walsheim) et patterns officiels de Wave.

## 🛠️ Technologies utilisées

- [Vue 3](https://vuejs.org/) (Composition API)
- [Vite](https://vitejs.dev/) - Outil de build ultra-rapide
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [Vue Router](https://router.vuejs.org/) - Gestion de la navigation
- [GitHub Actions](https://github.com/features/actions) - Déploiement automatique sur GitHub Pages

## 📁 Structure du Projet

```text
src/
├── assets/             # Images, polices et patterns
├── components/         # Composants Atomic Design
│   ├── atoms/          # Boutons, logos, badges
│   ├── molecules/      # Cartes, barres de navigation
│   └── organisms/      # Sections entières (Hero, Footer, Features)
├── data/               # Données statiques pour les pages
├── pages/              # Vues principales (PersonalPage, BusinessPage)
├── App.vue             # Point d'entrée principal
└── main.js             # Initialisation de l'application
```

## 💻 Installation et démarrage local

1.  **Cloner le dépôt** :
    ```bash
    git clone https://github.com/RochArmel/wave_clone.git
    cd wave_clone
    ```

2.  **Installer les dépendances** :
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```
    L'application sera accessible sur [http://localhost:5173/](http://localhost:5173/) (qui redirige automatiquement vers `/fr/`).

## 📦 Construction pour la production

Pour générer les fichiers optimisés dans le dossier `dist/` :
```bash
npm run build
```

## 🌐 Déploiement

Le projet est configuré pour être déployé automatiquement sur **GitHub Pages** via une GitHub Action.

Pour plus de détails sur le déploiement, consultez le fichier [DEPLOIEMENT-GITHUB-PAGES.md](./DEPLOIEMENT-GITHUB-PAGES.md).

## 📄 Licence

Ce projet est réalisé à des fins d'apprentissage et de démonstration. Tous les logos et marques appartiennent à **Wave**.
