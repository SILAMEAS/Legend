// composables/useApiMutation.ts
export const useApiMutation = <TResponse = any, TPayload = any>() => {
    const loading = ref(false)
    const error = ref<Error | null>(null)
    const data = ref<TResponse | null>(null)

    const mutate = async (
        url: string,
        method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
        payload?: TPayload
    ) => {
        loading.value = true
        error.value = null

        try {
            const options: any = { method }

            if (method !== 'GET' && payload) {
                options.body = payload
            }

            const response = await $fetch<TResponse>(url, options)
            data.value = response
            return response
        } catch (err: any) {
            error.value = err
            console.error(`API ${method} error:`, err)
            throw err
        } finally {
            loading.value = false
        }
    }

    return {
        mutate,
        loading,
        error,
        data,
    }
}
