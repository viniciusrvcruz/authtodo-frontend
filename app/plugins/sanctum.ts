export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const sanctumConfig = useSanctumConfig()

  sanctumConfig.baseUrl = config.public.apiBaseUrl
})
