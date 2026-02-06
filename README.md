# Astro Law Firm Template

A premium, professional law firm landing page template built with **Astro**, **React**, and **CSS Modules**. No Tailwind — just clean, custom CSS.

![Law Firm Template](https://via.placeholder.com/1200x630/1a2744/c9a962?text=Law+Firm+Template)

## ✨ Features

- 🏛️ **Professional Design** — Navy, gold & cream palette with sophisticated typography
- ⚡ **Astro 5** — Fast, SEO-friendly static site generation
- ⚛️ **React Components** — Interactive elements with client-side hydration
- 🎨 **CSS Modules** — Scoped styling, no class conflicts, zero dependencies
- 📱 **Fully Responsive** — Mobile-first design that looks great everywhere
- ♿ **Accessible** — Semantic HTML, ARIA labels, keyboard navigation
- 🌙 **Dark Theme** — Elegant dark primary with warm cream contrast

## 📦 What's Included

- **Navigation** — Sticky header with mobile menu
- **Hero Section** — Impressive stats, CTAs, trust badges
- **Practice Areas** — 4 detailed service cards
- **About/Firm Section** — Values, imagery, accolades
- **Testimonials** — Case results & client reviews
- **Contact Form** — Full consultation request form
- **Footer** — Links, social, legal disclaimers

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Colors

Edit `src/styles/variables.css`:

```css
:root {
  --color-primary: #1a2744;      /* Deep Navy */
  --color-accent: #c9a962;       /* Gold */
  --color-surface: #faf9f7;      /* Warm Cream */
}
```

### Fonts

Using Google Fonts:
- **Display:** Cormorant Garamond (serif, elegant)
- **Body:** Inter (sans-serif, readable)

Change in `src/layouts/Layout.astro`.

### Content

1. Update firm name in `Navigation.tsx` and `Footer.tsx`
2. Replace practice areas in `Services.tsx`
3. Customize contact info in `Contact.tsx`
4. Add real testimonials in `Testimonials.tsx`

## 📁 Project Structure

```
src/
├── components/
│   ├── About/
│   │   ├── About.tsx
│   │   └── About.module.css
│   ├── Contact/
│   ├── Footer/
│   ├── Hero/
│   ├── Navigation/
│   ├── Services/
│   ├── Testimonials/
│   └── ui/
│       └── Button/
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    ├── global.css
    └── variables.css
```

## 🔧 Tech Stack

- **Astro 5** — Build framework
- **React 19** — UI components
- **TypeScript** — Type safety
- **CSS Modules** — Scoped styles
- **CSS Custom Properties** — Design tokens

## 📄 License

MIT License — use for personal and commercial projects.

## 🙋 Support

Questions? Issues? Open a GitHub issue or contact the author.

---

**Built with ❤️ for law firms that demand excellence.**
