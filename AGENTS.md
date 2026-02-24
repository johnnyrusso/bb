# Repository Guidelines

## Project Structure & Module Organization

- `app/` contains the Next.js App Router entry points (`layout.tsx`, `page.tsx`) and global styles (`globals.css`).
- `components/` holds UI and section components used by pages.
- `hooks/` and `lib/` store reusable hooks and utilities.
- `public/` contains static assets served at the site root.
- `styles/` contains shared styling assets (Tailwind and CSS utilities).
- `scripts/` includes small maintenance scripts (e.g., git helpers).
- `.next/` is build output and should not be edited directly.

## Build, Test, and Development Commands

This repo uses `pnpm` (see `package.json`).

- `pnpm dev`: run the Next.js dev server with webpack.
- `pnpm build`: create a production build.
- `pnpm start`: run the production server from `.next/`.
- `pnpm lint`: run ESLint across the repo.
- `pnpm typecheck`: run TypeScript type checking only.

## Coding Style & Naming Conventions

- Language: TypeScript + React (Next.js 16 App Router).
- Indentation: 2 spaces; keep semicolons as shown in existing files.
- Imports use the `@/` alias for root-relative paths (see `tsconfig.json`).
- Components are `PascalCase`, hooks are `useCamelCase`, CSS classes are Tailwind utility-first.
- Formatting: no Prettier config is present; match existing file style.

## Testing Guidelines

There is no dedicated test framework or test directory configured yet.

- If adding tests, introduce the framework in `package.json` and document how to run them.
- Prefer colocating tests near the module or under a new `tests/` directory (pick one and be consistent).

## Commit & Pull Request Guidelines

- Commit messages follow Conventional Commits where possible (e.g., `feat: ...`, `fix: ...`).
- PRs should include: a clear summary, linked issues (if any), and screenshots for UI changes.
- Keep PRs focused; large UI refactors should be broken into smaller, reviewable chunks.

## Configuration Notes

- Tailwind is configured in `tailwind.config.ts` with PostCSS in `postcss.config.mjs`.
- Add environment variables in `.env.local` when needed and document any required keys in this file.
