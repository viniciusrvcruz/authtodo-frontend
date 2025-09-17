export function useAuthService() {
  const { post, get } = useApiService()

  const sendOTP = (email: string) => {
    return post('/auth/otp/send', { email })
  }

  const verifyOTP = (code: string, email: string) => {
    return post('/auth/otp/verify', { code, email })
  }

  const csrfCookie = () => {
    return get('/sanctum/csrf-cookie')
  }

  return {
    sendOTP,
    verifyOTP,
    csrfCookie,
  }
}