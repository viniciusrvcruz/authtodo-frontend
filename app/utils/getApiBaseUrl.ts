import { env } from './env'

export function getApiBaseUrl(): string {
  return import.meta.client
    ? env.NUXT_PUBLIC_API_BASE_URL
    : env.CONTAINER_API_BASE_URL;
}