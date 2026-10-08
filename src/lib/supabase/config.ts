import { isSupabaseConfigured, publicEnvironment } from '../environment'

export const supabaseConfiguration = {
  isConfigured: isSupabaseConfigured,
  url: publicEnvironment.VITE_SUPABASE_URL || null,
} as const

/**
 * A criação do cliente autenticado será implementada no Lote 04.
 * Esta camada evita que telas públicas tentem usar credenciais ausentes.
 */
export function requireSupabaseConfiguration() {
  if (!supabaseConfiguration.isConfigured) {
    throw new Error('Supabase ainda não está configurado para este ambiente.')
  }

  return supabaseConfiguration
}
