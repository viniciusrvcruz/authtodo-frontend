export function useAuthService() {
    const { post } = useApiService()

    const sendOTP = (email: string) => {
        return post('/auth/otp/send', { email })
    }

    return {
        sendOTP
    }
}