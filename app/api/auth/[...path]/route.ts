// app/api/auth/[...path]/route.ts
import { auth } from "@/lib/auth/auth";

// Exporting standard HTTP methods needed by the Neon Auth engine
export const { GET, POST } = auth.handler();
