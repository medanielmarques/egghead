# Egg Head (Saas Template)

### Libs/frameworks

- Next.js
- Tailwind
- tRPC
- Kysely
- Prisma (Only for handling the schema)
- Shadcn-ui
- Acertenity-ui
- Feather Icons
- Zustand

### Infra

- Supabase Auth
- Neon DB
- PostHog
- Highlight.io (optional)
- docker.compose file that runs an instance of Postgres (dev only), as well as a script to launch it

## How to use

### Run

```bash
pnpm create t3-app@latest
```

### T3 CLI

- Typescript
- Tailwind
- tRPC
- No Auth Provider
- No ORM
- No App Router

### Install the dependencies

```bash
pnpm add zustand @phosphor-icons/react @supabase/auth-helpers-nextjs @supabase/auth-helpers-react kysely kysely-neon nanoid class-variance-authority tailwindcss-animate posthog-js pg ws framer-motion clsx tailwind-merge @radix-ui/react-icons && pnpm add -D @trivago/prettier-plugin-sort-imports autoprefixer @types/pg @types/ws prettier-plugin-tailwindcss prisma prisma-kysely
```

### Create or Replace all the files in the new generated app with the files here

---

### In case of running Highlight.io:

- Install the deps
- Place the .env vars
- Uncomment the related code

```bash
pnpm add @highlight-run/next @highlight-run/node
```
