# Modèle d'architecture 

Ce document définit l'architecture de référence utilisée dans ce projet  Il sert de **modèle à suivre pour les futurs développements**.

---

## Objectif du modèle

- **Cohérence** : structure identique entre projets pour faciliter la prise en main
- **Scalabilité** : organisation qui scale avec la croissance du projet
- **Maintenabilité** : conventions claires pour les développeurs actuels et futurs



**Règle** : Alias `@/` → `./src/` dans `tsconfig.json` et `vite.config.ts`

---

## 2. Structure des dossiers (obligatoire)

```
src/
├── main.tsx              # Point d'entrée (createRoot, providers)
├── App.tsx               # Routes principales
├── i18n.ts               # Traductions (si multilingue)
├── index.css             # Tailwind + variables
│
├── pages/                # 1 page = 1 route
├── layouts/              # Header, Footer, MainLayout
├── components/
│   ├── sections/         # Sections par domaine (Home/, About/, etc.)
│   ├── ui/               # Primitives UI réutilisables
│   └── [composants partagés à la racine]
├── assets/               # Images, logos
└── styles/               # globals.css, variables
```

### Règles de placement

| Dossier | Contenu | Règle |
|---------|---------|-------|
| `pages/` | Une page = une route | Assemble des sections, pas de logique métier complexe |
| `components/sections/` | Blocs par domaine | Organiser par feature : `Home/`, `About/`, `Contact/` |
| `components/` (racine) | Composants partagés | PageHero, SEO, LanguageWrapper, etc. |
| `components/ui/` | Primitives UI | Button, Card, Input, etc. — réutilisables partout |
| `layouts/` | Structure commune | MainLayout = Header + Outlet + Footer |

---

## 3. Conventions de nommage

| Type | Convention | Exemple |
|------|------------|---------|
| Pages | PascalCase, singulier | `Home.tsx`, `About.tsx` |
| Sections | PascalCase + suffixe `Section` | `TeamSection.tsx`, `HeroSection.tsx` |
| Composants UI | camelCase pour les fichiers | `button.tsx`, `dropdown-menu.tsx` |
| Composants exportés | PascalCase | `export const TeamSection` |

---

## 4. Flux d'application (avec i18n)

```
App (Routes)
  └── LanguageWrapper (valide :lng, sync i18n)
        └── MainLayout (Header + Outlet + Footer)
              └── Page
                    └── Sections
```

**Routes multilingues** : `/:lng/...` (ex: `/fr/about`, `/en/contact`)

---

## 5. Syntaxe des composants (obligatoire)

### Structure de base

```tsx
export const NomComposant: React.FC = () => {
  return <section>...</section>;
};
```

- **Export** : toujours `export const`, jamais `export default`
- **Typage** : `React.FC` ou `React.FC<Props>`

### Props

```tsx
interface Props {
  title: string;
  onAction?: () => void;
}

export const Composant: React.FC<Props> = ({ title, onAction }) => { ... };
```

### Sous-composants

- Définir dans le même fichier, **non exporté**
- Utiliser `const` (pas `export`)

---

## 6. Imports

```tsx
// Alias @/ pour tout ce qui est dans src/
import { Button } from "@/components/ui/button";
import img from "@/assets/logo.png";

// Chemins relatifs pour les composants proches
import { TeamSection } from "../components/sections/About/TeamSection";
```

---

## 7. Checklist nouveau projet

- [ ] Créer la structure `src/` selon l'arborescence
- [ ] Configurer l'alias `@/` dans `tsconfig.json` et `vite.config.ts`
- [ ] Mettre en place `MainLayout` avec Header, Outlet, Footer
- [ ] Si multilingue : `LanguageWrapper` + `i18n.ts` + routes `/:lng/...`
- [ ] Créer `components/ui/utils.ts` avec la fonction `cn()` (clsx + tailwind-merge)
- [ ] Suivre les conventions de nommage
- [ ] Utiliser `export const` pour tous les composants

---

## 8. Référence complète

Pour les détails complets (typage des props, patterns JSX, hooks, animations, etc.), consulter **[ARCHITECTURE.md](./ARCHITECTURE.md)** qui documente l'implémentation de ce modèle dans le projet actuel.

---

*Modèle dérivé de l'architecture IBS Website — à réutiliser comme base pour les futurs projets React/Vite.*
