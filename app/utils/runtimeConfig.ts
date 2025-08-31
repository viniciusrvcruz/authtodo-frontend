import { z } from 'zod'

export default function runtimeConfig() {
    const config = useRuntimeConfig()
    
    const envSchema = z.object({
      apiBaseURL: z.string(),
    })
    
    return envSchema.parse({
      apiBaseURL: config.public.apiBaseUrl,
    })
}
