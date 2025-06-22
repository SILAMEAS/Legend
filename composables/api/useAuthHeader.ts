export const useAuthHeader = (): HeadersInit | undefined => {
    const token = useCookie('auth_token') // or usePinia if needed

    if (token.value) {
        return {
            Authorization: `Bearer ${token.value}`
        }
    }

    return undefined // ✅ valid fallback
}
