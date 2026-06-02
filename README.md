# STCK — B2B Inventory Management System

A high-performance, ultra-minimalist B2B inventory control dashboard and warehouse management platform built with **Next.js 16**, **Tailwind CSS 4**, **Prisma ORM**, and **Neon PostgreSQL**.

---

## Features

- **Interactive Core Dashboard** — High-level statistical overviews of total SKU volume, inventory valuation, active categories, and live low-stock visual meters.
- **Advanced Inventory Matrix** — Searchable, paginated, and filterable data tables for products with explicit fields for warehouse bin location, unit pricing, suppliers, and customizable low-stock markers (`lowStockAt`).
- **Full Bidirectional i18n** — Native LTR (English) and RTL (Arabic) internationalization powered by `next-intl` utilizing pure CSS logical properties for layout adaptation.
- **Enterprise Authentication** — Managed user profiles, password rotation, and multi-tenant isolation via Stack Auth integrated directly with Neon Postgres.
- **Serverless Performance** — Ultra-fast edge queries and server actions driven by a serverless PostgreSQL layer.

---

## Tech Stack

| Layer        | Technology                             |
| ------------ | -------------------------------------- |
| Framework    | Next.js 16 (App Router)                |
| Styling      | Tailwind CSS v4.0 (Logical Properties) |
| Database     | PostgreSQL via Neon Serverless         |
| ORM          | Prisma Client v6+                      |
| Localization | next-intl                              |
| Auth         | Stack Auth                             |

---

## Architecture

This project enforces a **Feature-Driven Design (FDD)** layout pattern to maximize modularity and isolate application logic:

```
├── app/           # Dynamic routing locale wrapper [lang], Next.js layouts & entry points
├── features/      # Modular bounded contexts (dashboard, inventory, settings)
├── components/    # Atomic global UI primitives
├── lib/           # Shared integrations (Prisma client, validations, utilities)
├── i18n/          # Translation middleware configurations and request context
├── messages/      # Static translation dictionaries (ar.json, en.json)
└── prisma/        # Database schemas and seed files
```

---

## Getting Started

### Prerequisites

Ensure you have **Node.js** and a package manager (e.g., `pnpm`) installed.

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/stck.git
cd stck
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Configure environment variables** — create a `.env` file at the root:

```env
# Neon PostgreSQL Connection String
DATABASE_URL="postgresql://user:password@neon-host/stck?sslmode=require"

# Stack Auth Keys
NEXT_PUBLIC_STACK_PROJECT_ID="your_project_id"
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY="your_client_key"
STACK_SECRET_SERVER_KEY="your_secret_key"
```

4. **Run database migrations**

```bash
npx prisma migrate dev --name init
```

5. **Seed the database** _(optional)_

```bash
npx prisma db seed
```

6. **Start the development server**

```bash
pnpm dev
```

---

## Development Guidelines

### 1. English-Only Codebase

All source files, configurations, migration scripts, and inline comments must be authored strictly in English.

### 2. RTL/LTR Layout Rules

Never use hardcoded physical directional classes inside `features/` or `components/`. Use Tailwind 4 logical properties instead:

| ❌ Avoid                   | ✅ Use                    |
| -------------------------- | ------------------------- |
| `ml-*` / `mr-*`            | `ms-*` / `me-*`           |
| `pl-*` / `pr-*`            | `ps-*` / `pe-*`           |
| `text-left` / `text-right` | `text-start` / `text-end` |
| `left-*` / `right-*`       | `start-*` / `end-*`       |

---

## Git Workflow

This project follows **Atomic Commits** — each logical step must be isolated into its own clean, self-contained commit.

### Commit Format

```
type(scope): description
```

### Allowed Types

| Type    | Usage                                                  |
| ------- | ------------------------------------------------------ |
| `chore` | Config, env setup, package installs, boilerplate       |
| `feat`  | New features, components, routes, server actions       |
| `fix`   | Bug fixes, TypeScript errors, layout regressions       |
| `style` | Visual polish, Tailwind tweaks with zero logic changes |

### Grammar Rules

- Use imperative mood — `add` not `added`, `fix` not `fixes`
- Do not capitalize the first letter of the description
- Do not end the message with a period
