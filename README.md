# Supernova Steel India Website

A production-grade industrial corporate website built with React, Vite, and Tailwind CSS.
Designed for a global steel supplier serving B2B markets.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **SEO**: React Helmet Async

## Project Structure

```bash
src/
├── components/
│   ├── layout/       # Header, Footer, Layout wrapper
│   └── shared/       # Hero, InquiryForm, SEO, etc.
├── data/
│   └── products.json # Centralized Product Data (CMS-like structure)
├── pages/            # Page components (Home, About, Products, etc.)
└── assets/           # Static assets
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Access the app at `http://localhost:5173`.

3. **Build for Production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` directory.

## Key Features

- **Dynamic Product Routing**: `/products/:slug` dynamically renders product pages from JSON data.
- **Enterprise Design**: Clean, industrial aesthetic using Tailwind customization.
- **Structured Data Layer**: `products.json` abstracts content for easy maintenance or CMS migration.
- **SEO Optimized**: Dynamic meta tags for every product page.
- **Lead Generation**: Integrated inquiry forms on every product page and contact page.

## Customization

- **Theme**: Edit `tailwind.config.js` to change primary colors (default: Slate & Sky blue).
- **Content**: Update `src/data/products.json` to modify product catalog without touching code.
