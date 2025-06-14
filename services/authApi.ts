// services/authApi.ts
export const getUserProfile = async (token: string) => {
    return await $fetch('/api/profile', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
