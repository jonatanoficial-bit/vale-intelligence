import { z } from 'zod'

const publicEnvironmentSchema = z.object({
  VITE_APP_ENV: z
    .enum(['development', 'staging', 'production', 'demo'])
    .catch('development'),
  VITE_DEMO_MODE: z
    .enum(['true', 'false'])
    .catch('false')
    .transform((value) => value === 'true'),
  VITE_SUPABASE_URL: z.string().url().optional().or(z.literal('')),
  VITE_SUPABASE_PUBLISHABLE_KEY: z.string().min(1).optional().or(z.literal('')),
})

export const publicEnvironment = publicEnvironmentSchema.parse(import.meta.env)

export const isSupabaseConfigured = Boolean(
  publicEnvironment.VITE_SUPABASE_URL &&
  publicEnvironment.VITE_SUPABASE_PUBLISHABLE_KEY,
)
