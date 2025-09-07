export function useAuthService() {
  const { post } = useApiService()

  const sendOTP = (email: string) => {
    return post('/auth/otp/send', { email })
  }

  const verifyOTP = (code: string, email: string) => {
    return post('/auth/otp/verify', { code, email })
  }

  return {
    sendOTP,
    verifyOTP,
  }
}