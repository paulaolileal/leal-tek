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
    ui/       Button, Badge
    sections/ ProductCard, GameCard, BlogPostCard
    pages/    *Content.astro (conteúdo completo de cada página — ver i18n abaixo)
  content/
    blog/     *.md  (posts do blog)
    config.ts (schema da Content Collection)
  data/
    products.ts  (MindCircle, Myth Ecosystem)
    labs.ts      (Syncr, Buddy, Deca, SheetBudget, BlipPayments)
    games.ts     (Impostor, Stop! Adedanha)
  i18n/
    translations.ts  (strings PT/EN — type Locale = 'pt' | 'en')
    utils.ts         (getTranslations(locale) helper)
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
- **Blog**: independente de idioma — posts só em `/blog/[slug]`, com `alternatePath="/en/blog"` apontando para o índice EN
- **Padrão thin wrapper**: cada página PT e EN importa o `*Content.astro` correspondente em `src/components/pages/`; o componente auto-detecta o locale
- **Links internos**: usar `const base = locale === 'en' ? '/en' : ''` antes de links como `${base}/contact`

### Adicionar nova string traduzida
1. Adicionar a chave em `src/i18n/translations.ts` nos objetos `pt` e `en`
2. Usar no componente: `const t = getTranslations(Astro.currentLocale); t.secao.chave`

## Design System
- **Gold**: `#C8973A` (`--gold-primary`)
- **Background dark**: `#0C0D0F` (`--bg`)
- **Surface dark**: `#111316` (`--bg-surface`)
- **Font display**: Barlow Condensed (700/800)
- **Font body**: Mulish (400/600)
- **Font mono**: JetBrains Mono
- Tema dark (default) + light via `data-theme` no `<html>`, salvo em `localStorage('lealtek-theme')`

## Adding Content

### Novo post no blog
1. Criar `src/content/blog/meu-slug.md` com frontmatter:
```yaml
---
title: "Título do post"
date: 2026-06-18
excerpt: "Resumo curto para o card"
tags: [tag1, tag2]
linkedinUrl: "https://www.linkedin.com/posts/paulaolileal_..."
featured: false
---
Conteúdo markdown aqui...
```
2. `npm run build` — o embed LinkedIn é buscado em build time

### Novo produto/lab
- Editar `src/data/products.ts` ou `src/data/labs.ts` — tipagem TypeScript orienta os campos obrigatórios

## Deploy (DigitalOcean)
- Build command: `npm run build`
- Output dir: `dist`
- Node version: 20+
- Domínio: `lealtek.com`
