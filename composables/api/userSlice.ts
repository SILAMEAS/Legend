// composables/api/user.ts
import { useAuthHeader } from './useAuthHeader'

export interface UserDTO {
    id: number
    name: string
    email: string
}

export interface CreateUserDTO {
    name: string
    email: string
}

export interface UpdateUserDTO extends CreateUserDTO {}

export const useUserApi = () => {
    const config = useRuntimeConfig()
    const baseURL = config.public.API_BASE_URL
    const headers = useAuthHeader()

    const getUserById = async (id: number): Promise<UserDTO | null> => {
        try {
            return await $fetch(`/users/${id}`, {
                baseURL,
                headers,
            })
        } catch (err) {
            console.error(`Failed to fetch user ${id}:`, err)
            return null
        }
    }

    const getAllUsers = async (): Promise<UserDTO[] | null> => {
        try {
            return await $fetch('/users', {
                baseURL,
                headers,
            })
        } catch (err) {
            console.error('Failed to fetch users:', err)
            return null
        }
    }

    return { getUserById, getAllUsers }
}

export const useUserMutations = () => {
    const config = useRuntimeConfig()
    const baseURL = config.public.API_BASE_URL
    const headers = useAuthHeader()

    const createUser = async (userData: CreateUserDTO): Promise<UserDTO | null> => {
        try {
            return await $fetch('/users', {
                method: 'POST',
                body: userData,
                baseURL,
                headers,
            })
        } catch (err) {
            console.error('Create user failed:', err)
            return null
        }
    }

    const updateUser = async (id: number, userData: UpdateUserDTO): Promise<UserDTO | null> => {
        try {
            return await $fetch(`/users/${id}`, {
                method: 'PUT',
                body: userData,
                baseURL,
                headers,
            })
        } catch (err) {
            console.error(`Update user ${id} failed:`, err)
            return null
        }
    }

    return { createUser, updateUser }
}
