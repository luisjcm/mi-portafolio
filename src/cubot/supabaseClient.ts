import { createClient } from '@supabase/supabase-js';

// 1. Intentamos leer las variables reales. 
// 2. Si no existen (ej. clonaste en otra PC sin el .env), usamos un string de respaldo.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dummy-url-para-evitar-crash.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'dummy-anon-key-para-evitar-crash';

// El cliente se inicializará siempre, evitando el colapso de la aplicación.
export const supabase = createClient(supabaseUrl, supabaseKey);