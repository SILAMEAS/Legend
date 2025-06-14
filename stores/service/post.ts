import {defineStore} from 'pinia'
import {useEnv} from "~/stores/service/useEnv";

interface Post {
    id: number
    title: string
}

export const usePostStore = defineStore('posts', {
    state: () => ({
        posts: [] as Post[],
        loading: false,
        error: null as string | null,
    }),

    actions: {
        async fetchPosts() {
            this.loading = true
            this.error = null

            try {
                const {API_BASE_URL} = useEnv();
                this.posts = await $fetch<Post[]>(`${API_BASE_URL}/posts`)
            } catch (error: any) {
                this.error = error.message || 'Failed to fetch posts'
            } finally {
                this.loading = false
            }
        },
    },
})
