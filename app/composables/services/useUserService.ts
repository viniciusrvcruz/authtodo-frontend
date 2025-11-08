export function useUserService() {
  const { put } = useApiService()

  const updateUserName = (name: string) => {
    return put('/user/update', { name })
  }

  return {
    updateUserName
  }
}