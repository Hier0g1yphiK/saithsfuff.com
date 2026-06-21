# Tech Stack

## Framework & Runtime
- **Next.js 14** (App Router) with React 18
- **TypeScript** (strict)
- Node.js runtime

## Styling
- **Tailwind CSS 3.4** with a custom theme in `tailwind.config.ts`
- PostCSS + Autoprefixer
- Dark mode via `class` strategy (toggled in localStorage)
- Custom utility classes defined in `app/globals.css` using `@layer`

## Database
- **PostgreSQL** via `pg` driver
- **Prisma ORM** (v7) with `@prisma/adapter-pg`
- Schema at `prisma/schema.prisma`

## Fonts
- **Fredoka** — display/heading font (`font-display`)
- **Nunito** — body font (`font-body`)
- Loaded via `next/font/google`

## Testing
- **Jest 30** with `jest-environment-jsdom`
- **React Testing Library** (`@testing-library/react`, `@testing-library/jest-dom`)
- Config: `jest.config.js` (uses `next/jest`)
- Setup file: `jest.setup.ts`

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run Next.js ESLint |
| `npm test` | Run Jest test suite |
| `npx prisma migrate dev` | Run database migrations |
| `npx prisma generate` | Regenerate Prisma client |
