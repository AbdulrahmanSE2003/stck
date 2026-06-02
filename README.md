# STCK — B2B Inventory Management System

A high-performance, ultra-minimalist B2B inventory control dashboard and warehouse management platform built with Next.js 16, Tailwind CSS 4, Prisma ORM, and Neon PostgreSQL.

## Features

- **Interactive Core Dashboard**: High-level statistical overviews of total SKU volume, inventory valuation, active categories, and live low-stock visual meters.
- **Advanced Inventory Matrix**: Searchable, paginated, and filterable data tables for products with explicit fields for warehouse bin location, unit pricing, suppliers, and customizable low-stock markers (`lowStockAt`).
- **Full Bidirectional i18n**: Native LTR (English) and RTL (Arabic) internationalization powered by `next-intl` utilizing pure CSS logical properties for layout adaptation.
- **Enterprise Authentication**: Managed user profiles, password rotation, and multi-tenant isolation via Stack Auth integrated directly with Neon Postgres.
- **Serverless Performance**: Ultra-fast edge queries and server actions driven by a serverless PostgreSQL layer.

## Architecture & Structural Hierarchy

This project enforces a **Feature-Driven Design (FDD)** layout pattern directly in the root directory to maximize modularity and isolate application logic:

```text
├── app/                  # Dynamic Routing locale wrapper [lang], Next.js layouts & entry points
├── features/             # Modular bounded contexts (dashboard, inventory, settings)
├── components/           # Atomic global UI primitives
├── lib/                  # Shared integrations (Prisma client instance, validations, utilities)
├── i18n/                 # Translation middleware configurations and request context
├── messages/             # Static translation dictionaries (ar.json, en.json)
└── prisma/               # Database structural schemas and seed files
```
