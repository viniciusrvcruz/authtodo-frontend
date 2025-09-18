import { env } from './env'

export function getApiBaseUrl(): string {
  const publicApiBaseUrl = env.NUXT_PUBLIC_API_BASE_URL
  const containerApiBaseUrl = env.CONTAINER_API_BASE_URL

  return import.meta.client
    ? publicApiBaseUrl
    : containerApiBaseUrl ?? publicApiBaseUrl;
}