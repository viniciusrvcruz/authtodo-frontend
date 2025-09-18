import { z } from 'zod'

const envSchema = z.object({
  NUXT_PUBLIC_API_BASE_URL: z.string().url(),
  CONTAINER_API_BASE_URL: z.string().url().nullable(),
})

export const env = envSchema.parse(process.env)