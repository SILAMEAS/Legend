export const useEnv=()=>{
    const config = useRuntimeConfig()
    return {
        API_BASE_URL: config.public.API_BASE_URL
    }
}