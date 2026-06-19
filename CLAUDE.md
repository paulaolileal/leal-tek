# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# LealTEK Web — CLAUDE.md

Site estático portfolio/empresa da Paula Leal. Deploy em `lealtek.com` via DigitalOcean App Platform.

## Commands
```bash
npm run dev       # dev server em localhost:4321
npm run build     # gera dist/ (output estático)
npm run preview   # preview local do dist/
```

## Tech Stack
- **Astro v5** (SSG, `output: static`)
- **Vanilla CSS + CSS Custom Properties** — sem Tailwind
- **TypeScript** (strict)
- `@astrojs/sitemap` para SEO

## Project Structure
```
src/
  components/
    layout/   BaseLayout, Header, Footer
    ui/       Button, Badge, TechBadge
    sections/ ProductCard, GameCard, BlogPostCard
    pages/    *Content.astro (conteúdo completo de cada página — ver i18n abaixo)
  content/
    blog/     *.md  (posts do blog)
    config.ts (schema da Content Collection)
  data/
    products.ts  (MindCircle, Myth Ecosystem — interfaces Product, ProductFeature, mythPackages)
    labs.ts      (Syncr, Buddy, Deca, SheetBudget — interface LabProject)
    games.ts     (Impostor, Stop! Adedanha — interface Game)
  i18n/
    translations.ts  (strings PT/EN — type Locale = 'pt' | 'en')
    utils.ts         (getTranslations(locale) helper)
  utils/
    techIcons.ts  (getTechIconClass(tech) → Devicons CSS class string or null)
  pages/
    home, about, now, contact, labs, games  (thin wrappers → *Content)
    products/index, mindcircle, myth        (thin wrappers → *Content)
    blog/index, blog/[slug]
    en/   (espelho de todas as páginas acima, exceto blog/[slug])
  styles/
    global.css   (CSS vars, tipografia, utilitários)
```

## i18n (PT-BR / English)

- **Roteamento**: Astro v5 built-in i18n — PT é o locale padrão (sem prefixo), EN em `/en/...`
- **Config** (`astro.config.mjs`): `i18n.defaultLocale: 'pt'`, `prefixDefaultLocale: false`
- **Detecção de locale**: `Astro.currentLocale` em todos os componentes — sem prop-drilling
- **Traduções**: `src/i18n/translations.ts` — objeto com chaves `pt` e `en`
- **Blog**: independente de idioma — posts só em `/blog/[slug]`, com `alternatePath="/en/blog"` apontando para o índice EN (não há mirror EN por slug)
- **Padrão thin wrapper**: cada página PT e EN importa o `*Content.astro` correspondente em `src/components/pages/`; o componente auto-detecta o locale
- **Links internos**: usar `const base = locale === 'en' ? '/en' : ''` antes de links como `${base}/contact`

### Adicionar nova string traduzida
1. Adicionar a chave em `src/i18n/translations.ts` nos objetos `pt` e `en`
2. Usar no componente: `const t = getTranslations(Astro.currentLocale); t.secao.chave`

### labsContent em translations
O campo `translations.*.labsContent` é um objeto keyed por `lab.id` com `{ tagline }`, usado para sobrescrever o tagline dos labs na página home com texto traduzido. O tipo é `Record<string, { tagline: string }>`.

## Design System

### CSS Custom Properties (global.css)
- **Brand**: `--gold-primary: #C8973A`, `--gold-light: #E0B05A`, `--gold-dim: #8A651F`
- **Backgrounds**: `--bg: #0C0D0F`, `--bg-surface: #111316`, `--bg-card: #161820`, `--bg-card-hover: #1C1F28`
- **Borders**: `--border: #1E2229`, `--border-accent: #2A2E3A`
- **Text**: `--text-primary: #EAE8E4`, `--text-secondary: #B0ADA8`, `--text-muted: #7A7874`
- **Fonts**: `--font-display` (Barlow Condensed 700/800), `--font-body` (Mulish), `--font-mono` (JetBrains Mono)
- **Spacing**: `--space-xs` a `--space-4xl` (0.25rem → 6rem)
- **Misc**: `--radius-sm/md/lg`, `--transition: 200ms ease`, `--header-height: 64px`, `--max-width: 1200px`
- Tema dark (default) + light via `data-theme` no `<html>`, salvo em `localStorage('lealtek-theme')`

### Utility classes (global.css)
- `.container` — max-width 1200px, centrado com padding horizontal
- `.section` — `padding-block: var(--space-4xl)`, `.section-sm` usa `--space-3xl`
- `.section-label` — texto uppercase monospace dourado (usado antes de headings de seção)
- `.gold-line` — linha decorativa dourada 48px × 2px (usada entre `.section-label` e o `<h2>`)
- `.gold` — aplica `color: var(--gold-primary)`
- `.reveal` — elemento começa invisível (`opacity: 0`, `translateY(24px)`) e anima para visível ao entrar no viewport; `BaseLayout` registra um `IntersectionObserver` que adiciona `.visible` à classe; adicionar `.reveal-delay-1` a `.reveal-delay-4` para staggers

### Padrão de cabeçalho de seção
```astro
<span class="section-label">Label</span>
<span class="gold-line"></span>
<h2>Heading</h2>
<p class="section-description">...</p>
```

## BaseLayout Props
```typescript
interface Props {
  title: string;
  description?: string;
  image?: string;            // OG image, default '/images/og-default.png'
  alternatePath?: string;    // override do caminho alternativo calculado automaticamente
  showLangSwitcher?: boolean; // default true
}
```
O `alternatePath` calculado inverte `/en/` no pathname. Para páginas sem mirror EN (ex: blog post), passar `alternatePath="/en/blog"` explicitamente.

## TechBadge e techIcons
- `TechBadge` renderiza `<i class="devicon-...">` se `getTechIconClass(tech)` retornar um match, senão cai para texto simples
- `getTechIconClass` em `src/utils/techIcons.ts` mapeia strings de tech stack (case-insensitive) para classes do Devicons v2.16. Adicionar novos mapeamentos aqui quando usar techs não listadas

## Adding Content

### Novo post no blog
1. Criar `src/content/blog/meu-slug.md` com frontmatter:
```yaml
---
title: "Título do post"
date: 2026-06-18
excerpt: "Resumo curto para o card"
tags: [tag1, tag2]
linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:XXXX"
linkedinEmbedSrc: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:XXXX?collapsed=1"
featured: false
---
Conteúdo markdown aqui...
```
- `linkedinEmbedSrc` é opcional — se presente, renderiza um `<iframe>` do LinkedIn na página do post. Obter via "Incorporar post" no LinkedIn → copiar o atributo `src` do iframe.
- Se omitido, exibe card de fallback com link para o `linkedinUrl`.

### Novo produto/lab
- Editar `src/data/products.ts` ou `src/data/labs.ts` — tipagem TypeScript orienta os campos obrigatórios
- `Product.status`: `'active' | 'wip'`
- `LabProject.status`: `'active' | 'wip' | 'complete'`
- `Game` requer campos extras: `howToPlay: string[]`, `features: string[]`, `players: string`, `playTime: string`, `demoUrl: string` (obrigatório)

## Deploy (DigitalOcean)
- Build command: `npm run build`
- Output dir: `dist`
- Node version: 20+
- Domínio: `lealtek.com`
