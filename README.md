# Generic-Login-Template-Render

# DEV DEPLOY
----------
pnpm --filter server run prisma:validate
pnpm --filter server run prisma:generate
pnpm --filter server run prisma:migrate:dev
pnpm --filter server run prisma:seed
pnpm --filter server run dev:server:env

# One-shot dev setup (validate, generate, migrate, seed, start)
pnpm --filter server run dev:setup

# One-shot dev setup (no seed)
pnpm --filter server run dev:setup:noseed

# Start Client
pnpm --filter client dev
