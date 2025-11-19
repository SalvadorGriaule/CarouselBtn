# 🎞️ AnimeJS Auto-Nav Carousel  
Micro-lib **vanilla** qui transforme n’importe quel `overflow-x: auto` horizontal en **carousel auto-avancé** avec barres de progression cliquables – 0 dépendance runtime (hors anime.js).

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![npm](https://img.shields.io/npm/v/@salvadorgriaule/animejs-carousel-nav?color=%23ff0066)

---

## ✨ 30 secondes de fun
- Barre de prog **animée** (3,4 s) => slide suivant  
- Clic sur une barre => va directement à la slide + restart timer  
- **Responsive** : recentrage automatique au resize  
- **Léger** : 1 fichier, < 2 kB gzippé  
- **TypeScript** fourni

---

## 📦 Installation

```bash
npm i @salvadorgriaule/animejs-carousel-nav
# ou
pnpm add @salvadorgriaule/animejs-carousel-nav
```

---

## 🚀 Usage

```html
<div class="carousel" id="myCarousel">
  <div class="slide">1</div>
  <div class="slide">2</div>
  <div class="slide">3</div>
</div>

<div id="nav"></div>

<script type="module">
  import { initNav } from "@salvadorgriaule/animejs-carousel-nav";

  const carousel = document.querySelector("#myCarousel");
  const target   = document.querySelector("#nav");

  initNav(target, carousel);
</script>
```

**CSS minimal requis** :
```css
.carousel{ display:flex; overflow-x:auto; scroll-snap-type:x mandatory; }
.slide   { flex:0 0 100%; scroll-snap-align:start; }
```

---

## 🔧 API

| Fonction | Signature | Description |
|----------|-----------|-------------|
| `initNav` | `(target: HTMLElement, carousel: HTMLElement) => void` | Crée la barre de prog + lance l’auto-play |
| `toScrollClick` | `(pos: number, carousel: HTMLElement) => void` | Programme un scroll vers une slide (si vous voulez vos propres boutons) |

---

## 🎨 Personnalisation

Les barres sont générées avec les classes :
```css
.btnCar                  /* contenant */
.btnCar > div             /* barre de progression */
```

**Exemple** :
```css
.btnCar{ border-radius:4px; overflow:hidden; }
.btnCar > div{ background:#ff0066; }
```

---

## 📁 Structure du repo

```
src/
├── carouselNav.ts   # ce fichier
├── breakPoint.ts    # helper resize
└── index.ts         # export { initNav, toScrollClick }
```

---

## 🛠️ Développement

```bash
git clone https://github.com/SalvadorGriaule/AnimeJS-Carousel-Nav.git
cd AnimeJS-Carousel-Nav
pnpm i
pnpm dev        # lance la démo Vite
```

---

## 📝 Licence

MIT – copiez, recadrez, oubliez les royalties.

