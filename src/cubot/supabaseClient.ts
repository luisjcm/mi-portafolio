// src/cubot/supabaseClient.ts
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// QUÉ HACE: crea el cliente de Supabase solo si las variables de entorno existen.
// DÓNDE CAMBIAR: las claves van en .env.local (local) o en Vercel (producción).
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Si faltan las claves, exportamos null en vez de lanzar un error que rompa toda la web.
export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null;

if (!supabase) {
  console.warn('[cubot] Faltan VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY: el chat estará deshabilitado.');
}