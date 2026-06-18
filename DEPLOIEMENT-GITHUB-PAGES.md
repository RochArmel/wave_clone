# 🚀 Déployer sur GitHub Pages — Guide complet

## 📌 Deux types de sites GitHub Pages

| Type | URL obtenue | Quand l'utiliser |
|------|-------------|-----------------|
| **Site utilisateur** | `https://<user>.github.io/` | 1 seul repo nommé `<user>.github.io` |
| **Site de projet** | `https://<user>.github.io/<repo>/` | Tous les autres repos (illimité) |

> **Résumé** : tu peux avoir **autant de sites que de repos publics**.
> Chaque repo = une URL `https://meljoestein.github.io/<nom-du-repo>/`

---

## ✅ CAS 1 — Site HTML statique (fichier unique)

### Exemple : `demo-wave` (guide standalone)

#### Structure du repo
```
demo-wave/
├── index.html      ← fichier principal
└── .nojekyll       ← désactive Jekyll (obligatoire pour Vite/Vue)
```

#### Étapes
```bash
# 1. Préparer les fichiers
cd mon-projet/
mv "mon-fichier.html" index.html
touch .nojekyll

# 2. Initialiser git
git init
git branch -M main

# 3. Configurer l'identité git (1 seule fois)
git config user.name "Ton Nom"
git config user.email "id+login@users.noreply.github.com"

# 4. Créer le repo GitHub et pousser
gh repo create nom-du-repo --public --source=. --remote=origin
git add .
git commit -m "Initial deploy"
git push -u origin main

# 5. Activer GitHub Pages (branche main, racine /)
gh api -X POST "repos/<user>/nom-du-repo/pages" \
  -f "source[branch]=main" \
  -f "source[path]=/"
```

#### Résultat
✅ `https://meljoestein.github.io/nom-du-repo/`

---

## ✅ CAS 2 — Site Vue 3 / Vite (build requis)

### Exemple : `wave-clone`

#### ⚠️ Point critique : le `base` dans `vite.config.js`

Vite génère par défaut des chemins absolus (`/assets/...`).
Sur GitHub Pages, les fichiers sont sous `/nom-du-repo/assets/...`.
**Sans `base`, les assets ne se chargent pas → page blanche.**

```js
// vite.config.js
export default defineConfig({
  base: '/nom-du-repo/',   // ← OBLIGATOIRE pour GitHub Pages
  plugins: [vue()],
  // ...
})
```

#### Structure du repo
```
wave-clone/
├── src/
├── public/
├── index.html
├── package.json
├── package-lock.json       ← obligatoire pour le workflow CI
├── vite.config.js          ← avec base: '/wave-clone/'
└── .github/
    └── workflows/
        └── deploy-pages.yml
```

#### Fichier workflow `.github/workflows/deploy-pages.yml`
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

#### Étapes
```bash
# 1. Configurer vite.config.js (ajouter base)
# 2. Générer le package-lock.json
npm install --package-lock-only

# 3. Créer .github/workflows/deploy-pages.yml (voir ci-dessus)

# 4. Créer le repo et pousser
git init && git branch -M main
git config user.name "Ton Nom"
git config user.email "id+login@users.noreply.github.com"
gh repo create nom-du-repo --public --source=. --remote=origin
git add . && git commit -m "Initial deploy"
git push -u origin main

# 5. Activer Pages avec GitHub Actions comme source
gh api -X POST "repos/<user>/nom-du-repo/pages" -f build_type=workflow

# Le workflow se déclenche automatiquement au push
```

#### Résultat
✅ `https://meljoestein.github.io/nom-du-repo/`

---

## 🔄 Mettre à jour un site déjà déployé

### Site HTML statique
```bash
cd demo-wave/
# Remplacer index.html par la nouvelle version
cp nouveau-guide.html index.html
git add index.html
git commit -m "Mise à jour du guide"
git push origin main
# → Pages se met à jour automatiquement en 1-2 min
```

### Site Vue/Vite
```bash
cd wave-clone/
# Modifier le code source dans src/
git add .
git commit -m "Mise à jour"
git push origin main
# → GitHub Actions rebuild et redéploie automatiquement
```

---

## 🗂️ Déployer PLUSIEURS sites

Tu peux déployer **autant de repos que tu veux**, chacun avec sa propre URL :

```
meljoestein.github.io/demo-wave/        ← repo: demo-wave
meljoestein.github.io/wave-clone/       ← repo: wave-clone
meljoestein.github.io/autre-projet/     ← repo: autre-projet
```

Chaque repo suit le même processus. Seule contrainte :
- Site HTML → `base` GitHub Pages sur branche `main`
- Site Vite → `base: '/nom-du-repo/'` dans `vite.config.js` + workflow Actions

---

## 🧩 Checklist rapide avant déploiement

| Étape | HTML statique | Vue/Vite |
|-------|:---:|:---:|
| `index.html` à la racine | ✅ | ✅ (généré par Vite) |
| `.nojekyll` à la racine | ✅ | ✅ (dans `public/`) |
| `base: '/repo/'` dans vite.config | — | ✅ |
| `package-lock.json` présent | — | ✅ |
| `.github/workflows/deploy-pages.yml` | — | ✅ |
| Pages activé sur le repo | ✅ | ✅ |

---

## 🔧 Commandes utiles `gh` CLI

```bash
# Voir l'URL Pages d'un repo
gh api "repos/<user>/<repo>/pages" -q .html_url

# Vérifier le statut du dernier workflow
gh run list --repo <user>/<repo> --limit 1

# Voir les logs d'un workflow en échec
gh run view <run-id> --repo <user>/<repo> --log | tail -50

# Activer Pages (HTML statique)
gh api -X POST "repos/<user>/<repo>/pages" \
  -f "source[branch]=main" -f "source[path]=/"

# Activer Pages (GitHub Actions)
gh api -X POST "repos/<user>/<repo>/pages" -f build_type=workflow

# Déclencher manuellement un workflow
gh workflow run "Deploy to GitHub Pages" --repo <user>/<repo>
```

---

## ⚠️ Erreurs fréquentes et solutions

| Erreur | Cause | Solution |
|--------|-------|----------|
| Page blanche (Vue) | `base` manquant dans vite.config | Ajouter `base: '/nom-repo/'` |
| Workflow échoue | `package-lock.json` absent | `npm install --package-lock-only` |
| 404 sur le site | Pages pas activé | `gh api -X POST ...` |
| Assets 404 | Mauvais `base` | Vérifier que `base` = `/nom-exact-du-repo/` |
| Workflow introuvable | Fichier yml absent du push | Vérifier `.github/workflows/` dans le repo |
