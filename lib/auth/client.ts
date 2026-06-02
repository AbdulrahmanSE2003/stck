// lib/auth/client.ts
"use client";

import { createAuthClient } from "@neondatabase/auth/next";

// Exposes standard client triggers like signIn.email() and signOut() across form scopes
export const authClient = createAuthClient();
