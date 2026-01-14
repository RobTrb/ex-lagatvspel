# Copilot Instructions for ex-lagatvspel

## Project Overview
**LagaTVSpel** is a Next.js 16 web application for gaming console and controller repair services. The project uses React 19, TypeScript, and CSS Modules for styling. React Compiler is enabled in `next.config.ts`.

## Architecture & Key Patterns

### File Structure
- **`src/app/`** - Next.js App Router with page-based routing
  - `layout.tsx` - Root layout with metadata, font configuration, and global styles
  - `page.tsx` - Homepage (currently template boilerplate)
  - Subdirectories (`inspiration/`, `kontakt/`, `priser/`, `tidsbokning/`) define route segments
  - **Note:** Each route segment should have its own `page.tsx`
- **`src/styles/`** - CSS Module files (`.module.css`) for component-scoped styling
  - `headerFooter.module.css` - Header/footer styling
  - `home.module.css` - Homepage styling
- **`src/components/`** - Reusable React components (currently empty; add shared components here)
- **`public/img/`** - Static assets and images

### Styling Convention
- Use **CSS Modules** exclusively for component styling (import as `styles` object)
- Example: `className={styles.main}` (see `src/app/page.tsx`)
- Global styles in `src/app/globals.css`
- Font variables from Google Fonts: `--font-geist-sans`, `--font-geist-mono`

### Module Path Alias
TypeScript is configured with `@/*` alias pointing to `src/`. Use for cleaner imports:
```typescript
import { Component } from "@/components/MyComponent";
import styles from "@/styles/home.module.css";
```

## Development Workflow

### Running the Application
```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint checks
```

### Build & Deployment
- **Next.js Version:** 16.1.1 with React 19
- **React Compiler:** Enabled (`reactCompiler: true`)
- Next.js handles TypeScript compilation automatically
- No manual build step needed for development

## Code Quality & Conventions

### ESLint Configuration
- Uses `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
- Run `npm run lint` to check code before commits

### TypeScript Settings
- Target: ES2017, strict mode enabled
- Module resolution: bundler (Next.js default)
- Isolated modules enabled for better performance
- Proper typing required for React components and props

### Metadata & SEO
Use `next/server` Metadata API in layout files:
```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "Description here",
};
```

## Page Creation Workflow

When adding new pages/routes:
1. Create directory in `src/app/` (e.g., `src/app/newpage/`)
2. Add `page.tsx` with default export React component
3. Optional: Add `layout.tsx` for route-specific layout
4. Create corresponding CSS Module in `src/styles/` if needed
5. Import CSS Module using `@/styles/` alias

## Integration Points
- **Images:** Use Next.js `Image` component with `width`, `height`, and `priority` props
- **Fonts:** Configure in root layout (currently using Geist from `next/font/google`)
- **Static files:** Place in `public/` directory, reference as `/filename.svg`

## Known Issues & Quirks
- Root `page.tsx` currently contains boilerplate template content - update when implementing actual homepage
- `components/` directory is empty - structure shared components there as features expand
